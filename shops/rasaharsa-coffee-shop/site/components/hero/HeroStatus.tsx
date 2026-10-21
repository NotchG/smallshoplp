"use client";
import StatusLine from "@/components/StatusLine";
import { useHeroStatus } from "./HeroShell";

export default function HeroStatus() {
  const status = useHeroStatus();
  return <StatusLine status={status} tone="dark" />;
}
