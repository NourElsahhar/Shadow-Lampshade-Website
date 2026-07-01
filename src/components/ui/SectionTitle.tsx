type SectionTitleProps = {
  title: string;

  description?: string;

  center?: boolean;
};

export default function SectionTitle({
  title,
  description,
  center = true,
}: SectionTitleProps) {
  return (
    <div
      className={center ? "text-center" : ""}
    >
      <h2
        className="
          font-heading
          text-4xl
          font-bold
          text-[var(--color-brand)]
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-4
            max-w-2xl
            text-[var(--color-muted)]
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}