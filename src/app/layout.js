import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LEGEND BASES',
  description: 'Play like a Legend ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      
<script async src="https://www.googletagmanager.com/gtag/js?id=G-87VL8427MW"></script>
<script>
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-87VL8427MW');
`}
</script>
        
        
      </head>
      <body className={inter.className}>
        {children}
        
      </body>
    </html>
  )
}
