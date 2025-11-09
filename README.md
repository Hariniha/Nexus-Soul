# SYNTHETIC SOULS - AI Digital Twin Platform

> A production-grade dark theme AI twin creation platform. Create, manage, and monetize your digital twins with end-to-end encryption and decentralized storage.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## ✨ Features

- **AI Twin Creation**: 3-step wizard to upload data and train AI clones
- **Encrypted Storage**: Data encrypted with Seal Protocol before storage
- **Decentralized**: Powered by Sui blockchain + Walrus storage
- **Marketplace**: Buy and sell access to AI twins
- **Real-time Chat**: Interactive conversations with your AI twins
- **Dashboard**: Comprehensive analytics and twin management

## 🎨 Design System

- **Dark Theme**: #0A0A0A base with amber (#D97706) accents
- **macOS Fonts**: SF Pro Display/Text for premium feel
- **Animations**: GSAP scroll animations + Three.js particle backgrounds
- **Responsive**: Mobile-first design with Tailwind CSS v3
- **Accessible**: WCAG AA compliant

## 📦 Tech Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS v3
- Lucide React icons
- GSAP + Three.js animations
- Sui Network (ready for integration)
- Seal Protocol (ready for integration)
- Walrus Protocol (ready for integration)

## 🗂 Project Structure

```
app/
├── page.tsx              # Landing page
├── create-twin/          # Twin creation wizard
├── chat/[twinId]/        # Chat interface
├── marketplace/          # AI twin marketplace
└── dashboard/            # User dashboard

components/
├── ui/                   # Reusable UI components
├── layout/               # Navigation & Footer
├── landing/              # Landing page sections
├── ai-twin/              # Twin management components
└── marketplace/          # Marketplace components
```

## 🎯 Pages

1. **Landing** (`/`) - Hero, Features, How It Works, Use Cases
2. **Create Twin** (`/create-twin`) - 3-step creation wizard
3. **Chat** (`/chat/[id]`) - Interactive chat with AI twins
4. **Marketplace** (`/marketplace`) - Browse & purchase twins
5. **Dashboard** (`/dashboard`) - Analytics & management

## 🎨 Color Palette

```css
Background: #0A0A0A, #141414, #1E1E1E
Text: #F5F5F5, #A3A3A3, #525252
Accent: #D97706 (amber), #DC2626 (crimson)
Success: #059669, Error: #DC2626
```

## 🚀 Deployment

```bash
npm run build
npm start
```

Deploy to Vercel with one click or use your preferred hosting platform.

## 📄 License

MIT License - Built for hackathon demonstration

---

**Built with ❤️ for the future of digital identity**
