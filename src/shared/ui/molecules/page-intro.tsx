import { cn } from "@/shared/lib";

type PageIntroProps = {
  title: string;
  description: string;
  eyebrow?: string;
  className?: string;
  headerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function PageIntro({
  title,
  description,
  eyebrow,
  className,
  headerClassName,
  titleClassName,
  descriptionClassName,
}: PageIntroProps) {
  return (
    <header className={cn("space-y-3", className, headerClassName)}>
      {eyebrow ? (
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-on-surface-variant">
          {eyebrow}
        </p>
      ) : null}
      <h1
        className={cn(
          "text-[2rem] font-semibold tracking-[-0.03em] text-primary",
          titleClassName,
        )}
      >
        {title}
      </h1>
      <p
        className={cn(
          "max-w-2xl text-base leading-7 text-on-surface-variant",
          descriptionClassName,
        )}
      >
        {description}
      </p>
    </header>
  );
}
