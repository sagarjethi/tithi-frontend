import React, { useState } from 'react';
import { Gift, Shirt, Coffee, Sticker, Truck, Check } from 'lucide-react';

const Swag: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isClaimed, setIsClaimed] = useState(false);

  const swagItems = [
    {
      id: 'shirt',
      name: 'Tithi.xyz T-Shirt',
      description: 'Premium cotton t-shirt with moon logo',
      icon: Shirt,
      points: 100
    },
    {
      id: 'mug',
      name: 'Tithi.xyz Mug',
      description: 'Ceramic mug perfect for your morning coffee',
      icon: Coffee,
      points: 50
    },
    {
      id: 'sticker',
      name: 'Tithi.xyz Stickers',
      description: 'Pack of 10 vinyl stickers',
      icon: Sticker,
      points: 25
    }
  ];

  const toggleItem = (itemId: string) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const totalPoints = selectedItems.reduce((total, itemId) => {
    const item = swagItems.find(i => i.id === itemId);
    return total + (item?.points || 0);
  }, 0);

  const handleClaim = () => {
    setIsClaimed(true);
    setTimeout(() => setIsClaimed(false), 3000);
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">Tithi.xyz Swag</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Earn points by using Tithi and claim exclusive merchandise. Show your support for cross-chain innovation!
        </p>
      </div>

      {/* Points Display */}
      <div className="bg-gradient-to-r from-moon-400/10 to-moon-600/10 border border-moon-400/30 rounded-xl p-6 text-center">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Gift className="w-6 h-6 text-moon-400" />
          <span className="text-2xl font-bold text-white">Your Points: 250</span>
        </div>
        <p className="text-gray-300 text-sm">
          Earn more points by completing cross-chain transactions and referring friends!
        </p>
      </div>

      {/* Swag Items */}
      <div className="grid md:grid-cols-3 gap-6">
        {swagItems.map((item) => {
          const Icon = item.icon;
          const isSelected = selectedItems.includes(item.id);
          const canAfford = 250 >= item.points;
          
          return (
            <div
              key={item.id}
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border transition-all duration-200 cursor-pointer ${
                isSelected 
                  ? 'border-moon-400 bg-moon-400/10' 
                  : canAfford 
                    ? 'border-white/10 hover:border-moon-400/30' 
                    : 'border-gray-600 opacity-50'
              }`}
              onClick={() => canAfford && toggleItem(item.id)}
            >
              <div className="text-center space-y-4">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                  isSelected ? 'bg-moon-400' : 'bg-moon-400/20'
                }`}>
                  <Icon className={`w-8 h-8 ${isSelected ? 'text-moon-900' : 'text-moon-400'}`} />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-moon-400 font-semibold">{item.points} points</span>
                    {isSelected && <Check className="w-5 h-5 text-moon-400" />}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cart Summary */}
      {selectedItems.length > 0 && (
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Cart Summary</h3>
          <div className="space-y-2 mb-4">
            {selectedItems.map(itemId => {
              const item = swagItems.find(i => i.id === itemId);
              return (
                <div key={itemId} className="flex justify-between text-sm">
                  <span className="text-gray-300">{item?.name}</span>
                  <span className="text-moon-400">{item?.points} points</span>
                </div>
              );
            })}
          </div>
          <div className="border-t border-white/10 pt-4 flex justify-between">
            <span className="text-white font-semibold">Total:</span>
            <span className="text-moon-400 font-semibold">{totalPoints} points</span>
          </div>
        </div>
      )}

      {/* Claim Button */}
      {selectedItems.length > 0 && (
        <div className="text-center">
          <button
            onClick={handleClaim}
            disabled={isClaimed || totalPoints > 250}
            className="inline-flex items-center px-8 py-4 bg-moon-400 text-moon-900 font-semibold rounded-xl hover:bg-moon-300 disabled:opacity-50 transition-all duration-200"
          >
            {isClaimed ? (
              <>
                <Check className="mr-2 w-5 h-5" />
                Claimed Successfully!
              </>
            ) : (
              <>
                <Truck className="mr-2 w-5 h-5" />
                Claim Swag ({totalPoints} points)
              </>
            )}
          </button>
        </div>
      )}

      {/* How to Earn Points */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-400 mb-4">How to Earn Points</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
          <div className="space-y-2">
            <p>• Complete cross-chain transactions: +10 points</p>
            <p>• Use the faucet: +5 points</p>
            <p>• Share on social media: +15 points</p>
          </div>
          <div className="space-y-2">
            <p>• Refer a friend: +25 points</p>
            <p>• Build with Tithi SDK: +50 points</p>
            <p>• Attend events: +20 points</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swag;
