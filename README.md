# Shetty Realtors - Commercial Real Estate Platform

A modern, responsive React-based web application for Shetty Realtors, specializing in commercial real estate services across Pune, India. Built with cutting-edge technologies and featuring a comprehensive CMS for property management.

![Shetty Realtors](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-4.4.0-purple?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🏢 About Shetty Realtors

Shetty Realtors is a leading commercial real estate firm in Pune, India, with over 30 years of experience in property transactions, corporate office leasing, and co-working space solutions. Our expertise has shaped Pune's commercial growth, successfully leasing over 10 lakh sq. ft. of rental space.

### Key Achievements
- **30+ Years** of commercial real estate expertise
- **10L+ Sq. Ft.** of space successfully leased
- **70+ Bank Branches** facilitated across Pune
- **1000+ Happy Clients** from diverse industries

## 🚀 Features

### 🏠 Property Management
- **Advanced Property Listings** with comprehensive search and filtering
- **Real-time Property Updates** through integrated CMS
- **Image Gallery** with high-resolution property photos
- **Detailed Property Information** including amenities, specifications, and location details

### 🔍 Search & Discovery
- **Multi-criteria Search** (location, property type, BHK, price range)
- **Advanced Filters** (sea view, parking, garden, connectivity)
- **Responsive Search Interface** with instant results
- **Property Comparison** and favorites functionality

### 👨‍💼 Admin Panel
- **Comprehensive CMS** for property management
- **Add/Edit/Delete Properties** with rich media support
- **Bulk Image Upload** with drag-and-drop functionality
- **Property Type Management** (Residential & Commercial)
- **Real-time Updates** without page refresh

### 🎨 User Experience
- **Modern, Responsive Design** optimized for all devices
- **Smooth Animations** and micro-interactions
- **Professional UI/UX** with consistent branding
- **Fast Loading Times** with optimized assets
- **Accessibility Features** for inclusive design

## 🛠️ Technology Stack

### Frontend Framework
- **React 18.2.0** - Modern UI library with hooks and functional components
- **TypeScript 5.0.0** - Type-safe development with enhanced IDE support
- **Vite 4.4.0** - Lightning-fast build tool and development server

### Styling & UI
- **Tailwind CSS 3.3.0** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **Custom CSS Animations** - Smooth transitions and hover effects
- **Responsive Design** - Mobile-first approach

### State Management & Data
- **React Hooks** - useState, useEffect, useContext for state management
- **Custom CMS Store** - Local storage-based property management
- **React Router 6** - Client-side routing and navigation

### Development Tools
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing and optimization
- **TypeScript Compiler** - Type checking and compilation

## 📁 Project Structure

```
sudhir-realtors-react/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── lovable-uploads/    # Company assets
│   └── placeholder.svg
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # Shadcn/ui components
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── LoadingBar.tsx
│   │   ├── ImageUpload.tsx
│   │   └── LottieAnimations.tsx
│   ├── pages/             # Page components
│   │   ├── Index.tsx      # Home page
│   │   ├── About.tsx      # About page
│   │   ├── Properties.tsx # Property listings
│   │   ├── PropertiesAdmin.tsx # Admin panel
│   │   ├── Contact.tsx    # Contact page
│   │   └── NotFound.tsx   # 404 page
│   ├── utils/             # Utility functions
│   │   ├── cmsPropertyStore.ts # Property management
│   │   ├── imageUtils.ts  # Image processing
│   │   └── utils.ts       # General utilities
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Library configurations
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # App entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16.0.0 or higher)
- **npm** (v8.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** (v2.30.0 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Raugaa/Shetty-Realators.git
   cd Shetty-Realators
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 📱 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 🎨 Design System

### Color Palette
- **Primary Yellow**: `#FFD700` - Brand identity and highlights
- **Dark Gray**: `#2D3748` - Text and primary elements
- **White**: `#FFFFFF` - Background and contrast
- **Gray Scale**: Various shades for UI elements

### Typography
- **Headings**: Bold, large fonts for hierarchy
- **Body Text**: Readable, medium-weight fonts
- **Buttons**: Clear, action-oriented typography

### Components
- **Cards**: Elevated, rounded corners with shadows
- **Buttons**: Consistent styling with hover effects
- **Forms**: Clean, accessible input fields
- **Navigation**: Fixed header with smooth scrolling

## ⚙️ Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_APP_TITLE=Shetty Realtors
VITE_APP_DESCRIPTION=Commercial Real Estate Platform
```

### Tailwind CSS Configuration
The project uses a custom Tailwind configuration with:
- Custom color palette
- Extended spacing and typography
- Custom animations and transitions
- Responsive breakpoints

## 📊 Performance Optimization

- **Code Splitting** - Automatic route-based code splitting
- **Image Optimization** - Compressed and optimized images
- **Lazy Loading** - Components loaded on demand
- **Bundle Analysis** - Optimized bundle sizes
- **Caching Strategy** - Efficient caching for better performance

## 🔒 Security Features

- **Input Validation** - Client-side form validation
- **XSS Protection** - Sanitized user inputs
- **Secure Headers** - Content Security Policy
- **HTTPS Ready** - Secure communication protocols

## 🌐 Browser Support

- **Chrome** (v90+)
- **Firefox** (v88+)
- **Safari** (v14+)
- **Edge** (v90+)
- **Mobile Browsers** (iOS Safari, Chrome Mobile)

## 📈 Analytics & Monitoring

- **Performance Monitoring** - Core Web Vitals tracking
- **Error Tracking** - Comprehensive error logging
- **User Analytics** - User behavior insights
- **SEO Optimization** - Meta tags and structured data

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use meaningful commit messages
- Maintain code documentation
- Test thoroughly before submitting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💼 Contact Information

**Shetty Realtors**
- **Location**: Pune, Maharashtra, India
- **Experience**: 30+ Years in Commercial Real Estate
- **Specialization**: Corporate Office Leasing & Co-working Spaces
- **Website**: [Shetty Realtors](https://shettyrealtors.com)

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Vite Team** - For the fast build tool
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon set
- **Shadcn/ui** - For the component library

---

**Built with ❤️ for Shetty Realtors**

*Connecting businesses with the right space since 1994*

---

## 🚀 Quick Start Commands

```bash
# Clone the repository
git clone https://github.com/Raugaa/Shetty-Realators.git

# Navigate to project directory
cd Shetty-Realators

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

**Access the application at:** `http://localhost:5173`

**Admin Panel:** Navigate to `/admin` for property management interface.
