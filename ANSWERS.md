# ANSWERS.md

## 1. How to Run

### Run Locally

1. Clone or download the repository.
2. Open the project folder in VS Code or any code editor.
3. Open `index.html` in a modern web browser.

No additional installations, frameworks, or dependencies are required.

### Live Demo

GitHub Pages URL:
https://chalitha-wickramasingha.github.io/devweekends-tip-calculator/

---

## 2. Stack & Design Choices

### Why I Chose This Stack

I chose Vanilla HTML, CSS, and JavaScript because the scope of the assessment focuses heavily on interaction quality, responsiveness, validation behavior, and frontend fundamentals rather than framework complexity.

Using a lightweight stack allowed me to focus directly on:

- smooth real-time calculations
- responsive UI behavior
- clean validation logic
- accessibility improvements
- keyboard interactions
- performance and simplicity

It also removes unnecessary tooling and makes the project easier to run and review on a fresh machine.

---

### Design Decision 1 — Split Workspace Layout

I used a two-panel layout with the calculator inputs on the left and the live summary panel on the right.

This decision improves usability because users can immediately see calculation updates while typing without losing visibility of the form fields. On larger screens, this creates a more balanced workflow between input and feedback.

On mobile devices, the layout stacks vertically to preserve readability and prevent cramped interactions.

---

### Design Decision 2 — Active Tip Selection Behavior

I implemented visually distinct active preset tip buttons and designed the interaction so that:

- selecting a preset clears the custom tip field
- typing a custom tip removes the active preset state

This avoids conflicting states and creates a clearer interaction flow for users. It also prevents accidental double-input behavior where both a preset and custom percentage appear active simultaneously.

---

## 3. Responsive & Accessibility

### Responsive Behavior

On smaller screens around 360px wide:

- the layout stacks vertically into a single-column interface
- spacing and typography scale down appropriately
- tip buttons reorganize into a mobile-friendly layout
- the result panel remains visible and readable without horizontal scrolling

On larger screens around 1440px wide:

- the application uses a two-column workspace layout
- the summary panel stays visually separated for easier scanning
- spacing expands to create a more comfortable desktop experience

---

### Accessibility Consideration Implemented

One accessibility improvement I focused on was keyboard navigation.

Users can:

- navigate inputs using the keyboard
- use Enter to move between fields
- clearly see focused elements through visible focus states

I also used semantic labels and inline validation messages connected to inputs using accessibility attributes.

---

### Accessibility Consideration Not Fully Implemented

One thing I did not fully implement was advanced screen reader optimization for dynamically updated calculation values.

With more time, I would improve this by adding more detailed ARIA live region announcements so screen reader users receive clearer real-time feedback when calculations update.

---

## 4. AI Usage

I used ChatGPT to assist with:

- brainstorming project naming ideas
- refining UI layout structure
- improving spacing and visual hierarchy
- reviewing responsive CSS behavior
- improving JavaScript validation logic
- refining accessibility considerations
- reviewing README and documentation structure

One specific improvement I made to AI-generated output was restructuring the summary panel spacing and layout.

The original AI-generated styling created inconsistent spacing and visual imbalance between the result cards and summary sections. I adjusted the layout spacing, padding rhythm, and alignment manually to improve readability and create a cleaner visual flow across both desktop and mobile layouts.

Another example was improving the interaction behavior for tip selection. The initial implementation logic did not properly handle transitions between preset buttons and custom tip input, so I modified the logic so that custom input automatically clears active preset states and preset selection clears custom values.

---

## 5. Honest Gap

One area that still needs improvement is deeper animation and transition polish during validation state changes.

Currently, validation messages appear and disappear cleanly, but with another day I would improve the interaction polish further by:

- adding smoother transition animations
- improving micro-interactions for result updates
- refining mobile spacing behavior on very small screens
- adding subtle motion feedback for active states and resets

I would also spend more time testing edge cases across additional browsers and mobile devices to further refine the overall user experience.
