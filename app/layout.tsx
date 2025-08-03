import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'نانوایی آرامش - پناهگاه شهری',
  description: 'جایی که نان تازه، هنر و انسانیت در آغوش یکدیگر آرام می‌گیرند',
  keywords: 'نانوایی، نان تازه، شیرینی، نان سوردو، باگت، تهران، آرامش، فرهنگ',
  authors: [{ name: 'نانوایی آرامش' }],
  openGraph: {
    title: 'نانوایی آرامش - پناهگاه شهری',
    description: 'جایی که نان تازه، هنر و انسانیت در آغوش یکدیگر آرام می‌گیرند',
    type: 'website',
    locale: 'fa_IR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-arabic antialiased">
        {children}
      </body>
    </html>
  );
}