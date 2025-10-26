# 🌕 Tithi.xyz - Cross-Chain Made Easy

> **The Layer That Makes Cross-Chain Operations Easy**

A universal cross-chain abstraction protocol that removes the friction of using multiple blockchains. Instead of bridges, wrapped tokens, or switching wallets, users interact with one unified layer — and Tithi takes care of the routing, signing, and gas.

## ✨ Features

- 🌉 **Cross-Chain Abstraction:** One click to perform any operation across chains
- ⚡ **Gasless Meta-Transactions:** Users sign once, relayers cover gas in the background  
- 🧩 **Developer SDK:** A plug-and-play JS SDK for instant integration into dApps
- 🪶 **Universal Interface:** A minimal dashboard with Events, Showcase, Faucet, and Swag pages
- 🔐 **Secure Messaging:** Powered by Avail Nexus and LayerZero cross-chain proofs

## 🚀 Quick Start

### Installation

```bash
npm install @tithi/sdk
```

### Basic Usage

```typescript
import { createTithi } from '@tithi/sdk';

// Initialize SDK
const tithi = createTithi({
  apiKey: 'your-api-key',
  network: 'testnet' // or 'mainnet'
});

// Send assets across chains
const tx = await tithi.send('ethereum', 'polygon', 'USDC', 100);

// Swap tokens on any chain
const swap = await tithi.swap('ETH', 'USDC', 'arbitrum', 1);
```

## 🛠 Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/tithixyz/frontend.git
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Pages

### Home
Landing page with project overview, features, and SDK preview.

### Events
Community events, workshops, and meetups related to Tithi development.

### Showcase
Interactive demos of cross-chain operations:
- Cross-chain send (Ethereum → Polygon)
- Token swap (ETH → USDC on Arbitrum)

### Faucet
Get free test tokens to try Tithi's features:
- Ethereum: 0.1 ETH
- Polygon: 100 USDC  
- Arbitrum: 50 USDC

### Swag
Earn points and claim exclusive Tithi merchandise:
- T-shirts, mugs, stickers
- Points system for engagement

## 🔧 SDK API

### Core Methods

#### `send(fromChain, toChain, asset, amount, recipient?)`
Send assets across chains with meta-transactions.

#### `swap(tokenA, tokenB, chain, amount?, slippage?)`
Swap tokens on any supported chain.

#### `getSupportedChains()`
Get list of supported blockchain networks.

#### `getSupportedAssets(chain)`
Get supported assets for a specific chain.

#### `getTransactionStatus(txHash)`
Check the status of a cross-chain transaction.

#### `estimateGas(transaction)`
Estimate gas fees for a transaction.

## 🌐 Supported Networks

- Ethereum
- Polygon
- Arbitrum
- Optimism
- Base
- Avalanche

## 🎯 ETHOnline 2025 Focus

For ETHOnline 2025, Tithi will demonstrate:

1. **Cross-Chain Send & Claim** using Avail Nexus SDK
2. **Gasless Faucet** for onboarding new wallets
3. **Interactive Showcase** for cross-chain swaps & NFT actions
4. **Developer SDK preview** for integrating `tithi.send()` & `tithi.swap()`

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Website:** [tithi.xyz](https://tithi.xyz)
- **Documentation:** [docs.tithi.xyz](https://docs.tithi.xyz)
- **Discord:** [discord.gg/tithi](https://discord.gg/tithi)
- **Twitter:** [@tithixyz](https://twitter.com/tithixyz)

---

**Built for ETHOnline 2025 • Powered by Avail Nexus SDK**