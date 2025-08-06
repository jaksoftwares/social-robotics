'use client';

import { NextSeo } from 'next-seo';

type SeoProps = {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: {
    url?: string;
    title?: string;
    description?: string;
    images?: {
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }[];
    siteName?: string;
  };
  twitter?: {
    handle?: string;
    site?: string;
    cardType?: string;
  };
};

export default function Seo({
  title,
  description,
  canonical,
  openGraph,
  twitter,
}: SeoProps) {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      openGraph={{
        type: 'website',
        ...openGraph,
        title: openGraph?.title || title,
        description: openGraph?.description || description,
      }}
      twitter={{
        handle: twitter?.handle || '@JKUATRobotics',
        site: twitter?.site || '@JKUATRobotics',
        cardType: twitter?.cardType || 'summary_large_image',
      }}
    />
  );
}
