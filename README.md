# 🚀 Youssef Fertani - Portfolio

A modern, interactive portfolio website built with React and Tailwind CSS, featuring smooth animations, dark mode support, and an engaging user experience.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0.0-38B2AC)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Live Demo

🌐 **Visit the live portfolio:** [https://fertaniyoussef.github.io/portfolio](https://fertaniyoussef.github.io/portfolio)

## 🎯 Features

### 🎨 **Interactive Design**
- **Floating Particles System** - Dynamic background with interconnected particles
- **Magnetic Cursor** - Custom cursor that follows mouse movement with magnetic effect
- **Smooth Scroll Animations** - GSAP-powered animations for seamless transitions
- **Dark/Light Mode** - Context-based theme switching with persistent preferences

### 📱 **Responsive & Modern**
- **Mobile-First Design** - Optimized for all device sizes
- **Progressive Web App** - Fast loading and offline capabilities
- **Accessibility Focused** - WCAG compliant with keyboard navigation
- **Performance Optimized** - Lazy loading and code splitting

### 🛠 **Technical Excellence**
- **Component Architecture** - Modular, reusable React components
- **Custom Hooks** - Intersection observer for scroll-based animations
- **Email Integration** - Contact form with EmailJS integration
- **Deployment Ready** - GitHub Pages deployment with automated builds

## 🛠 Tech Stack

### **Frontend Framework**
- **React 18.3.1** - Latest React with hooks and modern patterns
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **GSAP** - Professional-grade animations

### **UI/UX Libraries**
- **Lucide React** - Beautiful, customizable icons
- **React Icons** - Comprehensive icon library
- **React Slick** - Touch-friendly carousel component
- **Styled Components** - CSS-in-JS styling

### **Development Tools**
- **Create React App** - Zero-configuration build tool
- **ESLint** - Code quality and consistency
- **GitHub Pages** - Automated deployment

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/FertaniYoussef/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm test` | Launches the test runner |
| `npm run deploy` | Deploys to GitHub Pages |

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── 3d-column/      # 3D rotating column effects
│   ├── about/          # About section component
│   ├── experiences/    # Work experience showcase
│   ├── footer/         # Footer component
│   ├── hero/           # Hero section with animations
│   ├── loader/         # Loading screen component
│   ├── projects/       # Portfolio projects display
│   ├── swipe/          # Interactive swipe components
│   ├── technologies/   # Skills and technologies section
│   └── topmenu/        # Navigation menu
├── contexts/           # React context providers
├── customhooks/        # Custom React hooks
├── images/            # Static assets and images
├── utils/             # Utility functions
└── App.jsx           # Main application component
```

## 🎨 Key Components

### **Floating Particles System**
- Custom canvas-based particle animation
- Performance-optimized with reduced particle count
- Dynamic connections between particles
- Responsive to window resizing

### **Dark Mode Context**
- Persistent theme preferences
- Smooth transitions between themes
- Context-based state management
- System preference detection

### **Interactive Elements**
- Magnetic cursor effects
- Scroll-triggered animations
- Touch-friendly swipe interactions
- Smooth page transitions

## 🌐 Deployment

This portfolio is automatically deployed to GitHub Pages using the following workflow:

1. **Build Process**: `npm run build` creates optimized production build
2. **Deployment**: `gh-pages` package handles GitHub Pages deployment
3. **Domain**: Live at `https://fertaniyoussef.github.io/portfolio`

### Deployment Commands
```bash
npm run predeploy  # Builds the project
npm run deploy     # Deploys to GitHub Pages
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for any API keys or configuration:

```env
REACT_APP_EMAILJS_PUBLIC_KEY=your_emailjs_key
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
```

### Tailwind Configuration
Custom Tailwind CSS configuration in `tailwind.config.js` for:
- Custom color schemes
- Responsive breakpoints
- Animation utilities
- Component-specific styles

## 🤝 Contributing

While this is a personal portfolio, contributions and suggestions are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Portfolio**: [https://fertaniyoussef.github.io/portfolio](https://fertaniyoussef.github.io/portfolio)
- **GitHub**: [@FertaniYoussef](https://github.com/FertaniYoussef)
- **Email**: [yousseffertani.pro@gmail.com]

---

⭐ **Star this repository if you found it helpful!**

*Built with ❤️ using React, Tailwind CSS, and modern web technologies.*
