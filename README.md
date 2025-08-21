# Bihar Media Advertisement

A modern, production-ready website for Bihar Media Advertisement - a professional printing and advertising company serving the Bihar market with comprehensive marketing solutions.

## 🚀 Features

- **Modern Design**: Clean, professional UI with blue and white color scheme
- **Responsive Layout**: Fully responsive design that works on all devices
- **Comprehensive Services**: Showcases OOH advertising, retail branding, mall branding, activations, and digital marketing
- **Interactive Components**: Engaging animations and hover effects
- **SEO Optimized**: Proper meta tags and structured data for better search visibility
- **Production Ready**: Optimized build configuration with code splitting

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS v4 + Custom CSS Variables
- **UI Components**: Radix UI + ShadCN/UI
- **Icons**: Lucide React
- **Animations**: CSS Animations + Motion
- **Build Tool**: Vite with optimized production build
- **Type Safety**: TypeScript support

## 📁 Project Structure

```
bihar-media-advertisement/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # ShadCN UI components
│   │   ├── figma/        # Figma-specific components
│   │   ├── Header.jsx    # Navigation header
│   │   ├── Hero.jsx      # Hero section
│   │   ├── Services.jsx  # Services showcase
│   │   ├── Portfolio.jsx # Portfolio section
│   │   ├── About.jsx     # About section
│   │   ├── Testimonials.jsx # Client testimonials
│   │   └── Footer.jsx    # Site footer
│   ├── styles/           # CSS and styling
│   │   └── globals.css   # Global styles and Tailwind
│   ├── utils/            # Utility functions
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Library configurations
│   ├── assets/           # Static assets
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bihar-media-advertisement/website.git
   cd bihar-media-advertisement
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the application.

## 📦 Build for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview

# Type check
npm run type-check

# Lint code
npm run lint
```

## 🎨 Customization

### Brand Colors

The website uses a blue and white color scheme defined in `/src/styles/globals.css`:

```css
:root {
  --brand-primary: #2563EB;     /* Blue */
  --brand-secondary: #3B82F6;   /* Lighter Blue */
  --accent-1: #10B981;          /* Green accent */
  --accent-2: #F59E0B;          /* Amber accent */
  /* ... more colors */
}
```

### Adding New Components

1. Create your component in `/src/components/`
2. Use TypeScript for type safety
3. Follow the existing naming conventions
4. Import and use in your main components

### Modifying Services

Update the services data in `/src/components/Services.jsx` to customize the service offerings.

## 🔧 Configuration

### Vite Configuration

The project uses Vite for fast development and optimized builds. Key configurations:

- **Path aliases**: `@/` points to `src/`
- **Build optimization**: Code splitting and chunk optimization
- **PostCSS**: Integrated with Tailwind CSS

### Tailwind CSS

Uses Tailwind CSS v4 with custom design tokens and utilities for consistent styling.

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🎯 SEO & Performance

- **Meta Tags**: Comprehensive meta tags for social sharing
- **Structured Data**: JSON-LD for better search engine understanding
- **Performance**: Optimized images, code splitting, and lazy loading
- **Accessibility**: ARIA labels and semantic HTML

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Bihar Media Advertisement**
- Website: [https://bihar-media-advertisement.com](https://bihar-media-advertisement.com)
- Email: info@bihar-media-advertisement.com
- Phone: +91-XXX-XXX-XXXX
- Address: Patna, Bihar, India

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Radix UI](https://radix-ui.com/) - Headless UI primitives
- [Lucide React](https://lucide.dev/) - Icon library
- [Unsplash](https://unsplash.com/) - Stock photography

---

Built with ❤️ for Bihar Media Advertisement