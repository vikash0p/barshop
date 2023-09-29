import { Footer,Navbar } from '@/components'
import './globals.css'
import { Inter } from 'next/font/google'
import CartProvider from '@/Redux-toolkit/CartProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Barshop',
  description: 'This application is the barshop of the india estiblished 1980.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#27211d] text-white  `}>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>

    </html>
  )
}
