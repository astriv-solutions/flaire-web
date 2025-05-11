import {
  FiBarChart2,
  FiBriefcase,
  FiDollarSign,
  FiLock,
  FiPieChart,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUser,
} from 'react-icons/fi';

import { IBenefit } from '@/types';

export const benefits: IBenefit[] = [
  {
    title: 'Campaign Marketplace',
    description:
      'Discover brand campaigns tailored to your audience, apply with a click, and manage your collaborations seamlessly. All in one powerful package.',
    bullets: [
      {
        title: 'Intelligent Categorization',
        description:
          'Find campaigns that match your niche, audience, and platform for higher engagement and better results.',
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: 'One-Click Applications',
        description:
          'Apply to brand campaigns quickly with a streamlined application process — no DMs or emails needed.',
        icon: <FiTarget size={26} />,
      },
      {
        title: 'Campaign Management Dashboard',
        description:
          'Keep track of deadlines, deliverables, and approval status with a centralized dashboard designed for creators.',
        icon: <FiTrendingUp size={26} />,
      },
    ],
    imageSrc: '/images/mockup-1.webp',
  },
  {
    title: 'Realtime Analytics',
    description:
      'Track your campaign impact with real-time insights, showcase your results, and strengthen your brand partnerships effortlessly.',
    bullets: [
      {
        title: 'Live Campaign Insights',
        description:
          'See how your content is performing in real-time — impressions, engagement, and reach, all in one view.',
        icon: <FiDollarSign size={26} />,
      },
      {
        title: 'Performance History',
        description:
          'Track your past campaign results to understand growth trends and improve future collaborations.',
        icon: <FiBriefcase size={26} />,
      },
      {
        title: 'Shareable Reports',
        description:
          'Generate clean, exportable performance summaries to share with brands and boost your credibility.',
        icon: <FiPieChart size={26} />,
      },
    ],
    imageSrc: '/images/mockup-2.webp',
  },
  {
    title: 'Secure Payments',
    description:
      'Receive payments quickly and securely through verified bank partnerships, ensuring you get paid on time for every collaboration.',
    bullets: [
      {
        title: 'Verified Bank Transfers',
        description:
          'Receive payments directly to your bank account through trusted local banking partners.',
        icon: <FiLock size={26} />,
      },
      {
        title: 'On-Time Payment Tracking',
        description:
          'Track payment progress for each campaign and get notified when funds are released.',
        icon: <FiUser size={26} />,
      },
      {
        title: 'Transparent Transaction History',
        description:
          'View a clear, itemized record of all your earnings and payouts — no guesswork, no delays.',
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: '/images/mockup-1.webp',
  },
];
