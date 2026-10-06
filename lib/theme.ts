/** localStorage key for an explicit choice; absent means the default, dark. */
export const THEME_STORAGE_KEY = "theme";

export type Theme = "light" | "dark";

/** Dark unless the visitor has chosen light. The server renders this too. */
export const DEFAULT_THEME: Theme = "dark";

/**
 * Runs in <head> before first paint. The server already renders the default
 * (dark) class, so this only has to switch to light for visitors who chose
 * it, with no flash. Storage access is guarded because it can throw in
 * private windows or with site data blocked.
 */
export const THEME_INIT_SCRIPT = `(function(){try{if(localStorage.getItem("${THEME_STORAGE_KEY}")==="light")document.documentElement.classList.remove("dark")}catch(e){}})()`;

export function isDarkApplied(): boolean {
  return document.documentElement.classList.contains("dark");
}

/** Applies a theme and remembers it as the visitor's explicit choice. */
export function chooseTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Not persisted; the choice still holds for this page view.
  }
}

/** Subscribes to changes of the applied theme (the class on <html>). */
export function subscribeToTheme(onChange: () => void): () => void {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}
