import { IPricing } from '@/types';

export const tiers: IPricing[] = [
  {
    name: 'Starter',
    price: 29,
    features: ['Basic cloud integration', 'Up to 5 team members', '20GB storage', 'Email support'],
  },
  {
    name: 'Pro',
    price: 99,
    features: [
      'Advanced cloud integration',
      'Up to 20 team members',
      '100GB storage',
      'Priority email & phone support',
      'Advanced analytics',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Full cloud integration',
      'Unlimited team members',
      'Unlimited storage',
      '24/7 dedicated support',
      'Custom solutions',
      'On-site training',
    ],
  },
];

export const influencerTiers: IPricing[] = [
  {
    name: 'Influencer Starter',
    price: 19,
    features: ['Access to brand deals', 'Basic analytics', 'Up to 3 campaigns', 'Email support'],
  },
  {
    name: 'Influencer Pro',
    price: 59,
    features: [
      'Priority access to top brands',
      'Advanced analytics',
      'Unlimited campaigns',
      'Priority support',
    ],
  },
  {
    name: 'Influencer Elite',
    price: 'Custom',
    features: [
      'Dedicated account manager',
      'Custom campaign opportunities',
      'Exclusive events',
      '24/7 support',
    ],
  },
];

export const brandTiers: IPricing[] = [
  {
    name: 'Brand Starter',
    price: 49,
    features: ['Post up to 5 campaigns', 'Basic influencer search', 'Email support'],
  },
  {
    name: 'Brand Pro',
    price: 149,
    features: [
      'Unlimited campaigns',
      'Advanced influencer analytics',
      'Priority support',
      'Brand insights',
    ],
  },
  {
    name: 'Brand Enterprise',
    price: 'Custom',
    features: [
      'Dedicated campaign strategist',
      'Custom integrations',
      'Team collaboration tools',
      '24/7 support',
    ],
  },
];
