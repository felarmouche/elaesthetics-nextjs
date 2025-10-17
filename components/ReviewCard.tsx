"use client";

import * as React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import type { Review } from "@/types/Review";

// Minimaler Helper für className-Merging
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export type ReviewCardProps = {
  review: Review; // { id, name, rating, text, date }
  maxChars?: number; // "Mehr anzeigen"-Grenze
  className?: string;
};

export default function ReviewCard({ review, maxChars = 220, className }: ReviewCardProps) {
  const [expanded, setExpanded] = React.useState(false);
  const { name, rating, text, date } = review;

  const formattedDate = React.useMemo(() => {
    if (!date) return undefined;
    const d = new Date(date);
    if (Number.isNaN(d.getTime())) return undefined;
    try {
      return new Intl.DateTimeFormat("de-DE", { dateStyle: "medium" }).format(d);
    } catch {
      return d.toLocaleDateString();
    }
  }, [date]);

  const isLongText = typeof text === "string" && text.length > maxChars;
  const needsClamp = !expanded && isLongText;
  const displayText = needsClamp ? text.slice(0, maxChars).trimEnd() + "…" : text;

  return (
    <Card
      className={cn(
        // WICHTIG: kein overflow-hidden -> Inhalte werden nicht abgeschnitten
        "relative overflow-visible bg-background",
        "w-full max-w-full",
        className
      )}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <Avatar className="h-11 w-11 shrink-0">
            <AvatarImage alt={name} />
            <AvatarFallback>{getInitials(name)}</AvatarFallback>
          </Avatar>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="font-medium text-foreground truncate">{name}</span>
              <StarRating rating={rating} />
              {formattedDate && (
                <span className="text-sm text-muted-foreground">• {formattedDate}</span>
              )}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex items-start gap-2">
          <Quote aria-hidden className="mt-0.5 h-4 w-4 opacity-50 shrink-0" />
          <p
            className={cn(
              // Sorgt dafür, dass lange Wörter/URLs umbrechen und nichts abgeschnitten wird
              "leading-relaxed break-words whitespace-pre-wrap text-extrathin text-sm text-foreground"
            )}
          >
            {displayText}
          </p>
        </div>

        {isLongText && (
          <button
            type="button"
            className="mt-2 px-1 text-sm text-foreground/80 underline-offset-2 hover:underline"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded ? "Weniger anzeigen" : "Mehr anzeigen"}
          </button>
        )}
      </CardContent>
    </Card>
  );
}

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  const clamped = Math.max(0, Math.min(max, rating ?? 0));
  const full = Math.floor(clamped);
  const hasHalf = clamped - full >= 0.5 && full < max;

  return (
    <div
      className="inline-flex items-center gap-0.5 text-muted-foreground"
      aria-label={`${clamped.toString().replace(".", ",")} von ${max} Sternen`}
    >
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < full || (i === full && hasHalf);
        return (
          <Star
            key={i}
            className={cn("h-4 w-4 text-yellow-500", filled ? "opacity-100" : "opacity-30")}
            // Lucide-Icons unterstützen ein "fill"-Attribut
            fill={filled ? "currentColor" : "none"}
          />
        );
      })}
      <span className="ml-1 text-xs tabular-nums text-foreground/80">
        {clamped.toFixed(1).replace(".", ",")}
      </span>
    </div>
  );
}

function getInitials(name: string) {
  return (
    name
      ?.split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((n) => n[0]?.toUpperCase())
      .join("") || "?"
  );
}