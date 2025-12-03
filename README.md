# Lightweight 3‑Axis CNC G‑Code Simulator

![Screenshot Suzanne](screenshot.jpg)

## Live Demo
- Original: https://harvie.github.io/cnc-simulator
- RawGitHack: https://raw.githack.com/Harvie/cnc-simulator/master/index.html

## Fork Improvements (2024‑12)
- Redesigned UI with Tailwind, single‑screen layout, and clean panels.
- Light/dark theme toggle with `localStorage` persistence (default: light).
- Timeline slider always visible and styled; shows current simulated time.
- Improved canvas contrast with high‑readability defaults.
- Tool tab includes color controls (toolpath, stock top/bottom, background) with Reset and Save.
- Safer `simulate()` invocation guards against renderer readiness.

## Quick Start
1) Open `index.html` directly in a browser, or serve the folder:
   - Python: `python3 -m http.server 8000`
   - Then open `http://localhost:8000/`
2) Paste or load G‑code (Import in header), click Simulate, or use Animate.
3) Adjust colors in the Tool tab; click Save to persist.
4) Toggle theme in the header; preference is remembered.

## Origins
This simulator was part of [JSCut](https://jscut.org/) discontinued CAM package developed since 2014 by Todd Fleming.

During 2024‑09 it was isolated and modified to be useful in offline/standalone context by Tomas Mudrunka.

Similar project used to be available since 2016‑05 at www.cncwebtools.com/Apps/GCode_Simulator/index.html but features were limited and the website is defunct since 2020‑08.

## Features
- Load G‑code from file
- Pass settings and G‑code via URL
- Support for arcs (G02, G03, XY plane only, IJ recommended, R experimental)
- Animation
- Works offline (no webserver needed)
- V‑Carving
- Visualize origin point
- Show current coordinates
- Mouse wheel zooming
- Non‑square viewport supported
- Limited dependencies (no jQuery/Bootstrap)

## TODO
- Mobile/touch responsiveness polish
- Shaded milling bit
- V‑Bit behavior when Surface Z > 0
- 3D view translating
- mm/inch support (bit settings and G21/G20)
- Ball nose/radiused bits
- Tool library and toolchanges (e.g., T1 M6)

## See also
- https://camotics.org/
- https://github.com/vlachoudis/bCNC
- https://github.com/LaserWeb/LaserWeb4
