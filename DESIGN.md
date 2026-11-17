# TechnoRaise Design Notes

## Overview
TechnoRaise is an English-language technology publication for curious practitioners, builders, and decision-makers. Its public site should feel like a considered editorial instrument: confident, legible, technically literate, and more interested in useful ideas than decorative futurism.

## Colors
- Ink: `#101b2b` — primary dark surfaces and text.
- Paper: `#f5f7f8` — page background.
- White: `#ffffff` — reading surfaces.
- Blue: `#315efb` — links, navigation state, and editorial emphasis.
- Lime: `#c9f36a` — high-contrast accent on dark surfaces.
- Muted: `#687586` — supporting copy.

## Typography
- Display: `"Trebuchet MS", "Arial", sans-serif` for headlines and editorial titles.
- Body: `system-ui, -apple-system, "Segoe UI", sans-serif` for reading and interface copy.
- Utility: `ui-monospace, "SFMono-Regular", Consolas, monospace` for metadata and labels.
- Headlines use compact tracking and decisive scale; body copy prioritizes generous line-height.

## Layout
- Main content uses the `--page` width token (maximum 1160px) with 32px desktop gutters and 20px narrow-screen gutters.
- Desktop navigation is a single horizontal header; mobile navigation is a five-destination bottom tab bar with safe-area padding.
- Editorial lists use restrained grids on wide screens and horizontal snap rails when the content is explicitly a latest-story carousel.
- Article reading width remains narrow for long-form comfort.

## Elevation & Depth
- Use restrained borders and low-opacity shadows to distinguish interactive cards and fixed controls.
- Dark hero surfaces may use layered gradients, grid texture, and dimensional CSS artwork; avoid generic glassmorphism as a default.

## Shapes
- Favor square or lightly rounded editorial surfaces. Use modest corner radii for controls and icon marks, not pill-shaped everything.

## Components
- Header/footer share the same ink/blue/lime identity.
- Mobile tab bar remains fixed above the safe area and must not cover page content.
- Cookie consent is a compact, fixed opt-in panel. Optional analytics are not loaded until acceptance.
- Scroll controls are secondary, keyboard-accessible buttons and appear after the reader has scrolled.

## Do's and Don'ts
- Do make navigation labels explicit and route destinations predictable.
- Do keep focus states visible and respect reduced motion.
- Do preserve the strong contrast between ink, paper, blue, and lime.
- Don't hide essential navigation in hover-only menus.
- Don't load optional analytics before consent.
- Don't use visual effects that reduce reading contrast or obscure article content.
