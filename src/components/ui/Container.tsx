import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    // We limit the content width to improve readability
    // on ultra-wide screens.
    <div className="mx-auto w-full max-w-\[1280px]\ px-6 lg:px-8">{children}</div>
  );
}
