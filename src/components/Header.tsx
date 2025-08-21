import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, ChevronDown, X } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define a type for the navigation items for better type safety
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  items?: string[];
}

export function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    {
      label: 'Home',
      href: '/',
    },
    // {
    //   label: 'Portfolio',
    //   href: '/portfolio',
    // },
    {
      label: 'Services',
      href: '/services',
    },
    {
      label: 'About',
      href: '/about'
    },
    {
      label: 'Contact',
      href: '/contact'
    }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-200/30 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            
            {/* Logo */}
          <div className="flex items-center space-x-2">
  <Link to="/" className="flex items-center space-x-2">
    <img
      src="/assets/logoo.png"
      alt="Bihar Media Advertisement Logo"
      className="h-8 w-auto"
    />
    <div className="flex flex-col">
      <span className="font-bold text-lg text-gray-900 leading-tight">
        Bihar Media
      </span>
      <span className="text-xs text-blue-600 font-medium -mt-0.5">
        Advertisement
      </span>
      <span className="text-xs text-black font-medium -mt-0.5">
        Powered by Arihant Associates.
      </span>
    </div>
  </Link>
</div>


            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-0">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    to={item.href}
                    className="flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-md hover:bg-white/50"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className="ml-1 h-3 w-3 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsMenuOpen(true)}
                className="h-9 w-9 p-0"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer div to push content below the fixed header */}
      <div className="h-16"></div>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Sidebar Content - Solid White Background */}
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-lg border-l border-gray-200/30">
            <div className="flex flex-col h-full">
              
              {/* Mobile Header with Close Button */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <img
                    src="/assets/logoo.png"
                    alt="Bihar Media Advertisement Logo"
                    className="h-8 w-auto"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-lg text-gray-900 leading-tight">Bihar Media</span>
                    <span className="text-xs text-blue-600 font-medium -mt-0.5">Advertisement</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              
              {/* Mobile Navigation */}
              <div className="flex-1 p-6">
                <nav className="space-y-4">
                  <Link
                    to="/"
                    className="block px-4 py-3 text-lg font-medium text-gray-800 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  {/* <Link
                    to="/portfolio"
                    className="block px-4 py-3 text-lg font-medium text-gray-800 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Portfolio
                  </Link> */}
                  <Link
                    to="/services"
                    className="block px-4 py-3 text-lg font-medium text-gray-800 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    to="/about"
                    className="block px-4 py-3 text-lg font-medium text-gray-800 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-4 py-3 text-lg font-medium text-gray-800 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>
              </div>

              {/* Footer Section */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <p className="text-xs text-gray-600 mb-1">Bihar's Leading Advertising Agency</p>
                <p className="text-xs text-gray-500">Transforming visions into powerful campaigns</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
