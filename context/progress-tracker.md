# Homage Index — Progress Tracker

## Status: In Progress
**Last Updated**: October 4, 2026

---

### Session Changelog & Completed Tasks

#### 📅 October 4, 2026

- [x] **Filter Chips Keyboard & Screen Reader Accessibility (Issue #10)**:
  - Converted category filter chips from non-interactive `<span>` elements into semantic `<button type="button">` elements.
  - Set `role="group"` and `aria-label="Category filters"` on the container with dynamic `aria-pressed="true" / "false"` state updates.
  - Preserved exact pill height (28px) by enforcing `line-height: 1.6` and `display: inline-flex` on `.filter-chip` to prevent browser button line-height collapse.
  - Added high-contrast `:focus-visible` styling (`outline: 2px solid var(--color-ink)`) for keyboard tabbing navigation.
  - Handled mobile drawer `visibility: hidden` when closed to prevent invisible offscreen keyboard focus.
  - ⚠️ **Key Learning / Gotcha (Scoped CSS vs Global Utility Typography)**:
    - *The Mistake*: During the conversion to `<button>`, defensive reset properties (`font-family: inherit; font-size: inherit; letter-spacing: inherit; text-transform: inherit; font-weight: inherit;`) were added directly to `.filter-chip`. Because Astro scopes component styles with attribute selectors (`[data-astro-cid-...]`), `.filter-chip` has higher specificity `(0, 2, 0)` than the global `.t-label` class `(0, 1, 0)`. The `inherit` values overrode `.t-label`, inheriting `body` styles (`text-transform: none`, `letter-spacing: normal`, `font-size: 16px`) instead of `.t-label`'s `uppercase`, `0.2em` tracking, and `11px` size, causing the button inner text to visually change to mixed-case standard text.
    - *The Solution*: Do not set font/text `inherit` rules on scoped component selectors when elements share a global utility class like `.t-label`. Confine component-level button resets strictly to box model and layout properties (`display: inline-flex`, `line-height: 1.6`, `background: transparent`, `padding`, `border-radius`), leaving typography styling to `.t-label`.
- [x] **Filter Pill Hover Accentuation**:
  - Matched the hover border on inactive filter pills to `var(--color-ink)` (solid black), giving them the same bold, distinct accentuation as the search bar and filter button.
- [x] **Enhanced Border and Outline Visibility Across the Site**:
  - Replaced subpixel `0.5px` borders with crisp `1px` lines across all components to eliminate blurry/faint hairlines on standard and high-DPI screens.
  - Introduced design tokens in `src/styles/global.css`:
    - `--color-border: #cdc8be;` (higher-contrast warm stone border replacing ultra-faint `#e0ddd6`).
    - `--color-border-strong: #b8b3a7;` (for active/hover states).
  - Strengthened dark mode homage card borders and dividers (`--color-dark-border: #383838;`, `#444444`).
  - Updated all affected components:
    - Search Bar outline (`src/components/SearchBar.astro`)
    - Filter chips and Filter toggle button outlines (`src/pages/index.astro`)
    - Site Header & Footer dividers (`src/layouts/BaseLayout.astro`)
    - Watch card borders, tag outlines, spec dividers, and comparison button (`src/components/WatchCard.astro`)
    - Score bridge vertical guidelines, separator line, and pill border (`src/components/ScoreBridge.astro`)
    - Page header, comparison layout dividers, and editorial borders (`src/pages/[slug].astro`)

- [x] **Eliminated Text & Drawer Bounce on Button Toggle**:
  - Replaced oversized `max-height: 60px` animation with a modern CSS Grid animation (`grid-template-rows: 0fr` ➔ `1fr`) on `.filter-drawer`.
  - Content now unrolls to its exact intrinsic height without overshooting or internal vertical jitter of the "Browse by" text and chips.
  - Synchronized transition duration (`0.22s ease`) across grid rows, opacity, and margin-bottom.
  - Locked button typography baselines with `line-height: 1` and scoped transitions strictly to `background-color`, `border-color`, `color`, and `opacity`.

- [x] **Filter Button Color Inversion & Contrast Tuning**:
  - Inverted the Filter button styling:
    - **Default/Closed**: Solid black (`var(--color-ink)`) with white text, white icon, and white active indicator dot.
    - **Open/Expanded**: Transparent/light with dark ink text (`var(--color-ink)`), dark icon, and dark active indicator dot.
  - Dynamic indicator dot (`.filter-badge`) renders white-on-black when closed and black-on-white when opened.

- [x] **Restored Full Filter Pill Height**:
  - Reverted filter chips from `<button>` back to `<span>` elements with original `padding: 4px 12px` and natural inherited line-height (`1.6`), restoring their full vertical height.

- [x] **Mobile Filter Button Placement**:
  - Positioned the Filter toggle button on the **left** side of the search bar for ergonomic mobile access (`[ ⚙️ Filter ] [ Search homages... 🔍 ]`).

#### 📅 October 3, 2026

- [x] **Compact Mobile Sticky Filter Bar**:
  - Compacted mobile sticky filter bar (`< 540px`) to reclaim over 45px of vertical screen real estate (reduced collapsed bar height to ~56px).
  - Search bar and Filter toggle button sit adjacent on the same line.
  - Category pills collapse by default and expand smoothly **above** the search bar row upon tapping "Filter".
  - Preserved exact pill and search bar dimensions.
  - Fixed category filter matching bug ("Dress" was matching "Dress Sports").
  - Preserved standard side-by-side desktop layout on screens `≥ 540px` (Filter button hidden).

#### 📅 October 1, 2026

- [x] **Architecture Analysis & System Audit**:
  - Clarified Astro Content Collections data flow: JSON files in `src/content/pairs/` act as the single source of truth for both homepage previews and dynamic `/[slug]` comparison pages.
  - Conducted full project audit identifying 11 functional, UX, accessibility, and contrast issues (logged in `context/issue-tracker.md`).

