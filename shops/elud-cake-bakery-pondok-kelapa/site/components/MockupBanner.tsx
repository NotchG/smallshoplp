// One element: delete it (and its line in layout.tsx) once the owner approves the site.
export default function MockupBanner({ text }: { text: string }) {
  return (
    <div role="note" className="mockup-banner">
      {text}
    </div>
  );
}
