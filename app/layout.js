import { Inter } from 'next/font/google'
import './ui/globals.css'
// import { Footer } from "../app/ui/dashboard/footer"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin Dashboard By Roshan Sharma' ,
  description: 'Next.js Admin Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {/* <Footer/> */}
    </html>
  )
}
