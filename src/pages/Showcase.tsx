import React, { useState } from 'react';
import { ArrowRightLeft, Send, Zap, Coins } from 'lucide-react';
import { createTithi } from '../lib/tithi-sdk';

const Showcase: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  // Initialize Tithi SDK with Fetterain integration
  const tithi = createTithi({
    apiKey: 'demo-api-key',
    network: 'testnet',
    fetterainEndpoint: 'https://api.fetterain.com'
  });

  const handleCrossChainSend = async () => {
    setIsLoading(true);
    setResult(null);
    
    try {
      const tx = await tithi.send('ethereum', 'polygon', 'USDC', 100);
      setResult(`✅ Successfully sent 100 USDC from Ethereum to Polygon! TX: ${tx.txHash.slice(0, 10)}... | Fetterain ID: ${tx.fetterainTxId}`);
    } catch (error) {
      setResult('❌ Transaction failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSwap = async () => {
    setIsLoading(true);
    setResult(null);
    
    try {
      const tx = await tithi.swap('ETH', 'USDC', 'arbitrum', 1);
      setResult(`✅ Successfully swapped 1 ETH for ${tx.rate.toFixed(2)} USDC on Arbitrum! TX: ${tx.txHash.slice(0, 10)}...`);
    } catch (error) {
      setResult('❌ Swap failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">Cross-Chain Showcase</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Experience the power of Tithi's cross-chain operations. Try our interactive demos below.
        </p>
      </div>

      {/* Demo Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Cross-Chain Send Demo */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <div className="flex items-center space-x-3 mb-4">
            <Send className="w-6 h-6 text-moon-400" />
            <h3 className="text-xl font-semibold text-white">Cross-Chain Send</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-slate-900 rounded-lg p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">From:</span>
                <span className="text-white">Ethereum</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-gray-400">To:</span>
                <span className="text-white">Polygon</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-gray-400">Amount:</span>
                <span className="text-white">100 USDC</span>
              </div>
            </div>

            <button
              onClick={handleCrossChainSend}
              disabled={isLoading}
              className="w-full bg-moon-400 text-moon-900 font-semibold py-3 px-4 rounded-lg hover:bg-moon-300 disabled:opacity-50 transition-all duration-200 flex items-center justify-center"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-moon-900"></div>
              ) : (
                <>
                  Send Cross-Chain
                  <ArrowRightLeft className="ml-2 w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Swap Demo */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <div className="flex items-center space-x-3 mb-4">
            <Zap className="w-6 h-6 text-moon-400" />
            <h3 className="text-xl font-semibold text-white">Cross-Chain Swap</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-slate-900 rounded-lg p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">From:</span>
                <span className="text-white">1 ETH</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-gray-400">To:</span>
                <span className="text-white">2,500 USDC</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-gray-400">Chain:</span>
                <span className="text-white">Arbitrum</span>
              </div>
            </div>

            <button
              onClick={handleSwap}
              disabled={isLoading}
              className="w-full bg-moon-400 text-moon-900 font-semibold py-3 px-4 rounded-lg hover:bg-moon-300 disabled:opacity-50 transition-all duration-200 flex items-center justify-center"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-moon-900"></div>
              ) : (
                <>
                  Execute Swap
                  <Coins className="ml-2 w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Result Display */}
      {result && (
        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center">
          <p className="text-green-400 font-medium">{result}</p>
        </div>
      )}

      {/* SDK Integration Example */}
      <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4">SDK Integration Example</h3>
        <div className="bg-slate-900 rounded-xl p-6 font-mono text-sm">
          <div className="text-moon-400 mb-4">// Install Tithi SDK</div>
          <div className="text-gray-300 mb-4">npm install @tithi/sdk</div>
          
          <div className="text-moon-400 mb-4">// Initialize SDK with Fetterain</div>
          <div className="text-gray-300 space-y-2">
            <div><span className="text-blue-400">import</span> <span className="text-moon-400">Tithi</span> <span className="text-blue-400">from</span> <span className="text-yellow-300">'@tithi/sdk'</span></div>
            <div><span className="text-blue-400">const</span> <span className="text-moon-400">tithi</span> = <span className="text-blue-400">new</span> <span className="text-moon-400">Tithi</span>({'{'}<span className="text-yellow-300">apiKey</span>: <span className="text-yellow-300">'your-api-key'</span>, <span className="text-yellow-300">fetterainEndpoint</span>: <span className="text-yellow-300">'https://api.fetterain.com'</span>{'}'})</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
