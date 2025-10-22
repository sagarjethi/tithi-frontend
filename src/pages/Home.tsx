import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Code, Globe } from 'lucide-react';
import SDKDemo from '../components/SDKDemo';
import TransactionHistory from '../components/TransactionHistory';

const Home: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Cross-Chain Made
            <span className="text-moon-400 block">Easy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A universal cross-chain layer powered by Fetterain that lets users and developers execute multi-chain operations through one simple interface.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/showcase"
            className="inline-flex items-center px-8 py-4 bg-moon-400 text-moon-900 font-semibold rounded-xl hover:bg-moon-300 transition-all duration-200 transform hover:scale-105"
          >
            Try Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            to="/faucet"
            className="inline-flex items-center px-8 py-4 border border-moon-400 text-moon-300 font-semibold rounded-xl hover:bg-moon-400/10 transition-all duration-200"
          >
            Get Test Tokens
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <Globe className="w-8 h-8 text-moon-400 mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Cross-Chain Abstraction</h3>
          <p className="text-gray-400 text-sm">One click to perform any operation across chains</p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <Zap className="w-8 h-8 text-moon-400 mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Gasless Meta-Transactions</h3>
          <p className="text-gray-400 text-sm">Users sign once, relayers cover gas in the background</p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <Code className="w-8 h-8 text-moon-400 mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Developer SDK</h3>
          <p className="text-gray-400 text-sm">A plug-and-play JS SDK for instant integration</p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <Shield className="w-8 h-8 text-moon-400 mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Fetterain Integration</h3>
          <p className="text-gray-400 text-sm">Enhanced cross-chain capabilities powered by Fetterain network</p>
        </div>
      </section>

      {/* SDK Preview */}
      <section className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Developer SDK Preview</h2>
        <div className="bg-slate-900 rounded-xl p-6 font-mono text-sm">
          <div className="text-moon-400 mb-4">// Cross-chain operations with Fetterain</div>
          <div className="text-gray-300 space-y-2">
            <div><span className="text-blue-400">await</span> <span className="text-moon-400">tithi</span>.<span className="text-green-400">send</span>(<span className="text-yellow-300">'ethereum'</span>, <span className="text-yellow-300">'polygon'</span>, <span className="text-yellow-300">'USDC'</span>, <span className="text-yellow-300">100</span>)</div>
            <div><span className="text-blue-400">await</span> <span className="text-moon-400">tithi</span>.<span className="text-green-400">getFetterainStatus</span>()</div>
          </div>
        </div>
      </section>

      {/* Live SDK Demo */}
      <SDKDemo />

      {/* Transaction History */}
      <div className="grid lg:grid-cols-2 gap-8">
        <TransactionHistory />
        <div className="bg-gradient-to-r from-moon-400/10 to-moon-600/10 border border-moon-400/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Cross-Chain?</h3>
          <p className="text-gray-300 mb-6">
            Join the ETHOnline 2025 hackathon and experience the future of cross-chain interoperability.
          </p>
          <Link
            to="/events"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-moon-400 to-moon-600 text-moon-900 font-semibold rounded-lg hover:from-moon-300 hover:to-moon-500 transition-all duration-200"
          >
            View Events
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Home;
