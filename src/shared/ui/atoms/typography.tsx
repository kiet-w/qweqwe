import { cn } from "@/shared/lib";

type HeadingProps = {
  as?: "h1" | "h2" | "h3";
  className?: string;
  children: React.ReactNode;
};

type TextProps = {
  className?: string;
  children: React.ReactNode;
};

export function DisplayHeading({
  as: Comp = "h1",
  className,
  children,
}: HeadingProps) {
  return (
    <Comp
      className={cn(
        "font-sans text-5xl font-semibold tracking-[-0.05em] text-primary sm:text-6xl md:text-7xl",
        className,
      )}
    >
      {children}
    </Comp>
  );
}

export function SectionHeading({
  as: Comp = "h2",
  className,
  children,
}: HeadingProps) {
  return (
    <Comp
      className={cn(
        "font-sans text-3xl font-semibold tracking-[-0.03em] text-primary md:text-4xl",
        className,
      )}
    >
      {children}
    </Comp>
  );
}

export function BodyLarge({ className, children }: TextProps) {
  return (
    <p
      className={cn(
        "font-serif text-xl leading-8 text-on-surface-variant md:text-2xl",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function BodyText({ className, children }: TextProps) {
  return (
    <p
      className={cn(
        "font-serif text-lg leading-8 text-on-surface-variant",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Eyebrow({ className, children }: TextProps) {
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.24em] text-on-surface-variant",
        className,
      )}
    >
      {children}
    </p>
  );
}
