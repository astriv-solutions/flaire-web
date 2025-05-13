import { IFAQ } from '@/types';
import { siteDetails } from './siteDetails';

export const faqs: IFAQ[] = [
  {
    question: `How do I join ${siteDetails.siteName} as an influencer?`,
    answer:
      'Simply download the Flaire app, create a profile with your audience details, and start exploring available brand campaigns.',
  },
  {
    question: `How does payment work after I complete a campaign?`,
    answer:
      'You are paid an initial advance payment. Once your deliverables are approved, the brand releases the full payment, which is securely processed through our verified local banking partners.',
  },
  {
    question: 'Can I negotiate campaign terms or pricing?',
    answer: `Yes. ${siteDetails.siteName} allows both influencers and brands to propose terms and negotiate pricing directly through our built-in chat and offer system.`,
  },
  {
    question: 'What kind of analytics will I have access to?',
    answer:
      'You’ll see campaign performance metrics like reach, engagement, clicks, and more — with deeper insights available on Pro and Enterprise plans.',
  },
  {
    question: 'Can brands contact me outside the platform?',
    answer:
      'While communication is possible off-platform, we strongly recommend using Flaire’s built-in tools for messaging, offers, and payment to ensure transparency, safety, and support.',
  },
];
