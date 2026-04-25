import { cn } from "@/shared/lib";

import { Icon, type IconName } from "../atoms/icon";

type FeatureBlurbProps = {
  iconName: IconName;
  title: string;
  description: string;
  className?: string;
  iconWrapperClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function FeatureBlurb({
  iconName,
  title,
  description,
  className,
  iconWrapperClassName,
  titleClassName,
  descriptionClassName,
}: FeatureBlurbProps) {
  return (
    <div className={cn("flex items-start gap-4", className)}>
      <div
        className={cn(
          "rounded-lg border border-outline-variant bg-white p-2 text-primary",
          iconWrapperClassName,
        )}
      >
        <Icon name={iconName} className="size-5" />
      </div>
      <div>
        <h3 className={cn("text-sm font-semibold text-primary", titleClassName)}>
          {title}
        </h3>
        <p
          className={cn(
            "mt-1 text-xs leading-5 text-on-surface-variant",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
