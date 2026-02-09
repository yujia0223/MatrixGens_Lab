# MatrixLab Research Lab Design Guidelines

## Design Approach

**Reference-Based Strategy**: Drawing from academic research lab aesthetics, combining TensorLet's structured academic presentation, OpenMined's modern non-profit warmth, and EvalEvalAI's research-focused clarity.

## Typography System

**Font Stack**:
- Headlines: Inter (700-900 weight) - Clean, professional sans-serif
- Body: Inter (400-600 weight)
- Code/Technical: JetBrains Mono for citations, technical specs

**Hierarchy**:
- Hero Headline: 3.5rem (desktop), 2rem (mobile), font-weight: 800
- Section Headers: 2.5rem (desktop), 1.75rem (mobile), font-weight: 700
- Project Titles: 1.5rem, font-weight: 600
- Body Text: 1rem, font-weight: 400, line-height: 1.7
- Captions/Metadata: 0.875rem, font-weight: 500

## Layout System

**Spacing Primitives**: Use Tailwind units: 2, 4, 8, 12, 16, 20, 24, 32
- Component padding: p-8 (desktop), p-4 (mobile)
- Section spacing: py-24 (desktop), py-12 (mobile)
- Card gaps: gap-8
- Consistent vertical rhythm with py-20 between major sections

**Container Strategy**:
- Max-width: max-w-7xl for main content
- Breakout sections: w-full with inner max-w-7xl
- Reading content: max-w-4xl

## Page Structure

### Homepage

**Hero Section** (h-screen on desktop, min-h-[600px] on mobile):
- Full-width hero image: Abstract visualization of AI/neural networks, matrix patterns, or research lab environment
- Overlay with gradient for text readability
- Centered content: MatrixLab logo, tagline "Advancing AI Research Through Open Collaboration"
- Primary CTA: "Explore Research" (blurred background button)
- Floating stats bar at bottom: Publication count, Citations, Active Projects

**Research Mission** (py-20):
- Two-column layout (desktop): Left - mission statement (max-w-2xl), Right - key focus areas in icon grid
- Single column (mobile)

**Featured Projects** (py-24):
- Grid: 3 columns (desktop), 2 (tablet), 1 (mobile)
- Project cards with: thumbnail placeholder, title, brief description (2-3 lines), publication venue, year badge, "Learn More" link
- Hover state: subtle elevation change

**Impact Metrics** (py-16):
- 4-column grid (desktop), 2x2 (tablet), stacked (mobile)
- Large numbers with labels: Total Citations, h-index, Active Collaborations, Publications 2025
- Centered alignment

**Recent Publications** (py-20):
- List format with academic citation style
- Each entry: Title (bold), Authors, Venue, Year, Citation count, PDF/Link icons
- "View All Publications" CTA

**News & Events** (py-24):
- 3-column card grid
- Cards include: date badge, event/news title, brief description, "Read More" link
- Consistent card heights

### Projects Page

**Header** (py-16):
- Breadcrumb navigation
- Page title: "Research Projects"
- Filter tags: Year, Research Area

**Project Grid** (py-12):
- Same 3-column layout as homepage
- Expanded cards with more detail
- Each card: 300px min-height, consistent structure

### Publications Page

**List Layout**:
- Full-width table-style presentation
- Sortable columns: Title, Year, Citations, Venue
- Each row expandable for abstract
- Export citations button
- Google Scholar link integration

### Team Page

**Team Grid** (py-20):
- 4-column grid (desktop), 3 (tablet), 2 (mobile)
- Profile cards: Photo placeholder (circular), Name, Role, Research interests, Social links (Scholar, GitHub, LinkedIn)

### Individual Project Detail Pages

**Layout**:
- Hero banner with project title
- Metadata bar: Authors, Publication date, Venue, Citations
- Two-column: Main content (left 2/3) with abstract, methodology, results; Sidebar (right 1/3) with quick links, related projects, PDF download
- Single column on mobile

## Component Library

### Navigation
- Horizontal nav bar, sticky on scroll
- Logo left, menu items center/right
- Dropdown menus for Projects, About
- Mobile: Hamburger menu with slide-out drawer

### Cards
- Consistent border radius: rounded-lg
- Subtle shadow: shadow-md, hover:shadow-xl transition
- Padding: p-6
- White/light background with border

### Buttons
- Primary: Large, rounded-full, px-8 py-3
- Secondary: Outlined variant
- Text links: Underline on hover
- Icon buttons for social links

### Forms (Contact/Newsletter)
- Input fields: Full width, p-3, rounded-md, border
- Labels: Above inputs, text-sm, font-medium
- Submit button: Primary style

### Badges
- Year badges: Small rounded pills
- Category tags: Colored backgrounds with labels
- Citation counts: Icon + number

## Images

**Hero Image**: Full-screen background featuring abstract AI visualization, neural network patterns, or modern research lab setting with researchers collaborating. Image should convey innovation and scientific rigor.

**Project Thumbnails**: Placeholder for each project showing research diagrams, charts, or conceptual visualizations related to the work. Size: 16:9 aspect ratio, minimum 600px width.

**Team Photos**: Circular headshots, 200x200px minimum.

**Conference/Event Images**: 4:3 aspect ratio, used in news cards.

## Accessibility
- Minimum contrast ratios maintained throughout
- All interactive elements keyboard accessible
- Focus states visible on all controls
- Semantic HTML structure
- Alt text for all images
- ARIA labels for navigation

## Academic-Specific Elements
- Citation formatting follows standard academic style
- Publication metadata clearly displayed
- External links to papers, code repositories
- Collaboration acknowledgments
- Funding information in footer
- License information for open-source work