import { cn } from "@/styles/cn";
import { ComponentProps, JSX } from "solid-js";

interface TypographyProps extends ComponentProps<"h1"> {
  children: JSX.Element;
}

export const H1 = (props: TypographyProps) => (
  <h1
    {...props}
    class={cn("mt-0 mb-4 text-4xl leading-tight font-bold", props.class)}
  >
    {props.children}
  </h1>
);

export const H2 = (props: TypographyProps) => (
  <h2
    {...props}
    class={cn(
      "bg-surface sticky top-0 z-20 mt-10 py-5 text-3xl leading-none font-bold",
      props.class,
    )}
  >
    {props.children}
  </h2>
);

export const H3 = (props: TypographyProps) => (
  <h3 {...props} class={cn("mt-10 mb-4 text-2xl font-bold", props.class)}>
    {props.children}
  </h3>
);

export const H4 = (props: TypographyProps) => (
  <h4 {...props} class={cn("mt-10 mb-4 text-xl font-bold", props.class)}>
    {props.children}
  </h4>
);

export const H5 = (props: TypographyProps) => (
  <h5 {...props} class={cn("mt-8 mb-2 text-lg font-bold", props.class)}>
    {props.children}
  </h5>
);

export const H6 = (props: TypographyProps) => (
  <h6 {...props} class={cn("mt-6 mb-2 text-base font-bold", props.class)}>
    {props.children}
  </h6>
);

export const Strong = (props: ComponentProps<"strong">) => (
  <strong {...props} class={cn("font-semibold", props.class)}>
    {props.children}
  </strong>
);

export const Blockquote = (props: ComponentProps<"blockquote">) => (
  <blockquote
    {...props}
    class={cn(
      "border-elevate my-2 border-l-4 pl-4 font-medium italic",
      props.class,
    )}
  >
    {props.children}
  </blockquote>
);

export const Ul = (props: ComponentProps<"ul">) => (
  <ul
    {...props}
    class={cn("mb-6 ml-8 list-outside list-disc [&>li>ul]:ml-4", props.class)}
  >
    {props.children}
  </ul>
);

export const Ol = (props: ComponentProps<"ol">) => (
  <ol {...props} class={cn("mb-6 ml-8 list-outside list-decimal", props.class)}>
    {props.children}
  </ol>
);

export const Li = (props: ComponentProps<"li">) => (
  <li {...props} class={cn("marker:text-default text-base", props.class)}>
    {props.children}
  </li>
);

export const Paragraph = (props: ComponentProps<"p">) => (
  <p {...props} class={cn("mb-5 text-lg leading-[1.75]", props.class)}>
    {props.children}
  </p>
);

export const HR = (props: ComponentProps<"hr">) => (
  <hr {...props} class={cn("border-surface my-5", props.class)} />
);
