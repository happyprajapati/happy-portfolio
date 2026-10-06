"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

type CopyState = "idle" | "copied" | "failed";

/** Copies the address and confirms in a live region, so screen readers hear it too. */
export function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<CopyState>("idle");

  useEffect(() => {
    if (state === "idle") return;
    const timer = window.setTimeout(() => setState("idle"), 2500);
    return () => window.clearTimeout(timer);
  }, [state]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      // Clipboard can be blocked (insecure context, permissions); say what to do instead.
      setState("failed");
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button
        type="button"
        variant="outline"
        onClick={copy}
        className="h-11 rounded-lg bg-transparent px-4 text-sm font-medium hover:border-ink hover:bg-transparent dark:bg-transparent dark:hover:border-ink dark:hover:bg-transparent"
      >
        {state === "copied" ? <Check aria-hidden /> : <Copy aria-hidden />}
        Copy email
      </Button>
      <span role="status" aria-live="polite" className="text-sm">
        {state === "copied" && (
          <span className="inline-block animate-in rounded-full bg-ink px-3 py-1 font-medium text-paper duration-200 fade-in">
            Copied to clipboard
          </span>
        )}
        {state === "failed" && <span className="text-ink-muted">Couldn’t copy. Select the address above instead.</span>}
      </span>
    </div>
  );
}
