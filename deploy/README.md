# smallshoplp on the NAS

The whole pipeline runs on the TrueNAS SCALE box (24.10 or later) as one Custom App with two
containers, both from the public Docker Hub image `<dockerhub-user>/smallshoplp-runner`:

| Service | Does |
|---|---|
| `lms` | the approval app (`approve-app/`) on port 3030, reading and writing `/repo` |
| `worker` | runs queued jobs one at a time (`node /repo/worker/run.mjs`): git pull, the job, commit, push |

You open the app at `https://leads.achmedfidel.com` (or whatever hostname you pick), through the
Cloudflare Tunnel the NAS already runs, behind Cloudflare Access. `lms` has no login of its own,
so it listens only on the NAS's loopback (`127.0.0.1:3030`): Access is the one way in.

The git checkout on the NAS is the only place data changes. The Mac is for code only.

Files here:

- `Dockerfile`: the image (Node 22, git, jq, curl, ffmpeg, ssh, Playwright 1.63 Chromium, Claude Code, the approval app's production build).
- `compose.yaml`: the Custom App.
- `../.github/workflows/runner-image.yml`: builds the image and pushes it to Docker Hub.

Everything lives on the `NotchGPool` pool. NAS commands run in **System → Shell** as root. Start each
session with:

```bash
sudo -i
```

```bash
P=/mnt/NotchGPool/smallshoplp
```

## 1. Create the dataset

**Datasets → Add Dataset** on `NotchGPool`: name `smallshoplp`, Dataset Preset **Generic**.
The Apps and SMB presets add ACLs that make ssh refuse the deploy key as "unprotected".

```bash
mkdir -p $P/home/.ssh
```

| Folder | Holds |
|---|---|
| `repo/` | the git checkout: code and data (made by the clone in step 2) |
| `home/` | the runner user's home: Claude config, npm cache, the deploy key |

The containers run as UID/GID 568 (TrueNAS's `apps` user). Step 3 hands everything to it.

## 2. Deploy key and clone

Make a key that only this repo trusts:

```bash
ssh-keygen -t ed25519 -N "" -C smallshoplp-nas -f $P/home/.ssh/id_ed25519
```

```bash
ssh-keyscan -t ed25519 github.com > $P/home/.ssh/known_hosts
```

```bash
ssh-keygen -lf $P/home/.ssh/known_hosts
```

The last command must print `SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU`, which is GitHub's
key. If it prints anything else, stop.

```bash
cat $P/home/.ssh/id_ed25519.pub
```

On GitHub: **NotchG/smallshoplp → Settings → Deploy keys → Add deploy key**. Title it
`TrueNAS worker`, paste that line, and tick **Allow write access** (the worker pushes).

Clone over SSH:

```bash
GIT_SSH_COMMAND="ssh -i $P/home/.ssh/id_ed25519 -o UserKnownHostsFile=$P/home/.ssh/known_hosts" git clone git@github.com:NotchG/smallshoplp.git $P/repo
```

## 3. Copy `.env` and `data/coolify.json` from the Mac

Both are gitignored, so the clone doesn't have them. `.env` holds `GOOGLE_PLACES_KEY`,
`COOLIFY_URL` and `COOLIFY_TOKEN`; `data/coolify.json` holds the Coolify project and server ids.

From the repo folder on the Mac. This needs **System → Services → SSH** on, and your TrueNAS
admin user (`<admin>`, usually `truenas_admin`) allowed to log in over SSH, with a password or
your Mac's key, in **Credentials → Users**:

```bash
scp .env data/coolify.json <admin>@<nas-ip>:/tmp/
```

On the NAS:

```bash
mv /tmp/.env $P/repo/.env && mv /tmp/coolify.json $P/repo/data/coolify.json
```

If `COOLIFY_URL` in `.env` says `localhost` or `127.0.0.1`, change it to the NAS's LAN address
(`http://<nas-ip>:8000`): inside a container, localhost is the container itself.

Then give everything to the runner user and lock down the secrets:

```bash
chown -R 568:568 $P/repo $P/home && chmod 700 $P/home/.ssh && chmod 600 $P/home/.ssh/id_ed25519 $P/repo/.env
```

## 4. Claude token

On the Mac:

```bash
claude setup-token
```

Sign in when the browser opens. It prints a long-lived token for `CLAUDE_CODE_OAUTH_TOKEN`.
This token runs on your own Claude subscription: use it only for your own jobs on this NAS, and
never share it or let anyone else's work run on it.

If you'd rather pay per use, create an API key at console.anthropic.com and use
`ANTHROPIC_API_KEY` instead (step 7 says how).

## 5. Cloudflare Access, then the tunnel hostname

The app can queue jobs that run Claude, push to GitHub and delete Coolify apps, so it must never
be public without a login. Set up Access **before** the hostname exists.

**Access application** (Cloudflare dashboard → **Zero Trust → Access → Applications → Add an
application → Self-hosted**):

1. Name `smallshoplp leads`. Application domain: `leads.achmedfidel.com`.
2. Session duration: 1 month (or less, as you like).
3. Policy: action **Allow**, include **Emails**: your own email address, nothing else.
4. Login method: **One-time PIN** (a code to that email). Save.

Access covers the whole hostname, the app's API included.

**Tunnel hostname** (**Zero Trust → Networks → Tunnels → your NAS tunnel → Public Hostname → Add**):

1. Subdomain `leads`, domain `achmedfidel.com`, service **HTTP** `localhost:3030`.
2. Order matters: the tunnel already sends `*.achmedfidel.com` to Coolify (`localhost:80`). Move
   `leads` **above** that wildcard, or Coolify answers instead. If your tunnel is run from a local
   `config.yml` rather than the dashboard, add the rule before the wildcard there:

   ```yaml
   - hostname: leads.achmedfidel.com
     service: http://localhost:3030
   ```

`localhost` works because `cloudflared` reaches the NAS's own ports; it already reaches Coolify
the same way. If it ever runs without host networking, bind `lms` to the NAS's LAN address in
`compose.yaml` instead of `127.0.0.1`, and point the tunnel there.

The mockup sites use `{slug}-mockup.achmedfidel.com`, so `leads` can't collide with a shop.

## 6. Docker Hub image

The image is public on Docker Hub, so TrueNAS pulls it without a login. It holds only the
approval app's code (`approve-app/`, see `Dockerfile.dockerignore`): no `.env`, no shop data, no
scripts. Note that this makes the dashboard's code public even though the repo is private.

GitHub builds and pushes it on every push to `main` that touches `deploy/`, `approve-app/` or
`worker/`. Set that up once:

1. On Docker Hub: **Account settings → Personal access tokens → Generate new token**, access
   **Read & Write**. Copy it.
2. On GitHub, **NotchG/smallshoplp → Settings → Secrets and variables → Actions**:
   - **Variables → New repository variable**: `DOCKERHUB_USERNAME` = your Docker Hub username.
   - **Secrets → New repository secret**: `DOCKERHUB_TOKEN` = the token.
3. **Actions → runner image → Run workflow**, and wait for it to go green. The first push
   creates the public repository `<dockerhub-user>/smallshoplp-runner` on Docker Hub.

To check from the NAS shell:

```bash
docker pull <dockerhub-user>/smallshoplp-runner:latest
```

## 7. Install the Custom App via YAML

**Apps → Discover Apps → ⋮ → Install via YAML**. Name it `smallshoplp` and paste
`deploy/compose.yaml` with every placeholder replaced:

- `<dockerhub-user>` in both `image:` lines.
- **worker**:
  - `GOOGLE_PLACES_KEY`, `COOLIFY_URL` and `COOLIFY_TOKEN`: the same values as in `repo/.env`.
    The Coolify scripts let `.env` win over the environment, so if you ever change them, change
    both.
  - `CLAUDE_CODE_OAUTH_TOKEN`: the token from step 4. To use an API key instead, delete that line
    and uncomment `ANTHROPIC_API_KEY` before you paste. TrueNAS drops comments when it saves.
  - `GIT_AUTHOR_EMAIL` and `GIT_COMMITTER_EMAIL`: the email for the worker's commits.
- If port 3030 is already taken on the NAS, change the middle number in `127.0.0.1:3030:3030`
  and use that port in the tunnel's service.

Save. TrueNAS pulls the image and starts the two containers.

Check it:

- On the NAS itself, `curl -sI http://127.0.0.1:3030` answers `200`.
- In a private browser window, `https://leads.achmedfidel.com` shows Cloudflare's login, **not**
  the app. If you see the app without logging in, Access isn't covering the hostname: fix that
  before anything else. After the email code, the app loads, on the Mac and on your phone.
- In the NAS shell, these should print Claude Code's version, reach GitHub with the deploy key
  without pushing anything, and print Chromium's version. `docker ps` lists the container names
  if yours differ.

```bash
docker exec ix-smallshoplp-worker-1 claude --version
```

```bash
docker exec ix-smallshoplp-worker-1 git -C /repo push --dry-run
```

```bash
docker exec ix-smallshoplp-worker-1 node -e "require('/usr/local/lib/node_modules/playwright').chromium.launch().then(async (b) => { console.log(b.version()); await b.close(); })"
```

If the worker keeps restarting, open **Apps → smallshoplp → Workloads → worker → Logs**. The
usual causes are `worker/run.mjs` not yet on `main`, a wrong Claude token, or files not owned by
568 (`chown -R 568:568 $P/repo $P/home`).

## 8. Updating

- **Code in `approve-app/`, `worker/` or `deploy/`**: pushing it to `main` builds a new image
  (**Actions → runner image**). When that run is green, open **Apps → smallshoplp** and click
  **Update** if TrueNAS offers it. Otherwise pull the image in the shell, then **Stop** and
  **Start** the app; Start recreates the containers on the new image:

  ```bash
  docker pull <dockerhub-user>/smallshoplp-runner:latest
  ```

- **Scripts, the skill, templates, data**: nothing to do. The worker pulls before every job.
- **`deploy/compose.yaml`**: **Apps → smallshoplp → Edit**, then paste it again with your values.

## 9. First jobs after install

The NAS clone has no `site/out/` builds and no preview videos: both are gitignored. In the app,
run these two jobs, in this order:

1. **outreach-media** for all ready shops. Without `site/out/`, the script records each shop's
   live `preview_url`, using the image's own Playwright. Expect 15 to 30 seconds per shop.
2. **outreach-lines** for the same shops, to write each owner's personalized line.

When the video's style changes, **Production → Build queue → Make preview videos** lists every
ready shop whose video is missing or in an older style (an old video has no
`outreach-poster.jpg`). One click remakes them all.

From then on, run the pipeline only from the app. Nothing on the Mac should touch
`data/shops.json` or `shops/`.
