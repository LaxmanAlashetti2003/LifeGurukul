# Design Guidelines: Life Transformation Expert Website

## Design Approach

**Reference-Based Approach:** Drawing inspiration from premium wellness and therapy platforms (Headspace, Calm, BetterHelp) combined with professional consulting aesthetics. The design emphasizes trust, tranquility, and transformation through clean layouts and purposeful whitespace.

---

## Typography System

**Font Families:**
- Primary: 'Inter' (Google Fonts) - All body text, buttons, form inputs
- Headings: 'Plus Jakarta Sans' (Google Fonts) - All headings and emphasis text

**Hierarchy:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold, leading-tight
- Section Headings: text-3xl md:text-4xl lg:text-5xl, font-bold
- Card Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, font-normal, leading-relaxed
- Small Text: text-sm, font-medium

---

## Layout System

**Spacing Units:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm

**Container Strategy:**
- Full-width sections with inner `max-w-7xl mx-auto px-6 lg:px-8`
- Content-focused sections: `max-w-6xl mx-auto`
- Text blocks: `max-w-3xl` for optimal readability

**Section Padding:**
- Desktop: py-20 to py-32
- Mobile: py-12 to py-16

---

## Page Structure & Components

### 1. Hero Section (100vh)
- Left-aligned content (60% width on desktop)
- Large hero image on right (40% width, rounded-3xl with subtle shadow)
- Headline + subheadline + trust indicators row (1000+ Lives, 15+ Years, etc.)
- Primary CTA button (px-8 py-4, rounded-full)
- Image: Professional portrait of expert in consultation setting, warm and welcoming

### 2. Life Segments Section
- 6-column grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3, gap-8
- Each card: p-8, rounded-2xl, shadow-sm, hover:shadow-lg transition
- Icon (Heroicons) at top, title, description
- Consistent card height with flex layout

### 3. Transformative Tools Section
- 4-column grid for services: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Featured card layout with icon, title, 4 bullet points, "Learn More" link
- p-6 spacing, rounded-xl borders

### 4. Testimonials Carousel
- 3 testimonial cards visible on desktop (grid-cols-1 md:grid-cols-3)
- Each card: p-8, rounded-2xl, includes 5-star rating, quote, client name/title
- Soft background treatment distinguishing from main sections

### 5. Booking/Contact Section (Two-Column)
- Left column (60%): Contact form with name, email, phone, message fields
- Right column (40%): Contact information cards with icons
  - Phone card, Email card, Address card, Hours card
  - Stacked vertically with gap-6
- Form inputs: rounded-lg, p-4, border focus states

### 6. Footer
- Three-column layout: Brand + Quick Links + Contact Info
- Newsletter signup form with inline button
- Social media icons (Font Awesome)
- Copyright and trust badges

---

## Component Specifications

**Buttons:**
- Primary: px-6 md:px-8, py-3 md:py-4, rounded-full, font-semibold, text-base md:text-lg
- Secondary: px-6 py-3, rounded-lg, border-2
- Hero buttons over images: backdrop-blur-sm with semi-transparent background

**Cards:**
- Border radius: rounded-xl to rounded-2xl
- Shadow: shadow-sm default, shadow-lg on hover
- Padding: p-6 to p-8
- Transitions: transition-all duration-300

**Form Inputs:**
- Height: h-12 to h-14
- Padding: px-4 py-3
- Border radius: rounded-lg
- Focus states with ring-2

**Icons:**
- Use Heroicons via CDN
- Sizes: w-8 h-8 for cards, w-12 h-12 for featured sections
- Consistent stroke-width: 1.5

---

## Images

**Required Images:**

1. **Hero Image (Primary):** Professional portrait of Dinesh Kumar Jhajhariya in consultation/teaching setting. Warm, inviting, expert appearance. Should convey trust and wisdom. Dimensions: 1200x1400px, high quality

2. **Service Icons:** Use Heroicons for Life Segments and Tools sections - no custom images needed

3. **Testimonial Avatars:** Small circular avatars (w-12 h-12, rounded-full) for each testimonial - 3-4 diverse client photos

4. **Optional Background Element:** Subtle geometric pattern or gradient overlay for hero section background (very soft, non-distracting)

**Image Treatment:**
- All photos: rounded-2xl to rounded-3xl corners
- Subtle shadow-xl for depth
- Aspect ratios maintained with object-cover

---

## Accessibility & Polish

- Maintain ARIA labels on all interactive elements
- Form validation with clear error states (red-500 text, border-red-500)
- Focus indicators: ring-2 ring-offset-2
- Semantic HTML structure (header, nav, main, section, footer)
- Alt text for all images describing content meaningfully

---

## Responsive Behavior

- Mobile: Single column layouts, stacked cards, full-width CTAs
- Tablet: 2-column grids, side-by-side form layout
- Desktop: Multi-column grids (3-4 columns), horizontal hero split
- Breakpoints: sm:640px, md:768px, lg:1024px, xl:1280px

**Critical:** Hero section adjusts from vertical stack (mobile) to horizontal split (desktop). Contact section shifts from stacked to two-column at md breakpoint.