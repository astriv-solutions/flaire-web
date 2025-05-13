import { IMenuItem, ISocials } from '@/types';

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  subheading: "Empowering Sri Lanka's creators and brands to grow together.",
  quickLinks: [
    {
      text: 'Features',
      url: '#features',
    },
    {
      text: 'Pricing',
      url: '#pricing',
    },
    {
      text: 'Testimonials',
      url: '#testimonials',
    },
  ],
  email: 'flaire@astrivsolutions.com',
  telephone: '+94 777 677 211',
  socials: {
    x: 'https://twitter.com/x',
    facebook: 'https://facebook.com',
    youtube: 'https://www.youtube.com/@flaireapp',
    linkedin: 'https://www.linkedin.com/company/astriv-solutions',
    instagram: 'https://www.instagram.com/flaireapp.co/',
    tiktok: 'https://www.tiktok.com/@flaireapp.co',
    reddit: 'https://www.reddit.com/user/flaire_app/',
  },
};
