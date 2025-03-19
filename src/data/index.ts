import { Service, WhyChooseUsItem, ContactInfo } from '../types';

export const services: Service[] = [
  {
    id: 1,
    title: 'Visa & Immigration Services',
    description: 'Expert guidance through visa applications and immigration processes with personalized support.',
    icon: 'Passport',
    link: '/services/visa',
  },
  {
    id: 2,
    title: 'Work & Residence Permits',
    description: 'Streamlined permit acquisition services for seamless transition to work and live in Kenya.',
    icon: 'Building',
    link: '/services/work-permits',
  },
  {
    id: 3,
    title: 'Investment & Business Setup',
    description: 'Comprehensive support for establishing and growing your business ventures in Kenya.',
    icon: 'Briefcase',
    link: '/services/business-setup',
  },
  {
    id: 4,
    title: 'Destination Travel & Car Hire',
    description: 'Tailored travel experiences and reliable transportation solutions throughout Kenya.',
    icon: 'Car',
    link: '/services/travel',
  },
];

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    id: 1,
    title: 'Expert Team',
    description: 'Our experienced professionals ensure smooth and efficient service delivery.',
    icon: 'Users',
  },
  {
    id: 2,
    title: 'Fast Processing',
    description: 'Quick turnaround times with our streamlined procedures.',
    icon: 'Timer',
  },
  {
    id: 3,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your queries and concerns.',
    icon: 'HeadSet',
  },
];

export const contactInfo: ContactInfo = {
  name: 'Eric Kiptoo Ngetich',
  title: 'CEO',
  address: 'Rosslyn Square Luxury Mall, Redhill Link Road, Nairobi',
  email: 'CEO@ceking.co.ke',
  phone: '+254 729 715 326',
  workingHours: 'Monday - Friday: 8:00 AM - 6:00 PM',
};