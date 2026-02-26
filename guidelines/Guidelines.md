# Figma Import Corrections Guide

## Overview
This document outlines systematic corrections required when importing Figma design frames into the codebase. These corrections must be applied to ensure design system compliance and brand consistency.

---

## 1. Font Weight Correction

### Issue
Figma's code export tool incorrectly exports font weights for normal/regular text (400 weight) as:
```tsx
font-['Inter:Medium',sans-serif] font-medium
```

This should be regular weight (400), not medium weight (500).

### Elements Affected
- Button text (secondary actions, not primary CTAs)
- Tag labels (Active, Inactive status badges)
- Secondary text (email addresses, phone numbers)
- Contact information displays
- Form placeholder text

### Correction Required
**Remove both the font-family declaration AND the font-medium class:**

❌ **Incorrect (from Figma):**
```tsx
<p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] text-[#6e7ca8] text-[12px]">
  contact@example.com
</p>
```

✅ **Correct:**
```tsx
<p className="leading-[14px] text-[#6e7ca8] text-[12px]">
  contact@example.com
</p>
```

### When to Apply
- **Root Figma import files** (e.g., `/src/imports/Schools-1-6301.tsx`) - Fix all instances in the source file
- **Page components using imported code** (e.g., `/src/app/pages/PartnersPage.tsx`) - Apply when adapting Figma code
- **New pages created from Figma designs** - Apply corrections before committing

### Identification Pattern
Search for this exact pattern in Figma imports:
```
font-\['Inter:Medium',sans-serif\] font-medium
```

### Elements That Should Keep Bold/Semibold
**DO NOT remove font-weight from:**
- Title text with `font-semibold` (e.g., school names, partner names)
- Navigation labels with `font-semibold`
- Primary headings
- Emphasized labels

Look for:
```tsx
font-['Inter:Semi_Bold',sans-serif] font-semibold  // ✅ KEEP THIS
```

---

## 2. Brand Name Correction

### Issue
Figma design files contain an incorrect brand name.

### Correction Required

❌ **Incorrect:**
```
Let's Legislative
```

✅ **Correct:**
```
Let's Legislate
```

### Where to Apply
- Navigation dropdowns
- Header components
- Branding elements
- Any user-facing text displaying the product name

### Example
```tsx
// ❌ From Figma
<p className="leading-[14px]">Let's Legislative</p>

// ✅ Corrected
<p className="leading-[14px]">Let's Legislate</p>
```

---

## 3. Application Workflow

When creating new pages from Figma imports:

### Step 1: Font Weight Cleanup
1. Open the root Figma import file (e.g., `/src/imports/ComponentName.tsx`)
2. Search for: `font-['Inter:Medium',sans-serif] font-medium`
3. For each match, verify it's NOT a title/heading with `font-semibold`
4. Remove the entire font declaration, keeping only structural and color classes
5. Test the page visually to confirm text appears at normal weight

### Step 2: Brand Name Correction
1. Search for: `Let's Legislative`
2. Replace with: `Let's Legislate`
3. Verify in UI that name displays correctly

### Step 3: Create Page Component
1. Import and adapt the corrected Figma components
2. Apply additional corrections in the page-specific file if needed
3. Maintain only CSS variable-based styling (no hardcoded fonts)

### Step 4: Verification
- [ ] No instances of `font-['Inter:Medium',sans-serif] font-medium` in secondary text
- [ ] Titles/headings still maintain `font-semibold` where appropriate
- [ ] "Let's Legislate" displays correctly throughout
- [ ] All typography uses CSS design system variables

---

## 4. Design System Compliance

### Typography Rules
- **ONLY use font faces defined in `/src/styles/fonts.css`**
- **DO NOT add inline font-family declarations** (e.g., `font-['Inter:Medium',sans-serif]`)
- Let the design system's default typography cascade naturally
- Use Tailwind utility classes ONLY for: font-weight (`font-semibold`), NOT font-family

### Allowed Font Weight Classes
```tsx
font-semibold   // ✅ For titles, headings, emphasis
font-bold       // ✅ For strong emphasis (if design requires)
// No font-medium for body/secondary text (let it default to font-normal/400)
```

### Font Family
- ❌ Never use: `font-['Inter:Medium',sans-serif]`, `font-['Inter:Semi_Bold',sans-serif]`, etc.
- ✅ Use: Let CSS variables from theme define fonts
- ✅ Only override font-weight with Tailwind classes when needed

---

