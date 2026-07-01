import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "cta" | "primary" | "outline";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  // Button label or any JSX content.
  children: ReactNode;

  // Controls the visual appearance.
  variant?: ButtonVariant;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    cta: "bg-[var(--color-cta)] text-white hover:opacity-90",

    primary:
      "bg-[var(--color-brand)] text-white hover:bg-[#0D2538]",

    outline:
      "border border-[var(--color-brand)] text-[var(--color-brand)] bg-transparent hover:bg-[var(--color-brand)] hover:text-white",
  };

  return (
    <button
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        px-6
        py-3
        text-sm
        font-semibold
        transition-all
        duration-200
        focus:outline-none
        focus:ring-2
        focus:ring-[var(--color-accent)]
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}