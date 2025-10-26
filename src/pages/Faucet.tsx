import React, { useState } from 'react';
import { Droplets, Copy, Check, Wallet } from 'lucide-react';

const Faucet: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleFaucetRequest = async () => {
    if (!walletAddress) {
      setResult('❌ Please enter a wallet address');
      return;
    }

    setIsLoading(true);
    setResult(null);
    
    // Simulate faucet operation
    setTimeout(() => {
      setResult('✅ Successfully sent 0.1 ETH + 100 USDC to your wallet!');
      setIsLoading(false);
    }, 2000);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText('0x1234567890123456789012345678901234567890');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">Gasless Faucet</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Get test tokens for free to try out Tithi's cross-chain features. No gas fees required!
        </p>
      </div>

      {/* Faucet Form */}
      <div className="max-w-md mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Wallet Address
            </label>
            <input
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              placeholder="0x..."
              className="w-full bg-slate-900 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-moon-400 focus:outline-none"
            />
          </div>

          <button
            onClick={handleFaucetRequest}
            disabled={isLoading || !walletAddress}
            className="w-full bg-moon-400 text-moon-900 font-semibold py-3 px-4 rounded-lg hover:bg-moon-300 disabled:opacity-50 transition-all duration-200 flex items-center justify-center"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-moon-900"></div>
            ) : (
              <>
                <Droplets className="mr-2 w-4 h-4" />
                Request Test Tokens
              </>
            )}
          </button>
        </div>
      </div>

      {/* Result Display */}
      {result && (
        <div className="max-w-md mx-auto bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center">
          <p className="text-green-400 font-medium">{result}</p>
        </div>
      )}

      {/* Available Tokens */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
          <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Wallet className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Ethereum</h3>
          <p className="text-gray-400 text-sm mb-4">0.1 ETH</p>
          <button
            onClick={copyAddress}
            className="text-moon-400 hover:text-moon-300 text-sm flex items-center justify-center mx-auto"
          >
            {copied ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
            {copied ? 'Copied!' : 'Copy Address'}
          </button>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
          <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Wallet className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Polygon</h3>
          <p className="text-gray-400 text-sm mb-4">100 USDC</p>
          <button
            onClick={copyAddress}
            className="text-moon-400 hover:text-moon-300 text-sm flex items-center justify-center mx-auto"
          >
            {copied ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
            {copied ? 'Copied!' : 'Copy Address'}
          </button>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
          <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Wallet className="w-6 h-6 text-cyan-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Arbitrum</h3>
          <p className="text-gray-400 text-sm mb-4">50 USDC</p>
          <button
            onClick={copyAddress}
            className="text-moon-400 hover:text-moon-300 text-sm flex items-center justify-center mx-auto"
          >
            {copied ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
            {copied ? 'Copied!' : 'Copy Address'}
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-400 mb-4">How to Use the Faucet</h3>
        <div className="space-y-2 text-gray-300 text-sm">
          <p>1. Connect your wallet or enter a wallet address</p>
          <p>2. Click "Request Test Tokens" to get free test tokens</p>
          <p>3. Use the tokens to try cross-chain operations in the Showcase</p>
          <p>4. No gas fees required - Tithi handles everything!</p>
        </div>
      </div>
    </div>
  );
};

export default Faucet;
