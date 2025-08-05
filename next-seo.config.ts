// next-seo.config.ts
const SITE_URL = 'https://www.jkuatsocialroboticslab.com';
const SITE_NAME = 'JKUAT Social Robotics Lab';
const DEFAULT_TITLE = 'JKUAT Social Robotics Lab';
const DEFAULT_DESCRIPTION = 'Advancing social robotics research, human‑centered design, responsible computing and education in Africa.';

const config ={
  titleTemplate: '%s | JKUAT Social Robotics Lab',
  defaultTitle: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  canonical: SITE_URL,
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: SITE_URL,
    site_name: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    handle: '@JKUAT_Robotics',
    site: '@JKUAT_Robotics',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    { name: 'keywords', content: 'social robotics, human‑robot interaction, JKUAT, responsible computing, Pepper robot, NAO robot, robotics education Kenya' },
    { name: 'author', content: 'JKUAT Social Robotics Lab' },
  ],
};

export default config;
