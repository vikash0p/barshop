import { Footer, Navbar } from '@/components'
import './globals.css'
import { Inter } from 'next/font/google'
import CartProvider from '@/Redux-toolkit/CartProvider'
import Toastfly from '@/components/Toastfly'
import ReactProvider from '@/ReactQuery/ReactProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BarShop-(non-alchoal_beer)',
  description: 'This application is the barshop of the india estiblished 1980.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#27211d] text-white  `}>
        <ReactProvider>
          <CartProvider>
            <Navbar />
            {children}
            <Toastfly />
            <Footer />
          </CartProvider>
        </ReactProvider>
      </body>
    </html>
  )
}
