import { cn } from "@/lib/utils";

/** The page's horizontal frame: 1200px max, 16px gutters on phones, 32px from md. */
export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-4 md:px-8", className)} {...props} />;
}
