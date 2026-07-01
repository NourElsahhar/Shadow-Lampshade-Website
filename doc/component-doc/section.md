# Section Component

## Responsibility

Provide a reusable wrapper for every page section with consistent vertical spacing and a shared container.

---

## Why?

Almost every section in the website needs:

- Top and bottom spacing.
- A responsive content container.
- An optional HTML id for navigation.

Instead of repeating this structure in every section, we encapsulate it into a reusable component.

---

## Responsibilities

- Apply consistent vertical spacing.
- Accept an optional `id` for navigation.
- Wrap content inside the `Container` component.

---

## Does NOT Handle

- Background colors.
- Typography.
- Animations.
- Business logic.

---

## Used In

- Hero
- About
- Services
- Industries
- Featured Projects
- Why Choose Us
- Contact

---

## Software Engineering Principles

### DRY (Don't Repeat Yourself)

Avoid duplicating spacing and layout logic.

### Composition

The `Section` component composes the `Container` component instead of rewriting its functionality.

### Single Responsibility Principle (SRP)

The component is only responsible for section layout and spacing.

---

## Example

```tsx
<Section id="services">
  <Services />
</Section>
```