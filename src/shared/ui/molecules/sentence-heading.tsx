import { DisplayHeading } from "../atoms/typography";

type SentenceHeadingProps = {
  children: string;
  className?: string;
};

export function SentenceHeading({
  children,
  className,
}: SentenceHeadingProps) {
  const headingParts = children.split(". ");

  return (
    <DisplayHeading className={className}>
      {headingParts.map((part, index) => (
        <span key={`${part}-${index}`}>
          {part}
          {index < headingParts.length - 1 ? "." : ""}
          {index === 0 ? <br /> : null}
        </span>
      ))}
    </DisplayHeading>
  );
}
