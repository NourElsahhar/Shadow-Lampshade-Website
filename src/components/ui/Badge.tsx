import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span
      className="
        inline-block
        rounded-full
        bg-[var(--color-accent)]
        px-4
        py-2
        text-sm
        font-medium
        text-white
      "
    >
      {children}
    </span>
  );
}