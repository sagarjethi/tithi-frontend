import React, { useState } from 'react';
import { createTithi } from '../lib/tithi-sdk';
import { Play, Code, Copy, Check } from 'lucide-react';

const SDKDemo: React.FC = () => {
  const [code, setCode] = useState(`// Initialize Tithi SDK
const tithi = createTithi({
  apiKey: 'your-api-key',
  network: 'testnet'
});

// Send 100 USDC from Ethereum to Polygon
const tx = await tithi.send('ethereum', 'polygon', 'USDC', 100);
console.log('Transaction:', tx.txHash);

// Swap 1 ETH for USDC on Arbitrum
const swap = await tithi.swap('ETH', 'USDC', 'arbitrum', 1);
console.log('Swap rate:', swap.rate);`);
  
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState<string[]>([]);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const runCode = async () => {
    setIsRunning(true);
    setOutput([]);
    
    // Simulate code execution
    const tithi = createTithi({
      apiKey: 'demo-api-key',
      network: 'testnet'
    });

    try {
      setOutput(prev => [...prev, '🚀 Initializing Tithi SDK...']);
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setOutput(prev => [...prev, '🌉 Sending 100 USDC from Ethereum to Polygon...']);
      const tx = await tithi.send('ethereum', 'polygon', 'USDC', 100);
      setOutput(prev => [...prev, `✅ Transaction: ${tx.txHash.slice(0, 20)}...`]);
      
      setOutput(prev => [...prev, '🔄 Swapping 1 ETH for USDC on Arbitrum...']);
      const swap = await tithi.swap('ETH', 'USDC', 'arbitrum', 1);
      setOutput(prev => [...prev, `✅ Swap rate: ${swap.rate.toFixed(2)} USDC per ETH`]);
      
      setOutput(prev => [...prev, '🎉 All operations completed successfully!']);
    } catch (error) {
      setOutput(prev => [...prev, '❌ Error: ' + (error as Error).message]);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Live SDK Demo</h3>
        <div className="flex space-x-2">
          <button
            onClick={copyCode}
            className="flex items-center px-3 py-2 bg-slate-700 text-gray-300 rounded-lg hover:bg-slate-600 transition-colors"
          >
            {copied ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <button
            onClick={runCode}
            disabled={isRunning}
            className="flex items-center px-3 py-2 bg-moon-400 text-moon-900 rounded-lg hover:bg-moon-300 disabled:opacity-50 transition-colors"
          >
            {isRunning ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-moon-900 mr-1"></div>
            ) : (
              <Play className="w-4 h-4 mr-1" />
            )}
            {isRunning ? 'Running...' : 'Run Code'}
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Code Editor */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Code className="w-4 h-4 text-moon-400" />
            <span className="text-sm font-medium text-gray-300">Code</span>
          </div>
          <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-gray-300 whitespace-pre-wrap">{code}</pre>
          </div>
        </div>

        {/* Output */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-sm font-medium text-gray-300">Output</span>
          </div>
          <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm min-h-[200px]">
            {output.length === 0 ? (
              <div className="text-gray-500">Click "Run Code" to see the output...</div>
            ) : (
              <div className="space-y-1">
                {output.map((line, index) => (
                  <div key={index} className="text-gray-300">{line}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SDKDemo;
