"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { chooseTheme, isDarkApplied, subscribeToTheme } from "@/lib/theme";

/**
 * Light/dark switch. The icon is chosen by CSS from the class the head
 * script already set, so server and client markup match and nothing flips
 * after hydration; only the accessible name waits for the client.
 */
export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribeToTheme, isDarkApplied, () => null);

  const label = isDark === null ? "Switch theme" : isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={label}
      onClick={() => chooseTheme(isDarkApplied() ? "light" : "dark")}
      className="size-11 rounded-lg text-ink-muted hover:text-ink"
    >
      <Moon aria-hidden className="size-[18px] dark:hidden" />
      <Sun aria-hidden className="hidden size-[18px] dark:block" />
    </Button>
  );
}
