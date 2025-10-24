import React, { useState, useEffect } from 'react';
import { createTithi } from '../lib/tithi-sdk';
import { ArrowRightLeft, Clock, CheckCircle, XCircle } from 'lucide-react';

interface Transaction {
  id: string;
  type: 'send' | 'swap';
  fromChain: string;
  toChain: string;
  asset: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  timestamp: Date;
  txHash: string;
}

const TransactionHistory: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading transaction history
    const loadTransactions = async () => {
      setIsLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock transaction data
      const mockTransactions: Transaction[] = [
        {
          id: '1',
          type: 'send',
          fromChain: 'ethereum',
          toChain: 'polygon',
          asset: 'USDC',
          amount: 100,
          status: 'completed',
          timestamp: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
          txHash: '0x1234567890abcdef1234567890abcdef12345678'
        },
        {
          id: '2',
          type: 'swap',
          fromChain: 'arbitrum',
          toChain: 'arbitrum',
          asset: 'ETH',
          amount: 1,
          status: 'completed',
          timestamp: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
          txHash: '0xabcdef1234567890abcdef1234567890abcdef12'
        },
        {
          id: '3',
          type: 'send',
          fromChain: 'polygon',
          toChain: 'ethereum',
          asset: 'USDC',
          amount: 50,
          status: 'pending',
          timestamp: new Date(Date.now() - 2 * 60 * 1000), // 2 minutes ago
          txHash: '0x567890abcdef1234567890abcdef1234567890ab'
        }
      ];
      
      setTransactions(mockTransactions);
      setIsLoading(false);
    };

    loadTransactions();
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-400" />;
      case 'failed':
        return <XCircle className="w-4 h-4 text-red-400" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'pending': return 'text-yellow-400';
      case 'failed': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const formatTimeAgo = (timestamp: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - timestamp.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  if (isLoading) {
    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">Recent Transactions</h3>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-slate-800 rounded-lg p-4">
                <div className="h-4 bg-slate-700 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-slate-700 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <h3 className="text-lg font-semibold text-white mb-4">Recent Transactions</h3>
      
      {transactions.length === 0 ? (
        <div className="text-center py-8">
          <ArrowRightLeft className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-400">No transactions yet</p>
          <p className="text-gray-500 text-sm">Start by trying our cross-chain demos!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {transactions.map((tx) => (
            <div key={tx.id} className="bg-slate-900 rounded-lg p-4 hover:bg-slate-800 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(tx.status)}
                  <span className="text-white font-medium capitalize">{tx.type}</span>
                  <span className={`text-sm ${getStatusColor(tx.status)}`}>
                    {tx.status}
                  </span>
                </div>
                <span className="text-gray-400 text-sm">{formatTimeAgo(tx.timestamp)}</span>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">From:</span>
                  <span className="text-white capitalize">{tx.fromChain}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">To:</span>
                  <span className="text-white capitalize">{tx.toChain}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Amount:</span>
                  <span className="text-white">{tx.amount} {tx.asset}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;
