# 🌕 Tithi.xyz - ETHOnline 2025 Hackathon Submission

## 📸 **UI Screenshots & Demo**

### 🏠 **Home Page - Landing & Features**
![Home Page](https://via.placeholder.com/1200x800/1e1b4b/ffffff?text=Tithi.xyz+Home+Page)
- **Hero Section**: Cross-chain made easy with moon-themed design
- **Core Features**: Cross-chain abstraction, gasless transactions, developer SDK
- **Live SDK Demo**: Interactive code editor with real-time execution
- **Transaction History**: Recent cross-chain operations
- **Development Roadmap**: Q4 2025 to Q2 2026 timeline

### 🎯 **Showcase Page - Interactive Demos**
![Showcase Page](https://via.placeholder.com/1200x800/1e1b4b/ffffff?text=Cross-Chain+Showcase)
- **Cross-Chain Send Demo**: Ethereum → Polygon USDC transfer
- **Token Swap Demo**: ETH → USDC on Arbitrum
- **Real-time Results**: Transaction hashes and success confirmations
- **SDK Integration Examples**: Copy-paste ready code snippets

### 💧 **Faucet Page - Gasless Test Tokens**
![Faucet Page](https://via.placeholder.com/1200x800/1e1b4b/ffffff?text=Gasless+Faucet)
- **Multi-Chain Support**: Ethereum, Polygon, Arbitrum test tokens
- **Gasless Distribution**: No gas fees required
- **Wallet Integration**: Easy address input and token claiming
- **Network Status**: Real-time chain availability

### 🎁 **Swag Page - Points System**
![Swag Page](https://via.placeholder.com/1200x800/1e1b4b/ffffff?text=Tithi+Swag+Store)
- **Points-Based Rewards**: Earn points through engagement
- **Merchandise**: T-shirts, mugs, stickers
- **Interactive Cart**: Add/remove items with point calculations
- **Engagement Tracking**: Points for transactions, referrals, events

### 📅 **Events Page - Community**
![Events Page](https://via.placeholder.com/1200x800/1e1b4b/ffffff?text=Community+Events)
- **ETHOnline 2025 Events**: Kickoff, workshops, meetups
- **Event Details**: Dates, times, attendee counts
- **Registration**: Direct links to join events
- **Community Building**: Discord, updates, recordings

## 🚀 **How to Run the Project**

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Quick Start
```bash
# Clone the repository
git clone https://github.com/sagarjethi/tithi-frontend.git
cd tithi-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

### Project Structure
```
tithi-frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Layout.tsx       # Main navigation & layout
│   │   ├── SDKDemo.tsx     # Interactive SDK demo
│   │   ├── TransactionHistory.tsx
│   │   └── Roadmap.tsx     # Development roadmap
│   ├── pages/              # Main application pages
│   │   ├── Home.tsx        # Landing page
│   │   ├── Showcase.tsx    # Cross-chain demos
│   │   ├── Faucet.tsx      # Test token distribution
│   │   ├── Swag.tsx        # Points & merchandise
│   │   └── Events.tsx      # Community events
│   ├── lib/
│   │   ├── tithi-sdk.ts    # Core SDK implementation
│   │   └── package.json    # SDK package config
│   └── App.tsx             # Main app with routing
├── tailwind.config.js      # Custom moon theme
└── README.md               # This file
```

## 🛠 **Technical Implementation**

### Core Technologies
- **React 18** + TypeScript for type safety
- **Vite** for ultra-fast development
- **Tailwind CSS** with custom moon theme
- **React Router** for navigation
- **Lucide React** for consistent icons

### Key Features Implemented
1. **Cross-Chain SDK**: Complete TypeScript SDK with `send()` and `swap()` methods
2. **Interactive Demos**: Real-time cross-chain operation simulations
3. **Gasless Faucet**: Test token distribution without gas fees
4. **Points System**: Engagement-based rewards and swag claiming
5. **Responsive Design**: Mobile-first approach with modern UI

### SDK API
```typescript
// Initialize SDK
const tithi = createTithi({
  apiKey: 'your-api-key',
  network: 'testnet'
});

// Send assets across chains
const tx = await tithi.send('ethereum', 'polygon', 'USDC', 100);

// Swap tokens on any chain
const swap = await tithi.swap('ETH', 'USDC', 'arbitrum', 1);

// Get supported chains
const chains = tithi.getSupportedChains();
```

## 🎯 **Hackathon Focus**

### ETHOnline 2025 Deliverables
✅ **Cross-Chain Send & Claim Demo** - Interactive Ethereum ↔ Polygon transfers  
✅ **Gasless Faucet** - Test token distribution for onboarding  
✅ **Interactive Showcase** - Cross-chain swaps & NFT actions  
✅ **Developer SDK Preview** - `tithi.send()` & `tithi.swap()` integration  

### Innovation Highlights
- **One-Click Cross-Chain**: Eliminates bridge complexity
- **Gasless Experience**: Meta-transactions for seamless UX
- **Universal Interface**: Single dashboard for all operations
- **Developer-Friendly**: Simple SDK with comprehensive docs

## 🌐 **Live Demo**

**Local Development**: http://localhost:5173  
**GitHub Repository**: https://github.com/sagarjethi/tithi-frontend.git

## 📱 **Mobile Responsive**

The application is fully responsive and works seamlessly on:
- 📱 Mobile devices (iOS/Android)
- 💻 Desktop browsers
- 📟 Tablet interfaces

## 🔮 **Future Roadmap**

### Q1 2026
- **Fetterain Integration**: Enhanced cross-chain capabilities
- **Advanced Routing**: Optimal path finding across chains
- **NFT Cross-Chain**: Transfer NFTs across blockchains

### Q2 2026
- **Mobile SDKs**: React Native and Flutter support
- **Enterprise Features**: Advanced analytics and compliance
- **Layer 2 Expansion**: More L2 solution support

## 🤝 **Team & Contact**

**Project**: Tithi.xyz - Cross-Chain Made Easy  
**Hackathon**: ETHOnline 2025  
**Repository**: https://github.com/sagarjethi/tithi-frontend.git  
**Demo**: http://localhost:5173 (when running locally)

---

**Built for ETHOnline 2025 • Making Cross-Chain Operations Easy** 🌕✨
