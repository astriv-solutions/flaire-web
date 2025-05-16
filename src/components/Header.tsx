'use client';

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import { MdStar, MdAttachMoney, MdPeople } from 'react-icons/md';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';
import Image from 'next/image';

// Define a stricter type for iconMap keys
export type IconKey = 'MdStar' | 'MdAttachMoney' | 'MdPeople';

const iconMap: Record<IconKey, React.ReactNode> = {
  MdStar: <MdStar size={24} />,
  MdAttachMoney: <MdAttachMoney size={24} />,
  MdPeople: <MdPeople size={24} />,
};

const sectionIds = ['features', 'pricing', 'testimonials'];

// Extracted menu items rendering logic
interface HeaderMenuItemsProps {
  isFloating: boolean;
  activeSection: string | null;
  onItemClick?: () => void;
  className?: string;
  ctaText?: string;
  ctaClassName?: string;
}

const HeaderMenuItems: React.FC<HeaderMenuItemsProps> = ({
  isFloating,
  activeSection,
  onItemClick,
  className = '',
  ctaText = 'Download',
  ctaClassName = 'text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors',
}) => (
  <ul className={className}>
    {menuItems.map((item) => {
      const showText = activeSection === item.url.replace('#', '');
      return (
        <li key={item.text} className="relative flex items-center">
          <Link
            href={item.url}
            className={`flex items-center gap-2 text-foreground hover:text-foreground-accent transition-colors px-2 py-1 rounded-full inter font-semibold text-base ${
              showText ? 'bg-primary/10 font-bold' : ''
            }`}
            onClick={onItemClick}
          >
            {isFloating ? (
              <>
                {/* Cast item.icon to IconKey for type safety */}
                {item.icon && iconMap[item.icon as IconKey]}
                <span
                  className={`ml-2 transition-all duration-200 ${
                    showText ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'
                  } inter font-semibold text-base`}
                  style={{ maxWidth: showText ? 120 : 0 }}
                >
                  {item.text}
                </span>
              </>
            ) : (
              <span className="inter font-semibold text-base">{item.text}</span>
            )}
          </Link>
        </li>
      );
    })}
    <li>
      <Link href="#cta" className={ctaClassName} onClick={onItemClick}>
        {ctaText}
      </Link>
    </li>
  </ul>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      const scrollY = window.scrollY;
      if (hero) {
        const heroBottom = hero.offsetTop + hero.offsetHeight;
        setIsFloating(scrollY > heroBottom - 80); // 80px buffer for header height
      }
      // Section in view logic
      let foundSection: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            foundSection = id;
            break;
          }
        }
      }
      setActiveSection(foundSection);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 left-0 right-0 z-50 w-full backdrop-blur-md border-b border-white/30 shadow-sm transition-all duration-300
        ${
          isFloating
            ? 'bg-white/90 shadow-lg pt-2 pb-3 md:py-5 rounded-2xl mx-2 md:mx-auto mt-6 max-w-3xl border border-gray-200'
            : 'bg-white/60 shadow-sm pt-2 pb-2 md:py-3 rounded-none mx-0 mt-0 max-w-full border-none'
        }
      `}
      style={{
        position: 'sticky',
        top: 0,
        transform: isFloating ? 'translateY(15px)' : 'translateY(0)',
        transition: 'all 0.3s cubic-bezier(.4,0,.2,1)',
      }}
    >
      <Container className="!px-0">
        <nav className="mx-auto flex justify-between items-center px-5 bg-transparent">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/Flaire_bird.png"
              alt="Flaire Bird Logo"
              width={isFloating ? 36 : 48}
              height={isFloating ? 36 : 48}
              className="min-w-fit object-contain transition-all duration-300"
              style={{ width: isFloating ? 36 : 48, height: isFloating ? 36 : 48 }}
            />
            <span
              className={`inter font-semibold text-foreground cursor-pointer transition-all duration-300 ${
                isFloating ? 'text-lg' : 'text-xl'
              }`}
            >
              {siteDetails.siteName}
            </span>
          </Link>

          {/* Desktop Menu */}
          <HeaderMenuItems
            isFloating={isFloating}
            activeSection={activeSection}
            className="hidden md:flex space-x-6 items-center"
            ctaText="Download"
            ctaClassName="text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors"
          />

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
              ) : (
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu with Transition */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
          <HeaderMenuItems
            isFloating={isFloating}
            activeSection={activeSection}
            onItemClick={toggleMenu}
            className="flex flex-col space-y-4 pt-1 pb-6 px-6"
            ctaText="Get Started"
            ctaClassName="text-black bg-primary hover:bg-primary-accent px-5 py-2 rounded-full block w-fit"
          />
        </div>
      </Transition>
    </header>
  );
};

export default Header;
