import './globals.css'
import { 
  Hanken_Grotesk } from 'next/font/google'

const hkgrotesk = Hanken_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Pear',
  description: 'Get personalized interior design recs using AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={hkgrotesk.className} >{children}</body>
    </html>
  )
}