## 5. Quick Reference Checklist

Before committing code with Figma imports:

- [ ] Searched and removed `font-['Inter:Medium',sans-serif] font-medium` from body text
- [ ] Verified titles/headings keep `font-semibold` (without font-family)
- [ ] Corrected "Let's Legislative" → "Let's Legislate"
- [ ] Confirmed typography uses design system CSS variables
- [ ] No hardcoded font-family in Tailwind classes
- [ ] Tested visual appearance matches design intent

---

## 6. Common Patterns to Fix

### Pattern 1: Status Tags
```tsx
// ❌ From Figma
<p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] text-[#42a22a] text-[12px]">Active</p>

// ✅ Corrected
<p className="leading-[14px] text-[#42a22a] text-[12px]">Active</p>
```

### Pattern 2: Contact Info
```tsx
// ❌ From Figma
<p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[14px] text-[#6e7ca8] text-[12px]">
  email@example.com
</p>

// ✅ Corrected
<p className="flex-[1_0_0] leading-[14px] text-[#6e7ca8] text-[12px]">
  email@example.com
</p>
```

### Pattern 3: Button Labels (Secondary)
```tsx
// ❌ From Figma
<div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center">
  <p className="leading-[16px]">Search School</p>
</div>

// ✅ Corrected
<div className="flex flex-col justify-center">
  <p className="leading-[16px]">Search School</p>
</div>
```

### Pattern 4: Titles (KEEP font-semibold)
```tsx
// ✅ Keep this pattern (just remove font-family if present)
<div className="font-semibold text-[#2f3e6d] text-[14px]">
  <p className="leading-[16px]">Oliver High School</p>
</div>
```

---

## Notes
- This is a systematic issue with Figma's code export for this design system
- The corrections ensure consistency with the custom design system defined in CSS
- Future Figma exports will likely have the same issues and require the same corrections
- Consider creating a post-processing script if imports become frequent

---

## 7. Scrollbar Prevention

### Issue
Unwanted scrollbars can appear in containers, textareas, or form fields, disrupting the clean UI design.

### Correction Required

**For containers with fixed heights:**
```tsx
// ✅ Use overflow-hidden on parent container
<div className="overflow-hidden h-[500px]">
  {/* Content */}
</div>
```

**For editable textareas that should auto-grow:**
```tsx
// ✅ Use resize-none and auto-height logic
const titleRef = useRef<HTMLTextAreaElement>(null);

useEffect(() => {
  if (titleRef.current) {
    titleRef.current.style.height = 'auto';
    titleRef.current.style.height = titleRef.current.scrollHeight + 'px';
  }
}, [value]);

<textarea
  ref={titleRef}
  value={value}
  onChange={(e) => setValue(e.target.value)}
  className="resize-none overflow-hidden"
  rows={1}
/>
```

**For scrollable content areas:**
```tsx
// ✅ Only allow scrolling where intentional
<div className="flex flex-col h-full overflow-hidden">
  <div className="flex-none">{/* Fixed header */}</div>
  <div className="flex-1 overflow-y-auto">{/* Scrollable content */}</div>
</div>
```

### Key Rules
1. **Default to `overflow-hidden`** on main containers
2. **Use `resize-none`** on all textareas unless resize is explicitly needed
3. **Use `overflow-y-auto`** only on designated scrollable areas (sidebars, content panels)
4. **Never allow horizontal scrollbars** - use proper responsive sizing
5. **For auto-growing textareas**, combine:
   - `resize-none` class
   - `overflow-hidden` class  
   - Auto-height calculation via refs and useEffect

### Common Patterns

**Auto-growing single-line input:**
```tsx
const [text, setText] = useState("");
const textRef = useRef<HTMLTextAreaElement>(null);

useEffect(() => {
  if (textRef.current) {
    textRef.current.style.height = 'auto';
    textRef.current.style.height = textRef.current.scrollHeight + 'px';
  }
}, [text]);

<textarea
  ref={textRef}
  value={text}
  onChange={(e) => setText(e.target.value)}
  className="w-full resize-none overflow-hidden border-none focus:outline-none"
  rows={1}
  placeholder="Enter text..."
/>
```

**Multi-line textarea with fixed rows:**
```tsx
<textarea
  value={preamble}
  onChange={(e) => setPreamble(e.target.value)}
  className="w-full resize-none overflow-y-auto border-none focus:outline-none"
  rows={3}
  placeholder="Enter description..."
/>
```