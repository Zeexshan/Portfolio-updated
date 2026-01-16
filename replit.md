# Zeeshan Khan Portfolio

## Overview
A modern, glassmorphic portfolio website for Zeeshan Khan - a Web Developer, Graphic Designer & Video Editor from Ujjain, India.

## Features
- **Glassmorphism Design** - Modern UI with glass-effect panels
- **Auto Theme Switching** - Dark mode (6PM-6AM), Light mode (6AM-6PM)
- **AI Chatbot** - Gemini-powered assistant to answer questions about Zeeshan
- **Video Profile** - Autoplay looping video in hero section
- **Scroll Animations** - Smooth fade-in animations on scroll
- **Project Gallery** - Filterable web and graphics projects
- **Responsive Design** - Works on all device sizes

## Project Structure
```
portfolio/
├── server.js       # Express backend with Gemini chatbot API
├── index.html      # Main portfolio page
├── me.mp4          # Profile video
├── hi.png          # Fallback profile image
├── *.jpg, *.png    # Project images
└── package.json    # Node dependencies
```

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js, Express
- **AI**: Google Gemini API (gemini-2.0-flash)
- **Fonts**: Anton (headings), Urbanist (body)
- **Design System**: CSS Custom Properties, Glassmorphism

## Environment Variables
- `GEMINI_API_KEY` - Required for AI chatbot functionality

## Running Locally
The server runs on port 5000. Start with:
```bash
cd portfolio && node server.js
```

## Design Notes
- Primary accent color: #ff4c00 (orange)
- Glass panels use backdrop-filter with blur
- Theme switches automatically based on time of day
- All animations respect prefers-reduced-motion

## Recent Changes (January 2026)
- Removed Instagram/xnemesis references
- Replaced profile image with autoplay video (me.mp4)
- Updated experience: Added Hussaini IT Services, MIT College trainer role
- Updated YouTube stats: 2K+ subscribers, 1.7M+ views
- Added ICAT certification (All India Rank #1279)
- Added Premiere Pro and After Effects to skills
- Added AI chatbot assistant with Gemini (gemini-2.5-flash with fallback)
- Added scroll-triggered animations
- Added quick action buttons in chatbot
- Enhanced hover effects on project cards
- **Framer-Style 3D Effects Added:**
  - Floating gradient orbs with parallax scrolling
  - 3D tilt effect on glass panels and project cards (mouse-follow)
  - Mouse-follow lighting/glow effect on panels
  - Parallax scroll on background orbs and title
  - Enhanced depth shadows on hover
  - Respects prefers-reduced-motion accessibility setting

## User Preferences
- Keep orange accent color (#ff4c00)
- Maintain glassmorphism aesthetic
- Auto dark/light mode at 6AM/6PM
- Anton font for headings
- Urbanist font for body text
