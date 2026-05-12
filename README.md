# 🌟 Vanshika Agarwal's Portfolio

A modern, elegant, and fully responsive single-page portfolio website showcasing projects, skills, education, and professional achievements. Built with React, Vite, and cutting-edge web technologies.

**Live Preview:** [View Portfolio](https://github.com/vannshikaaaa/portfolio)  
**GitHub:** [@vannshikaaaa](https://github.com/vannshikaaaa)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Configuration](#configuration)
- [Usage](#usage)
- [Components](#components)
- [Customization Guide](#customization-guide)
- [Performance](#performance)
- [Browser Support](#browser-support)
- [Contact](#contact)

---

## 👋 Overview

This is a **personal portfolio website** designed to showcase the work, skills, and achievements of Vanshika Agarwal, a B.Tech Computer Science student at MITRC, Alwar. The portfolio features:

- **About Section**: Professional summary and key statistics
- **Skills & Technologies**: Organized skill categories including frontend technologies, programming languages, tools, and CS fundamentals
- **Featured Projects**: Showcase of major projects including DineReserve (AI-powered restaurant reservation system), Personal Portfolio, and DSA practice repository
- **Education Timeline**: Academic journey from Class X to B.Tech with notable achievements
- **Contact Form**: Direct way to reach out with inquiries or opportunities
- **Smooth Interactions**: Animation effects, typewriter text, and intersection observer-based reveals
- **Fully Responsive Design**: Optimized for all device sizes

---

## ✨ Features

### 🎯 Core Features
- **Smooth Scroll Behavior**: Native HTML scroll-behavior with enhanced scroll tracking
- **Active Section Detection**: Intersection Observer API for precise navigation highlighting
- **Typewriter Effect**: Dynamic role/title cycling with typewriter animation
- **Scroll-triggered Animations**: Reveal animations as sections come into view
- **Back-to-Top Button**: Convenient navigation for long pages
- **Mobile-Responsive Navigation**: Hamburger menu for mobile devices
- **Sticky Header**: Navigation bar with blur backdrop effect on scroll

### 🎨 Design Elements
- **Sophisticated Color Scheme**: 
  - Primary: `#c9a96e` (gold)
  - Secondary: `#e8c4b8` (warm beige)
  - Background: `#0d0d0d` (dark)
  - Text: `#f0ece4` (light cream)
- **Custom CSS Variables**: Centralized theme management
- **Gradient Effects**: Linear and radial gradients for modern aesthetics
- **Glassmorphism**: Semi-transparent blur effects on cards
- **Smooth Transitions**: 0.25s - 0.8s ease transitions throughout

### 📱 Responsive Features
- **Fluid Typography**: `clamp()` function for scalable font sizes
- **Flexible Layouts**: CSS Grid and Flexbox for adaptable designs
- **Touch-Friendly**: Proper spacing and interactive element sizing
- **Mobile Optimizations**: Hamburger menu, stacked layouts, adjusted spacing

### ♿ Accessibility
- **Semantic HTML**: Proper heading hierarchy and document structure
- **ARIA Labels**: For icons, buttons, and dynamic content
- **Keyboard Navigation**: Full support for keyboard navigation
- **Form Validation**: Client-side validation with helpful error messages
- **Alt Text**: Descriptive alt attributes on images

---

## 🛠️ Tech Stack

### Frontend
- **React 19**: Modern UI library with latest features
- **Vite 6**: Ultra-fast build tool and dev server
- **CSS3**: Modern styling with variables, gradients, and animations
- **JavaScript (ES6+)**: Latest language features

### Build & Development
- **@vitejs/plugin-react**: React plugin for Vite with Fast Refresh
- **Node.js**: JavaScript runtime

### Dependencies
```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0"
}
```

### Dev Dependencies
```json
{
  "@vitejs/plugin-react": "^5.0.0",
  "vite": "^6.0.0"
}
```

---

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   └── README.txt
├── src/
│   ├── assets/            # Images and media files
│   │   └── profile.jpg    # (Add your profile photo here)
│   ├── components/        # Reusable React components
│   │   ├── About.jsx      # About section with stats
│   │   ├── Contact.jsx    # Contact form & information
│   │   ├── Education.jsx  # Education timeline & achievements
│   │   ├── Footer.jsx     # Footer with social links
│   │   ├── Hero.jsx       # Hero banner with typewriter effect
│   │   ├── Navbar.jsx     # Navigation bar with mobile menu
│   │   ├── Projects.jsx   # Featured projects grid
│   │   └── Skills.jsx     # Skills & technologies organized by category
│   ├── hooks/             # Custom React hooks
│   │   ├── useInView.js   # Intersection Observer for reveal animations
│   │   └── useTypewriter.js # Typewriter effect animation
│   ├── data/
│   │   └── portfolio.js   # Centralized portfolio content and metadata
│   ├── App.jsx            # Main app component with routing
│   ├── App.css            # Global and component styles
│   ├── index.css          # Global base styles
│   └── main.jsx           # React entry point
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── package.json           # Project metadata and dependencies
├── package-lock.json      # Locked dependency versions
└── README.md              # This file
```

---

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** 14+ and **npm** (or yarn/pnpm)
- **Git** (optional, for cloning)

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/vannshikaaaa/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The portfolio will be available at `http://localhost:5173` (or another port if 5173 is busy)

4. **Build for Production**
   ```bash
   npm run build
   ```
   Output files will be in the `dist/` directory

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

### Available Scripts

```bash
npm run dev       # Start development server with HMR
npm run build     # Build optimized production bundle
npm run preview   # Preview production build locally
```

---

## ⚙️ Configuration

### Vite Configuration (`vite.config.js`)
```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

### Customizing Content

All portfolio content is centralized in `src/data/portfolio.js`. Modify this file to update:

- **Navigation Links**: `navLinks`
- **Professional Roles**: `heroRoles`
- **Highlights**: `heroHighlights`
- **Social Links**: `socialLinks`
- **About Statistics**: `aboutStats`
- **Skills**: `skillGroups`
- **Projects**: `projects`
- **Education Timeline**: `educationTimeline`
- **Achievements**: `achievement`
- **Contact Information**: `contactInfo`

### Customizing Colors

Edit the CSS variables in `src/App.css` `:root` selector:

```css
:root {
  --bg: #0d0d0d;              /* Background color */
  --surface: #141414;         /* Card surfaces */
  --primary: #c9a96e;         /* Primary accent */
  --secondary: #e8c4b8;       /* Secondary accent */
  --text: #f0ece4;            /* Text color */
  --muted: #8a7f78;           /* Muted/secondary text */
  --border: rgba(201, 169, 110, 0.2);
  --shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
  --glow: 0 0 30px rgba(201, 169, 110, 0.18);
  --radius: 24px;             /* Border radius */
}
```

---

## 📖 Usage

### Navbar & Navigation
- **Sticky Navigation**: Stays visible at top with blur effect on scroll
- **Active Link Highlighting**: Current section is highlighted with underline
- **Mobile Menu**: Hamburger icon on smaller screens
- **Smooth Scrolling**: Click navigation links for smooth scroll to sections

### Hero Section
- **Typewriter Animation**: Professional titles cycle with typing effect
- **Call-to-Action Buttons**: View projects and download resume
- **Social Links**: Quick access to GitHub and LinkedIn
- **Responsive Image Frame**: Profile photo with decorative blob effect

### Sections
- **About**: Professional summary with key statistics
- **Skills**: Organized by category (Frontend, Languages, Tools, CS Fundamentals)
- **Projects**: Featured work with technology tags and GitHub links
- **Education**: Timeline view with academic achievements
- **Contact**: Multiple contact methods and contact form

### Animations
- **Reveal Animations**: Sections animate in as they come into view
- **Hover Effects**: Cards lift and glow on hover
- **Smooth Transitions**: All interactions feature smooth CSS transitions
- **Back-to-Top Button**: Appears after scrolling 400px down

---

## 🧩 Components

### `App.jsx`
**Main Application Component**
- Sets up page structure
- Manages active section state using Intersection Observer
- Handles back-to-top button visibility
- Integrates all section components

**Key Features:**
```javascript
- useEffect for section tracking
- useEffect for scroll event handling
- Intersection Observer with custom thresholds
- Smooth scroll behavior
```

### `Navbar.jsx`
**Navigation Header Component**
- Sticky positioning with scroll-triggered blur effect
- Mobile hamburger menu
- Active link indication
- Responsive layout

**Props:**
- `navLinks`: Array of navigation link objects
- `activeSection`: Currently active section ID

### `Hero.jsx`
**Landing Section Component**
- Typewriter effect for professional roles
- Profile image with fallback SVG
- Social media links
- Call-to-action buttons

**Features:**
- Dynamic role cycling
- Image error handling with SVG fallback
- Responsive grid layout

### `About.jsx`
**About Me Section**
- Professional quote section
- Four key statistics cards
- Staggered animation timing
- Uses `useInView` hook for animation triggers

### `Skills.jsx`
**Skills & Technologies Section**
- Organized by category
- Skill badges with gradient indicators
- Staggered reveal animation
- Responsive grid layout

### `Projects.jsx`
**Featured Projects Showcase**
- Project cards with descriptions
- Technology tags
- Links to GitHub repositories
- Status indicators (Featured, Learning Journey, etc.)

### `Education.jsx`
**Education Timeline**
- Timeline visualization with dots and lines
- Education history from Class X to B.Tech
- Achievement highlight card
- Staggered animation effects

### `Contact.jsx`
**Contact & Contact Form**
- Multiple contact methods with links
- Functional contact form with validation
- Email submission via `mailto:`
- Error messages and success feedback

**Form Validation:**
- Name: Required, non-empty
- Email: Required, valid email format
- Message: Required, non-empty

### `Footer.jsx`
**Footer Component**
- Social media links
- Copyright information
- Dynamic year in copyright

### Custom Hooks

#### `useTypewriter.js`
**Typewriter Animation Hook**

```javascript
const useTypewriter = (words, typingSpeed = 110, deletingSpeed = 60, pause = 1400)
```

**Parameters:**
- `words`: Array of strings to cycle through
- `typingSpeed`: Milliseconds per character when typing (default: 110)
- `deletingSpeed`: Milliseconds per character when deleting (default: 60)
- `pause`: Milliseconds to pause between delete and next word (default: 1400)

**Returns:** Current displayed text

#### `useInView.js`
**Intersection Observer Hook**

```javascript
const useInView = (options = {})
```

**Options:**
- `once`: Only trigger animation once (default: true)
- `threshold`: Intersection threshold (default: 0.2)
- `rootMargin`: Intersection margin (default: "0px 0px -10% 0px")

**Returns:** `[ref, isInView]` tuple

---

## 🎨 Customization Guide

### Adding a Profile Photo
1. Place your profile image at `src/assets/profile.jpg`
2. The component will automatically load it
3. If not found, a fallback SVG avatar is displayed

### Updating Project Information
Edit `src/data/portfolio.js`:

```javascript
export const projects = [
  {
    name: 'Project Name',
    status: 'Status Label',
    description: 'Project description',
    tech: ['Tech1', 'Tech2'],
    github: 'https://github.com/link',
    live: 'https://demo.com' // or empty string for "on request"
  },
  // ... more projects
];
```

### Modifying Skills
```javascript
export const skillGroups = [
  {
    category: 'Category Name',
    skills: ['Skill1', 'Skill2', 'Skill3']
  },
  // ... more categories
];
```

### Changing Font Family
Edit `src/index.css` and `src/App.css`:

```css
body {
  font-family: 'Your Font Name', sans-serif;
}
```

Currently uses:
- **Body**: 'DM Sans' (sans-serif)
- **Headings**: 'Playfair Display' (serif)

### Adjusting Animation Timing
Modify constants in `src/hooks/useTypewriter.js`:
```javascript
const useTypewriter = (
  words,
  typingSpeed = 110,      // Change this
  deletingSpeed = 60,     // Or this
  pause = 1400            // Or this
)
```

### Responsive Breakpoints
Current breakpoints use CSS `clamp()` function for fluid scaling. Key breakpoints handled by media queries in `App.css`:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## 📊 Language Composition

- **JavaScript**: 64.5%
- **CSS**: 32.7%
- **HTML**: 2.8%

---

## ⚡ Performance

### Optimization Techniques
- **Lazy Loading**: Images use `loading="lazy"` attribute
- **Fast Refresh**: Vite's HMR for instant dev updates
- **Code Splitting**: Automatic with Vite
- **CSS-in-JS Reduction**: Minimal CSS with efficient selectors
- **SVG Fallback**: Profile avatar as SVG for fast loading
- **Event Delegation**: Optimized event listeners in hooks

### Build Size
- Production build is optimized and minified
- Assets are hashed for long-term caching
- No unnecessary dependencies

---

## 🌐 Browser Support

The portfolio works on all modern browsers:

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Note:** Requires support for:
- ES6+ JavaScript
- CSS Grid & Flexbox
- CSS Custom Properties
- Intersection Observer API

---

## 📞 Contact Information

**Vanshika Agarwal**

- 📧 **Email**: [vanshikaagarwal9500@gmail.com](mailto:vanshikaagarwal9500@gmail.com)
- 💼 **LinkedIn**: [linkedin.com/in/vanshika-agarwal-298114384](https://linkedin.com/in/vanshika-agarwal-298114384)
- 🐙 **GitHub**: [@vannshikaaaa](https://github.com/vannshikaaaa)
- 📍 **Location**: Alwar, Rajasthan

---

## 🎓 About

**Vanshika Agarwal** is a B.Tech Computer Science & Engineering student at Modern Institute of Technology and Research Centre (MITRC), Alwar, currently in the 6th semester with a CGPA of 8.0+. She qualified GATE 2026 (Score: 367, AIR: 24,672) and is passionate about frontend development, building responsive and user-centered web experiences.

**Key Achievements:**
- GATE 2026 Qualified (3rd year qualification)
- B.Tech CSE with 8.0+ CGPA
- Frontend Development Focused
- Open to internship opportunities

---

## 📜 License

This project is personal and open to use. Feel free to fork and customize it for your own portfolio!

---

## 🔧 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000  # Use different port
```

### Build Errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading
Ensure images are in `src/assets/` directory and referenced correctly in components.

---

## 📝 Notes for Future Development

- Consider adding more projects as they are completed
- Update education timeline after graduation
- Add case studies for featured projects
- Implement blog section for technical articles
- Add dark/light theme toggle
- Consider adding internationalization (i18n)

---

**Built with ❤️ using React + Vite**

Last Updated: May 2026
