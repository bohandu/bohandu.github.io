# Design

## Design Philosophy

The site should feel like a concise Chinese portfolio for a job search: direct, readable, and credible. The visual system uses a pure white page, deep cool ink, restrained indigo, and a small amount of green accent so the interface feels focused without becoming a one-color template.

Physical scene: a recruiter opens the site during a weekday screening session, under ordinary office light, and needs to understand the candidate's range before deciding whether to open the resume.

## Color Tokens

Use OKLCH color values throughout.

```css
:root {
  --bg: oklch(1 0 0);
  --surface: oklch(0.972 0.004 270);
  --surface-strong: oklch(0.935 0.008 270);
  --ink: oklch(0.18 0.025 270);
  --muted: oklch(0.42 0.02 270);
  --line: oklch(0.88 0.006 270);
  --primary: oklch(0.36 0.13 270);
  --primary-soft: oklch(0.92 0.04 270);
  --accent: oklch(0.52 0.105 150);
  --accent-soft: oklch(0.93 0.04 150);
}
```

## Typography

Use self-hosted Noto Sans SC for a more polished Chinese reading experience, then fall back to reliable system Chinese sans-serif stacks:

```css
font-family: "Noto Sans SC", ui-sans-serif, system-ui, -apple-system,
  BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC",
  sans-serif;
```

Headings should be compact, confident, and free of decorative letter spacing. Body copy should stay within readable line lengths.

## Components

Cards use 8px radius or less. Buttons use icons where available and clear text only when the action needs it. Filtering controls use segmented buttons. Persistent actions are fixed at the top right on desktop and collapse into a hamburger menu on mobile.

The top navigation is sticky, white, lightly bordered, and deliberately quiet. The name block can display two compact education logo slots after the name for Renmin University of China and University of Amsterdam; these should stay small enough to support credibility without turning the navigation into a resume banner.

## Layout

Use a restrained editorial structure without magazine clichés: a clear hero, a short capability summary, then direct routes into writing and AI projects. Grids should use responsive minimum widths rather than breakpoint-heavy layouts.

## Motion

Keep motion minimal. Use color and border transitions for hover states, with a reduced-motion fallback that removes transition timing.
