import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'LEGEND BASES',
  description: 'Play like a Legend',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script src="https://alwingulla.com/88/tag.min.js" data-zone="19580" async data-cfasync="false"></script>
      </head>
      <body className={inter.className}>
        {children}

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-87VL8427MW"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-87VL8427MW');
            `,
          }}
        />
      </body>
    </html>
  );
}
