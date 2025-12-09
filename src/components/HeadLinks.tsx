'use client';

import { useEffect } from 'react';

export default function HeadLinks() {
  useEffect(() => {
    // Check if links already exist to avoid duplicates
    if (document.querySelector('link[href*="bootstrap.min.css"]')) {
      return;
    }

    // Add CSS links to head
    const cssFiles = [
      '/Frisk - Creative Agency & Portfolio HTML Template_files/bootstrap.min.css',
      '/Frisk - Creative Agency & Portfolio HTML Template_files/animate.min.css',
      '/Frisk - Creative Agency & Portfolio HTML Template_files/fontawesome-all.min.css',
      '/Frisk - Creative Agency & Portfolio HTML Template_files/aos.css',
      '/Frisk - Creative Agency & Portfolio HTML Template_files/swiper-bundle.min.css',
      '/Frisk - Creative Agency & Portfolio HTML Template_files/default.css',
      '/Frisk - Creative Agency & Portfolio HTML Template_files/style.css',
      '/Frisk - Creative Agency & Portfolio HTML Template_files/responsive.css',
    ];

    cssFiles.forEach((href) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Add marquee animation style
    if (!document.querySelector('style[data-marquee-animation]')) {
      const style = document.createElement('style');
      style.setAttribute('data-marquee-animation', 'true');
      style.textContent = '@keyframes marqueeAnimation-1700650 { 100% {transform:translateX(-2519.5px)}}';
      document.head.appendChild(style);
    }
  }, []);

  return null;
}

