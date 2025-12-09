import type { Metadata } from "next";
import Script from "next/script";
import HeadLinks from "@/components/HeadLinks";
import "./globals.css";

export const metadata: Metadata = {
  title: "RaomTech – Web & App Development Agency",
  description: "RaomTech is a professional agency delivering modern website development, mobile app development, and complete digital solutions."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-js">
      <head>
        <link rel="stylesheet" href="/Frisk - Creative Agency & Portfolio HTML Template_files/bootstrap.min.css" />
        <link rel="stylesheet" href="/Frisk - Creative Agency & Portfolio HTML Template_files/animate.min.css" />
        <link rel="stylesheet" href="/Frisk - Creative Agency & Portfolio HTML Template_files/fontawesome-all.min.css" />
        <link rel="stylesheet" href="/Frisk - Creative Agency & Portfolio HTML Template_files/aos.css" />
        <link rel="stylesheet" href="/Frisk - Creative Agency & Portfolio HTML Template_files/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/Frisk - Creative Agency & Portfolio HTML Template_files/default.css" />
        <link rel="stylesheet" href="/Frisk - Creative Agency & Portfolio HTML Template_files/style.css" />
        <link rel="stylesheet" href="/Frisk - Creative Agency & Portfolio HTML Template_files/responsive.css" />
        <style dangerouslySetInnerHTML={{__html: `@keyframes marqueeAnimation-1700650  { 100%  {transform:translateX(-2519.5px)}}`}} />
      </head>
      <body data-aos-easing="ease" data-aos-duration="1000" data-aos-delay="0">
        <HeadLinks />
        {children}
        <Script src="/Frisk - Creative Agency & Portfolio HTML Template_files/jquery-3.6.0.min.js.download" strategy="beforeInteractive" />
        <Script src="/Frisk - Creative Agency & Portfolio HTML Template_files/bootstrap.min.js.download" strategy="afterInteractive" />
        <Script src="/Frisk - Creative Agency & Portfolio HTML Template_files/swiper-bundle.min.js.download" strategy="afterInteractive" />
        <Script src="/Frisk - Creative Agency & Portfolio HTML Template_files/jquery.marquee.min.js.download" strategy="afterInteractive" />
        <Script src="/Frisk - Creative Agency & Portfolio HTML Template_files/aos.js.download" strategy="afterInteractive" />
        <Script src="/Frisk - Creative Agency & Portfolio HTML Template_files/wow.min.js.download" strategy="afterInteractive" />
        <Script src="/Frisk - Creative Agency & Portfolio HTML Template_files/main.js.download" strategy="afterInteractive" />
      </body>
    </html>
  );
}
