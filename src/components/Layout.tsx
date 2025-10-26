import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Zap, Calendar, Gift, Droplets } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Moon },
    { path: '/events', label: 'Events', icon: Calendar },
    { path: '/showcase', label: 'Showcase', icon: Zap },
    { path: '/faucet', label: 'Faucet', icon: Droplets },
    { path: '/swag', label: 'Swag', icon: Gift },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-moon-400 rounded-full flex items-center justify-center moon-glow">
                <Moon className="w-5 h-5 text-moon-900" />
              </div>
              <span className="text-2xl font-bold text-white">Tithi.xyz</span>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    location.pathname === path
                      ? 'bg-moon-400/20 text-moon-300 border border-moon-400/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-400">
            <p className="text-sm">
              🌕 Tithi.xyz — The Layer That Makes Cross-Chain Operations Easy
            </p>
            <p className="text-xs mt-2 opacity-75">
              Built for ETHOnline 2025 • Powered by Avail Nexus SDK
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
