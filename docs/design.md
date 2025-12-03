# Design Decisions

- Primary color `#046288` set as `theme.extend.colors.primary` and used for key actions and highlights.
- Tailwind Play CDN used for utility-first styling; generates only used CSS for performance in a static setup.
- Dark mode via `darkMode: 'media'` for system preference compatibility without UI toggle overhead.
- Responsive grid layout with `md:grid-cols-3`; content stacks on small screens and splits on larger.
- Accessible labels added to form controls; dynamic readings use `aria-live` for assistive tech.
- Consistent spacing and typography via Tailwind scales; form controls get focus rings for clarity.
- Kept existing IDs and event bindings to preserve functionality and URL-hash behaviors.
- No external frameworks beyond Tailwind CDN; project remains static and easy to host.
