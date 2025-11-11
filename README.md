# tommasostocchi.dev

A simple, clean static personal homepage built with React and Vite.

## Overview

This is a single-page static website that serves as a personal homepage, featuring:
- About section
- Links to external blogs
- Links to books and publications
- Social media connections
- Fully static - no server-side logic required

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling (no CSS framework needed for simplicity)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The static files will be generated in the `dist/` folder.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Deployment

This is a static site that can be deployed to any static hosting service:

### Azure Static Web Apps

1. Push your code to GitHub
2. Create a new Static Web App in Azure Portal
3. Connect your GitHub repository
4. Set build configuration:
   - **App location**: `/`
   - **Api location**: `` (leave empty)
   - **Output location**: `dist`

### Other Options

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your repo and deploy
- **GitHub Pages**: Push `dist` folder to gh-pages branch
- **Azure Blob Storage**: Upload `dist` contents to `$web` container

## Customization

### Update Links

Edit `src/App.jsx` and update the URLs in the cards and social links sections:

```jsx
<a href="https://your-blog-url.com" ...>
```

### Change Colors

The site uses a purple gradient theme. To change colors, edit `src/App.css`:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Add More Sections

Simply add new sections in `src/App.jsx` following the existing pattern.

## Project Structure

```
tommasostocchi.dev/
├── src/
│   ├── App.jsx          # Main component
│   ├── App.css          # Component styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies
└── README.md           # This file
```

## License

© 2025 Tommaso Stocchi. All rights reserved.
