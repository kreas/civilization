# Design System Strategy: The Architectural Monolith

## 1. Overview & Creative North Star
The North Star for this design system is **"The Architectural Monolith."**

This system moves away from the "flat web" and toward a digital environment that feels constructed, purposeful, and structural. We are not building pages; we are designing spaces. By leveraging the precision of **Aktiv Grotesk** and the electric authority of **#0028FF**, we create an editorial experience that feels like a premium architectural monograph.

To break the "template" look, designers must embrace **intentional asymmetry**. Align text to a rigid left margin while allowing imagery or accent elements to bleed off the grid or overlap container boundaries. Use extreme scale—pairing massive display type with generous whitespace—to create a sense of luxury and breathing room.

---

## 2. Colors & Surface Logic
The palette is anchored by the primary brand blue, balanced against a sophisticated range of cool-toned neutrals that provide depth without visual noise.

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders for sectioning or layout containment.
Structure must be defined through **Background Color Shifts**. For example, a `surface-container-low` (#f4f2ff) section should sit directly against a `surface` (#fbf8ff) background. This creates a "molded" look rather than a "boxed" look.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers.
- **Base:** `surface` (#fbf8ff)
- **Secondary Logic:** Use `surface-container-lowest` (#ffffff) for high-importance cards to make them "pop" against a `surface-container-low` (#f4f2ff) background.
- **Nesting:** Never place a higher-tier container inside a lower one if it breaks the logic of "rising" toward the user.

### Glass & Gradient Rule
To prevent the UI from feeling static, use **Glassmorphism** for floating elements (Navigation bars, Modals).
- Use `surface` with 80% opacity and a `backdrop-blur` of 20px.
- **Signature Gradients:** For Hero CTAs or primary interaction points, use a subtle linear gradient from `primary` (#001cbf) to `primary-container` (#0028ff) at a 135-degree angle. This adds "soul" and dimension.

---

## 3. Typography
The typographic voice is the primary vehicle for the brand's professional authority.

- **Headings (Display, Headline):** Must use **Aktiv Grotesk** at **Semi-Bold (600)** weight. Tighten letter-spacing by -2% for display sizes to ensure an "architectural" density.
- **Body & Labels:** Use **Inter**. Inter's tall x-height provides the functional clarity required for technical data, acting as the "blueprint" text to Aktiv Grotesk's "monumental" headings.

**Hierarchy as Identity:**
Use the `display-lg` (3.5rem) sparingly to anchor major sections. The contrast between a `display-lg` headline and a `body-md` (0.875rem) subtext creates the high-end editorial tension that defines this system.

---

## 4. Elevation & Depth
We achieve hierarchy through **Tonal Layering** rather than traditional structural lines.

- **The Layering Principle:** Depth is "stacked." A card is not a box; it is a plane. Place a `surface-container-lowest` card on a `surface-container-high` background to create a soft, natural lift.
- **Ambient Shadows:** Shadows should be used only for elements that truly "float" (e.g., dropdowns).
- **Blur:** 32px to 64px.
- **Opacity:** 4%–6%.
- **Color:** Use a tinted version of `on-surface` (#1a1b26) to mimic natural light.
- **The "Ghost Border" Fallback:** If a boundary is strictly required for accessibility, use the `outline-variant` (#c5c5da) at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components

### Buttons
- **Primary:** Background `primary_container` (#0028ff), Text `on_primary` (#ffffff). Shape: `DEFAULT` (0.25rem) for a sharp, architectural edge.
- **Secondary:** Background `surface_container_high`, Text `primary`. No border.
- **Tertiary:** Text `primary` with a 2px bottom margin that expands on hover.

### Input Fields
Avoid the "box" look. Use a `surface-container-low` background with a `primary` (2px) bottom-only border that activates on focus. This mimics the lines of a blueprint.

### Cards & Lists
**Strictly forbid divider lines.**
- Separate list items using `spacing-6` (1.5rem) of vertical white space.
- For cards, use a subtle shift from `surface` to `surface-container-low` to define the hit area.

### Chips & Tags
Use `primary_fixed` (#dfe0ff) backgrounds with `on_primary_fixed` (#000964) text. Keep corners slightly rounded (`md`: 0.375rem) to differentiate them from the sharper structural elements of the layout.

### Featured Component: The "Structural Bleed"
For high-end pages, use an image component that takes up 60% of the viewport width, overlapping a `surface-container-highest` content block that holds the `Aktiv Grotesk` headline. This creates a layered, magazine-style depth.

---

## 6. Do's and Don'ts

### Do:
- **Use the Spacing Scale religiously.** Layouts should feel mathematical. Use `spacing-20` (5rem) for section breathing room.
- **Align to a baseline.** Ensure your Aktiv Grotesk headings feel "grounded" on the grid.
- **Embrace whitespace.** High-end design is defined by what you leave out.

### Don't:
- **Never use pure black.** Use `on_background` (#1a1b26) for text to maintain tonal sophistication.
- **No 1px borders.** If you feel the need to draw a line, use a background color change instead.
- **Avoid "Default" Rounding.** Stick to the `DEFAULT` (0.25rem) or `none` for structural elements; only use `full` for interactive pills/chips.
