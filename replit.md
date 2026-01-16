# Zeeshan Khan Portfolio

## Overview
An Awwwards-level, world-class portfolio website for Zeeshan Khan - a Web Developer, Graphic Designer & Video Editor from Ujjain, India. Features premium 3D graphics, smooth animations, and interactive elements.

## Premium Features
- **Three.js 3D Background** - Floating geometric shapes with orange glow, parallax on scroll
- **Custom Cursor** - Interactive cursor with magnetic hover effects
- **Hero Parallax** - Mouse-tracking parallax effect on hero content
- **Loading Animation** - Premium loading screen with progress bar
- **Horizontal Scroll Gallery** - Draggable project showcase with 3D card effects
- **Scroll Animations** - IntersectionObserver-powered reveal animations with stagger
- **AI Chatbot** - Gemini-powered assistant to answer questions about Zeeshan
- **Auto Theme Switching** - Dark mode (6PM-6AM), Light mode (6AM-6PM)
- **Video Profile** - Autoplay looping video in about section
- **WebGL Fallback** - Graceful degradation for unsupported browsers
- **Responsive Design** - Mobile-first, works on all device sizes

## Project Structure
```
portfolio/
├── server.js           # Express backend with Gemini chatbot API
├── index.html          # Main portfolio page with Three.js
├── me.mp4              # Profile video
├── hi.png              # Fallback profile image
├── models/             # 3D models from Sketchfab
│   ├── laptop/         # Lenovo laptop GLTF model
│   ├── phone/          # Samsung Galaxy GLTF model
│   └── shapes/         # Floating shapes GLTF model
├── *.jpg, *.png        # Project images
└── package.json        # Node dependencies
```

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla), Three.js
- **Backend**: Node.js, Express
- **AI**: Google Gemini API (gemini-2.5-flash with fallback)
- **Fonts**: Anton (headings), Urbanist (body)
- **3D**: Three.js, GLTFLoader, OrbitControls
- **Design**: CSS Custom Properties, Glassmorphism, Magnetic Cursor

## Environment Variables
- `GEMINI_API_KEY` - Required for AI chatbot functionality

## Running Locally
The server runs on port 5000. Start with:
```bash
cd portfolio && node server.js
```

## Design System
- Primary accent: #ff4c00 (orange)
- Dark mode bg: #0a0a0a
- Light mode bg: #f5f5f5
- Glass panels: blur(20px), rgba overlays
- Border radius: 16-24px
- Transitions: cubic-bezier easing
- Font sizes: clamp() for fluid typography

## Animation Effects
- **Loading**: 0-100% progress bar with fade out
- **Hero**: Fade up with stagger delays
- **Scroll Reveal**: translateY with opacity transition
- **Magnetic**: Elements follow cursor on hover
- **3D Cards**: translateY + rotateX on hover
- **Cursor**: Custom ring + dot with smooth interpolation

## Accessibility
- Respects prefers-reduced-motion
- Keyboard navigation support
- Semantic HTML structure
- Color contrast (WCAG AA)
- Touch-optimized for mobile

## Recent Changes (January 2026)
- Complete redesign to Awwwards-level quality
- Added Three.js 3D background with floating shapes
- Implemented custom cursor with magnetic effects
- Added hero parallax mouse tracking
- Created horizontal scroll project gallery
- Integrated GLTF 3D models (laptop, phone, shapes)
- Updated Gemini API models (gemini-2.5-flash)
- Added premium loading animation
- Implemented WebGL fallback for compatibility
- Enhanced scroll-triggered reveal animations

## User Preferences
- Keep orange accent color (#ff4c00)
- Maintain glassmorphism aesthetic
- Auto dark/light mode at 6AM/6PM
- Anton font for headings
- Urbanist font for body text
- Premium, Awwwards-quality polish
