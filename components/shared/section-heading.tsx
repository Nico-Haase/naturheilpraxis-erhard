import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  badge,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {badge ? (
        <Badge
          variant="secondary"
          className="rounded-full border border-border px-4 py-1 text-[11px] uppercase tracking-[0.22em]"
        >
          {badge}
        </Badge>
      ) : null}

      <div className="space-y-3">
        <h2 className="text-balance text-3xl font-semibold leading-tight text-foreground md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-muted-foreground md:text-lg">{description}</p>
        ) : null}
      </div>
    </div>
  );
}