import { IPricing } from '@/types';

export const tiers: IPricing[] = [
  {
    name: 'Starter',
    price: 29,
    features: [
      'Limited number of campaigns',
      'Basic campaign search and filtering',
      'Core collaboration tools',
      'Basic analytics dashboards',
      'Profile page with audience insights',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: 99,
    features: [
      'More campaigns per month',
      'Advanced campaigns search',
      'Enhanced collaboration tools',
      'In-depth analytics and reporting',
      'Priority payment processing',
      'Verified creator badge',
      'Email + live chat support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Unlimited campaigns',
      'Unlimited storage',
      '24/7 dedicated support',
      'Content editing & creative support',
      'Advanced security features',
      'Priority onboarding & support',
    ],
  },
];
