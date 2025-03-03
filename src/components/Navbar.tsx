import { Menu, X } from 'lucide-react'
import React from 'react'


interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Details', href: '#details' },
    { label: 'Categories', href: '#categories' },
    { label: 'Rules', href: '#rules' },
    { label: 'Last Edition', href: '#last-edition' },
    { label: 'FAQs', href: '#faq' },
    { label: 'Our Team', href: '#coordinators' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-pamplet backdrop-blur-sm z-50 ">
      <div className="container mx-auto px-4" >
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold font-Krona ">
            RIT-<span className='text-red-600'>A</span>-THON 2k25
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-inter items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-black hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#categories"
              className="px-4 py-2 bg-peek font-Krona text-sm text-white hover:bg-white hover:text-black rounded-lg transition-colors "
            >
              Register Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black hover:text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 transition-all duration-300 ease-in-out transform -translate-y-10 opacity-0 animate-slide-down-nav font-inter">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-black font-medium hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#categories"
              className="block py-2 px-4 font-Krona text-white bg-peek rounded-lg transition-colors text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Register Now
            </a>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;