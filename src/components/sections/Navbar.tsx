'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, useBooking } from '@/components/ui';
import { navLinks, siteConfig } from '@/lib/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { openBookingModal } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm transition-all duration-200 ${
        hasScrolled ? 'border-b border-neutral-200' : ''
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between lg:h-20">
          {/* Brand */}
          <a
            href="#"
            className="flex items-center gap-2 text-xl font-semibold text-neutral-900 lg:text-2xl"
          >
            <svg
              className="h-8 w-8 lg:h-10 lg:w-10"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer circle */}
              <circle cx="50" cy="50" r="48" stroke="#171717" strokeWidth="2" fill="none" />
              {/* Inner circle with black fill */}
              <circle cx="50" cy="50" r="42" fill="#171717" />
              {/* White triangle pointing up */}
              <polygon points="50,22 75,70 25,70" fill="white" />
            </svg>
            {siteConfig.name}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={openBookingModal}
            className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            style={{ backgroundColor: '#171717', color: '#ffffff' }}
          >
            Free Audit
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 bg-neutral-900"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-6 bg-neutral-900"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 bg-neutral-900"
              />
            </div>
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 lg:hidden"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Container className="flex h-full flex-col py-8">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    style={{ 
                      color: '#ffffff',
                      backgroundColor: '#000000',
                      padding: '12px 20px',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      marginBottom: '8px',
                      display: 'block',
                      fontSize: '20px',
                      fontWeight: '500',
                      textDecoration: 'none'
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8"
              >
                <button
                  onClick={() => {
                    closeMenu();
                    openBookingModal();
                  }}
                  style={{ 
                    width: '100%',
                    borderRadius: '9999px',
                    padding: '16px 24px',
                    fontSize: '16px',
                    fontWeight: '600',
                    textAlign: 'center',
                    backgroundColor: '#000000', 
                    color: '#ffffff',
                    border: '2px solid #ffffff',
                    cursor: 'pointer',
                  }}
                >
                  Book a Call
                </button>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
