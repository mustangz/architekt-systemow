import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Architekt Systemów — Budujemy systemy, które zarabiają',
  description: 'Studio automatyzacji i produktów AI. Tworzymy narzędzia, które oszczędzają czas i generują przychód.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0 }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
