import { ReactNode } from "react";
import Container from "./Container";

type SectionProps = {
  id?: string;

  // Content rendered inside the section.
  children: ReactNode;
};

export default function Section({ id, children }: SectionProps) {
  return (
    <section id={id} className="py-20 lg:py-28">
      <Container>{children}</Container>
    </section>
  );
}
