1. Critical & Functional Bugs
🚨 1. Search Bar is Completely Non-Functional
File: 

src/components/SearchBar.astro
 & 

src/pages/index.astro
The Bug: There is zero JavaScript attached to the search input or button. Typing into the search bar or clicking the magnifying glass icon does nothing.
Impact: Users expect real-time or Enter-key search filtering across watch brands, models, and references. Right now, it's just a non-interactive UI shell.
🐛 2. Filter Chip Matching Bug ("Dress" Matches "Dress Sports")
File: 

src/pages/index.astro:89-94
The Bug: Category filtering uses .includes(category).
javascript
if (category === 'all' || groupCategory.includes(category))
When a user clicks the "Dress" chip, "dress sports".includes("dress") evaluates to true, causing the Audemars Piguet Royal Oak (which is "Dress Sports") to appear under "Dress".
Impact: Inaccurate filtering; users clicking "Dress" get "Dress Sports" models.
🐛 3. Hardcoded Fallback Dial Color Logic
File: 

src/pages/index.astro:51
The Bug: The luxury header has hardcoded binary dial color logic:
astro
{pair.data.luxury.imageAlt.toLowerCase().includes('black') ? 'black dial' : 'blue dial'}
Impact: Any future watch entry with a white, green, silver, or champagne dial will automatically be labeled "blue dial".
2. Architecture & Data Consistency Issues
⚠️ 4. "Full Comparison & Analysis →" Links to the Wrong Watch
Files: 

src/pages/index.astro:57
 & 

src/pages/[slug].astro:63-86
The Issue: Under each luxury watch, there is a grid of multiple homages (e.g. Rolex has San Martin, Pagani Design, Steinhart, Invicta, Loreo). Every card has a "Full Comparison & Analysis →" button pointing to /[slug] (e.g. /rolex-submariner-homage).
The Bug: The comparison page is hardcoded to only compare the luxury watch with pair.data.homage (San Martin). If a user clicks "Full Comparison" on the Steinhart or Invicta card, they land on a page comparing the San Martin, with zero mention of the watch they actually clicked on.
Recommendation: Either:
Add a dropdown/tabs on [slug].astro to switch between all available homages for that luxury watch, or
Route to specific comparisons (e.g., /[slug]?homage=steinhart-ocean-one-black or dynamic sub-routes).
⚠️ 5. Duplicated & Desynchronized Data
Files: 

src/content/pairs/*.json
The Issue: The JSON files define homage: { ... } as an object, and then re-declare the exact same homage as the first element in the homages: [ ... ] array. If one is updated (e.g., price changed to $199), the other can easily go out of sync.
3. User Experience (UX) & Visual Issues
🖼️ 6. Missing Images Trigger Broken Image Icons Instead of Placeholder Fallback
Files: 

src/components/WatchCard.astro:14-48
 & 

public/images/
The Issue: The public/images/ directory is currently empty. Because watch.image is a non-empty string in JSON, WatchCard.astro renders an <img src="..."> tag which returns 404, never triggering the fallback SVG placeholder.
Impact: Broken image icons show up in the browser unless an onerror handler switches it to the fallback SVG.
📱 7. Sticky Header + Filter Bar Takes Up Too Much Mobile Screen Space
Files: 

src/layouts/BaseLayout.astro:92
 & 

src/pages/index.astro:136
The Issue: Both .site-header (top: 0) and .filter-bar (top: 49px) are sticky on mobile. Combined with the search bar, category chips, and wordmark, this occupies ~150px of vertical height, eating up over 20% of a mobile screen while scrolling.
Recommendation: On mobile, make either only the search/filter sticky, or un-stick the filter bar on scroll-down and show on scroll-up.
📭 8. No Empty State for Categories or Search
The Issue: If a user clicks "Pilot" (or searches for a term with no matches), all cards vanish, leaving a completely blank white space.
Recommendation: Add a user-friendly empty state: "No homage pairs found for this search/category. Try clearing your filters." with a "Reset Filters" button.
📝 9. Placeholder / Dev Copy Visible on Full Comparison Pages
File: 

src/pages/[slug].astro:99-117
The Issue: The editorial sections display development placeholder text directly to visitors:
"Add your editorial notes here. Dial finishing, hand set accuracy..."
"Be honest here — movement quality difference..."
Recommendation: Either pull these notes from the content JSON file or hide the section if editorial notes aren't provided.
4. Accessibility (a11y) & Contrast Issues
♿ 10. Filter Chips Are Inaccessible to Keyboard Users
File: 

src/pages/index.astro:30-36
The Issue: The chips are implemented as <span class="filter-chip"> instead of <button type="button">.
Impact: Users navigating with Tab or screen readers cannot focus, tab into, or activate any of the category filters.
🎨 11. Low Contrast on Dark Homage Cards
File: 

src/components/WatchCard.astro:242, 260
The Issue: On the homage card (#111111 background):
.reference--homage uses #4a4a4a, which has a contrast ratio of 2.1:1 (fails WCAG AA threshold of 4.5:1).
.speckey--homage and .pricelabel--homage use #787878, which has a ratio of 3.5:1 at 9px–11px font sizes.
Impact: Small text is very difficult to read in dark mode.