import { cn } from "@/styles/cn";
import { ComponentProps, Show } from "solid-js";

export const Link = (props: ComponentProps<"a">) => {
  return (
    <Show
      when={props.href?.startsWith("/")}
      fallback={
        <a
          class={cn(
            "border-elevate text-primary border-b outline-hidden",
            "focus-visible:ring-primary focus-visible:ring-offset-surface focus-visible:ring-1 focus-visible:ring-offset-2",
            props.class,
          )}
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {props.children}
        </a>
      }
    >
      <a href={props.href} rel="prefetch" {...props}>
        {props.children}
      </a>
    </Show>
  );
};
