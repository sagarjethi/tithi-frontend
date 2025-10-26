import React from 'react';
import { Zap, Shield, Globe, Code } from 'lucide-react';

const Roadmap: React.FC = () => {
  const roadmapItems = [
    {
      quarter: 'Q4 2025',
      status: 'completed',
      features: [
        {
          title: 'Core Cross-Chain SDK',
          description: 'Basic send() and swap() operations',
          icon: Code,
          completed: true
        },
        {
          title: 'Universal Interface',
          description: 'Events, Showcase, Faucet, Swag pages',
          icon: Globe,
          completed: true
        },
        {
          title: 'Gasless Meta-Transactions',
          description: 'Users sign once, relayers cover gas',
          icon: Zap,
          completed: true
        }
      ]
    },
    {
      quarter: 'Q1 2026',
      status: 'in-progress',
      features: [
        {
          title: 'Fetterain Integration',
          description: 'Enhanced cross-chain capabilities with Fetterain network',
          icon: Shield,
          completed: false
        },
        {
          title: 'Advanced Routing',
          description: 'Optimal path finding across multiple chains',
          icon: Zap,
          completed: false
        },
        {
          title: 'NFT Cross-Chain',
          description: 'Transfer NFTs across different blockchains',
          icon: Globe,
          completed: false
        }
      ]
    },
    {
      quarter: 'Q2 2026',
      status: 'planned',
      features: [
        {
          title: 'Mobile SDK',
          description: 'React Native and Flutter SDKs',
          icon: Code,
          completed: false
        },
        {
          title: 'Enterprise Features',
          description: 'Advanced analytics and compliance tools',
          icon: Shield,
          completed: false
        },
        {
          title: 'Layer 2 Expansion',
          description: 'Support for more L2 solutions',
          icon: Globe,
          completed: false
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'in-progress': return 'text-yellow-400';
      case 'planned': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/10 border-green-500/30';
      case 'in-progress': return 'bg-yellow-500/10 border-yellow-500/30';
      case 'planned': return 'bg-gray-500/10 border-gray-500/30';
      default: return 'bg-gray-500/10 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-white">Development Roadmap</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Our journey to make cross-chain operations seamless for everyone.
        </p>
      </div>

      <div className="space-y-8">
        {roadmapItems.map((quarter) => (
          <div key={quarter.quarter} className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className={`px-4 py-2 rounded-lg border ${getStatusBg(quarter.status)}`}>
                <h3 className={`text-lg font-semibold ${getStatusColor(quarter.status)}`}>
                  {quarter.quarter}
                </h3>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {quarter.features.map((feature, featureIndex) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={featureIndex}
                    className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 ${
                      feature.completed ? 'border-green-400/30' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        feature.completed ? 'bg-green-400/20' : 'bg-moon-400/20'
                      }`}>
                        <Icon className={`w-5 h-5 ${
                          feature.completed ? 'text-green-400' : 'text-moon-400'
                        }`} />
                      </div>
                      {feature.completed && (
                        <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                          <span className="text-green-900 text-xs font-bold">✓</span>
                        </div>
                      )}
                    </div>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-moon-400/10 to-moon-600/10 border border-moon-400/30 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Join Our Journey</h3>
        <p className="text-gray-300 mb-6">
          Be part of the future of cross-chain interoperability. Follow our progress and contribute to the ecosystem.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-moon-400 text-moon-900 font-semibold rounded-lg hover:bg-moon-300 transition-all duration-200"
          >
            Follow Updates
          </a>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-moon-400 text-moon-300 font-semibold rounded-lg hover:bg-moon-400/10 transition-all duration-200"
          >
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
