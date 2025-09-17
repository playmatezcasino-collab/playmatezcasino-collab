import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink, ChevronDown } from 'lucide-react';
import { useSafeTranslation } from '../../utils/i18nUtils';
import { headerNavigation } from '../../data/navigation';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const location = useLocation();
  const { tt, ready } = useSafeTranslation();
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setExpandedMobile(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setExpandedMobile(null);
  };

  const handleDropdownEnter = (itemId: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(itemId);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleMobileToggle = (itemId: string) => {
    setExpandedMobile(expandedMobile === itemId ? null : itemId);
  };

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  const isParentActive = (subItems?: { id: string; label: string; href: string }[]) => {
    return subItems?.some(item => isActive(item.href)) || false;
  };

  const isGroup = (item: typeof headerNavigation[0]) => {
    return (item.subItems?.length ?? 0) > 0;
  };

  // Helper to get display label for navigation items
  const getNavLabel = (item: { labelKey?: string; label: string }) => {
    if (item.labelKey) {
      return tt(item.labelKey, item.label);
    }
    if (item.label) {
      return item.label; // Already human-readable fallback
    }
    return item.label; // Fallback to label
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isInsideDropdown = Object.values(dropdownRefs.current).some(ref => 
        ref && ref.contains(target)
      );
      if (!isInsideDropdown) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header className="backdrop-blur-sm sticky top-0 z-50 border-b border-playmatez-gold/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2 h-10 md:h-12 lg:h-16">
              <img 
                src="/FullLogo_Transparent_NoBuffer (2).png" 
                alt="Playmatez Logo" 
                className="h-full w-auto max-w-full object-contain"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Primary">
            {headerNavigation.map((item) => (
              <div
                key={item.id}
                className="relative"
                ref={el => dropdownRefs.current[item.id] = el}
                onMouseEnter={() => isGroup(item) ? handleDropdownEnter(item.id) : undefined}
                onMouseLeave={() => isGroup(item) ? handleDropdownLeave() : undefined}
              >
                {isGroup(item) ? (
                  // Dropdown trigger button
                  <button
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 relative ${
                      isParentActive(item.subItems)
                        ? 'text-playmatez-gold'
                        : 'text-playmatez-white hover:text-playmatez-gold'
                    }`}
                    aria-expanded={openDropdown === item.id}
                    aria-controls={`dropdown-${item.id}`}
                    aria-haspopup="menu"
                  >
                    {getNavLabel(item)}
                    <ChevronDown 
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                        openDropdown === item.id ? 'rotate-180' : ''
                      }`}
                    />
                    {/* Active underline for parent */}
                    {isParentActive(item.subItems) && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-playmatez-gold"></span>
                    )}
                  </button>
                ) : (
                  // Direct link
                  <Link
                    to={item.href!}
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 relative ${
                      isActive(item.href!)
                        ? 'text-playmatez-gold'
                        : 'text-playmatez-white hover:text-playmatez-gold'
                    }`}
                  >
                    {getNavLabel(item)}
                    {/* Active underline for direct link */}
                    {isActive(item.href!) && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-playmatez-gold"></span>
                    )}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {isGroup(item) && openDropdown === item.id && item.subItems && (
                  <div
                    id={`dropdown-${item.id}`}
                    className="absolute top-full left-0 mt-1 w-56 bg-playmatez-grey border border-playmatez-gold/30 rounded-lg shadow-lg py-2 z-50"
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.id}
                        to={subItem.href}
                        className={`block px-4 py-3 text-sm transition-colors duration-200 min-h-[44px] flex items-center relative ${
                          isActive(subItem.href)
                            ? 'text-playmatez-gold bg-playmatez-gold/10'
                            : 'text-playmatez-white hover:bg-playmatez-gold/10 hover:text-playmatez-gold'
                        }`}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {getNavLabel(subItem)}
                        {/* Active underline for sub-item */}
                        {isActive(subItem.href) && (
                          <span className="absolute bottom-2 left-4 right-4 h-0.5 bg-playmatez-gold"></span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA & Language Switcher */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/prelaunch"
              className="inline-flex items-center px-6 py-3 bg-playmatez-gold hover:bg-playmatez-gold/80 text-white font-medium rounded-full transition-colors duration-300"
            >
              {tt('navigation.signUp', 'Sign Up')}
            </Link>
            <a
              href="https://demo.playmatez.cc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-playmatez-gold text-playmatez-gold hover:bg-playmatez-gold hover:text-white font-medium rounded-full transition-colors duration-300"
            >
              {tt('navigation.demo', 'Demo 1.0')}
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-playmatez-white hover:text-playmatez-gold transition-colors duration-300"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4" aria-label="Mobile navigation">
            <div className="flex flex-col space-y-2">
              {headerNavigation.map((item) => (
                <div key={item.id} className="border-b border-white/10 last:border-b-0">
                  {isGroup(item) ? (
                    // Accordion for groups
                    <>
                      <button
                        onClick={() => handleMobileToggle(item.id)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-left font-medium transition-all duration-300 min-h-[44px] ${
                          isParentActive(item.subItems)
                            ? 'bg-playmatez-gold text-white rounded-lg'
                            : 'text-playmatez-white hover:bg-playmatez-gold/20 hover:text-playmatez-gold rounded-lg'
                        }`}
                        aria-expanded={expandedMobile === item.id}
                        aria-controls={`mobile-dropdown-${item.id}`}
                      >
                        {getNavLabel(item)}
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            expandedMobile === item.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {expandedMobile === item.id && item.subItems && (
                        <div id={`mobile-dropdown-${item.id}`} className="pl-4 pb-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.id}
                              to={subItem.href}
                              onClick={closeMenu}
                              className={`block px-4 py-3 text-sm transition-colors duration-300 rounded-lg min-h-[44px] flex items-center ${
                                isActive(subItem.href)
                                  ? 'bg-playmatez-gold/20 text-playmatez-gold'
                                  : 'text-playmatez-white hover:bg-playmatez-gold/10 hover:text-playmatez-gold'
                              }`}
                            >
                              {getNavLabel(subItem)}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    // Direct link for single items
                    <Link
                      to={item.href!}
                      onClick={closeMenu}
                      className={`block px-4 py-3 font-medium transition-colors duration-300 rounded-lg min-h-[44px] flex items-center ${
                        isActive(item.href!)
                          ? 'bg-playmatez-gold text-white'
                          : 'text-playmatez-white hover:bg-playmatez-gold/20 hover:text-playmatez-gold'
                      }`}
                    >
                      {getNavLabel(item)}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Language Switcher, Demo, and Sign Up CTA */}
              <div className="pt-4 space-y-3 border-t border-white/10">
                <a
                  href="https://demo.playmatez.cc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 border-2 border-playmatez-gold text-playmatez-gold hover:bg-playmatez-gold hover:text-white font-medium rounded-full transition-colors duration-300 min-h-[44px]"
                  onClick={closeMenu}
                >
                  {tt('navigation.demo', 'Demo 1.0')}
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
                <Link
                  to="/prelaunch"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-playmatez-gold hover:bg-playmatez-gold/80 text-white font-medium rounded-full transition-colors duration-300 min-h-[44px]"
                >
                  {tt('navigation.signUp', 'Sign Up')}
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};