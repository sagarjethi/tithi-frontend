import React, { useState, useEffect } from 'react';
import { createTithi } from '../lib/tithi-sdk';
import { Activity, Zap, Users, Clock } from 'lucide-react';

const NetworkStatus: React.FC = () => {
  const [status, setStatus] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const tithi = createTithi({
          apiKey: 'demo-api-key',
          network: 'testnet',
          fetterainEndpoint: 'https://api.fetterain.com'
        });
        
        const networkStatus = await tithi.getFetterainStatus();
        setStatus(networkStatus);
      } catch (error) {
        console.error('Failed to fetch network status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-moon-400"></div>
          <span className="text-gray-300 text-sm">Checking network status...</span>
        </div>
      </div>
    );
  }

  if (!status) {
    return (
      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
          <span className="text-red-400 text-sm">Network status unavailable</span>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-400';
      case 'degraded': return 'text-yellow-400';
      case 'down': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy': return '🟢';
      case 'degraded': return '🟡';
      case 'down': return '🔴';
      default: return '⚪';
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Activity className="w-4 h-4 text-moon-400" />
          <span className="text-white font-medium">Fetterain Network</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-sm">{getStatusIcon(status.status)}</span>
          <span className={`text-sm font-medium ${getStatusColor(status.status)}`}>
            {status.status.toUpperCase()}
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="flex items-center justify-center mb-1">
            <Clock className="w-3 h-3 text-gray-400 mr-1" />
            <span className="text-xs text-gray-400">Latency</span>
          </div>
          <span className="text-sm text-white font-medium">{status.latency}ms</span>
        </div>
        
        <div>
          <div className="flex items-center justify-center mb-1">
            <Users className="w-3 h-3 text-gray-400 mr-1" />
            <span className="text-xs text-gray-400">Relayers</span>
          </div>
          <span className="text-sm text-white font-medium">{status.activeRelayers}</span>
        </div>
        
        <div>
          <div className="flex items-center justify-center mb-1">
            <Zap className="w-3 h-3 text-gray-400 mr-1" />
            <span className="text-xs text-gray-400">Chains</span>
          </div>
          <span className="text-sm text-white font-medium">{status.supportedChains.length}</span>
        </div>
      </div>
    </div>
  );
};

export default NetworkStatus;
