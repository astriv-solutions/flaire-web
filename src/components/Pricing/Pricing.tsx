import React, { useState, useRef, useLayoutEffect } from 'react';
import PricingColumn from './PricingColumn';

import { influencerTiers, brandTiers } from '@/data/pricing';

const tabs = [
  { key: 'influencers', label: 'For Influencers' },
  { key: 'brands', label: 'For Brands' },
] as const;

type TabKey = (typeof tabs)[number]['key'];

const Pricing: React.FC = () => {
  const [activeSection, setActiveSection] = useState<TabKey>('influencers');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const idx = tabs.findIndex((tab) => tab.key === activeSection);
    const node = tabRefs.current[idx];
    const container = node?.parentElement;
    if (node && container) {
      setHighlightStyle({
        left: node.offsetLeft,
        width: node.offsetWidth,
      });
    }
  }, [activeSection]);

  return (
    <div>
      <div className="flex justify-center mb-8">
        <div className="relative flex bg-gray-100 rounded-full p-1 w-fit shadow-sm">
          {tabs.map((tab, idx) => (
            <button
              key={tab.key}
              ref={(el) => {
                tabRefs.current[idx] = el;
              }}
              className={`relative z-10 py-2 px-6 mx-1 rounded-full font-semibold focus:outline-none transition-colors duration-200
                ${activeSection === tab.key ? 'text-white' : 'text-gray-700'}`}
              onClick={() => setActiveSection(tab.key)}
              aria-pressed={activeSection === tab.key}
              tabIndex={0}
            >
              {tab.label}
            </button>
          ))}
          {/* Animated highlight */}
          <span
            className="absolute top-0 left-0 bg-primary rounded-full shadow transition-all duration-300"
            style={{
              left: highlightStyle.left,
              width: highlightStyle.width,
              height: '100%',
            }}
            aria-hidden="true"
          />
        </div>
      </div>
      {activeSection === 'influencers' && (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {influencerTiers.map((tier, index) => (
              <PricingColumn key={tier.name} tier={tier} highlight={index === 1} />
            ))}
          </div>
        </div>
      )}
      {activeSection === 'brands' && (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {brandTiers.map((tier, index) => (
              <PricingColumn key={tier.name} tier={tier} highlight={index === 1} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;
