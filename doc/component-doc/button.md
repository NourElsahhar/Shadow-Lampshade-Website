# Button

## Responsibility

Render a reusable and accessible button with consistent styling across the application.

---

## Variants

- CTA
- Primary
- Outline

---

## Sizes

- Medium (default)

> Future:
- Small
- Large

---

## States

- Default
- Hover
- Focus
- Disabled

---

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| children | ReactNode | ✅ | Button content |
| variant | "cta" \| "primary" \| "outline" | ✅ | Button appearance |
| size | "md" | ❌ | Button size |
| disabled | boolean | ❌ | Disable interactions |
| onClick | () => void | ❌ | Click handler |

---

## Accessibility

- Keyboard accessible.
- Visible focus state.
- Proper button element.
- Disabled state supported.

---

## Examples

```tsx
<Button variant="cta">
    Request a Quote
</Button>

<Button variant="primary">
    Browse Products
</Button>

<Button variant="outline">
    Learn More
</Button>
```