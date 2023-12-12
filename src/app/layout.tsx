import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import AuthProvider from '@/components/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Paul's Store",
  description: 'A store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className="bg-white min-h-[calc(100vh)]">
        <AuthProvider>
          <Navbar/>
            {children}
          <Footer/>  
        </AuthProvider>
      </body>
      
    </html>
  )
}
