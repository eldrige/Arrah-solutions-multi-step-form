import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import RegisterProvider from "./contexts/register-context";
const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RegisterProvider>
          <main className="bg-[#6B5CDD] py-12 px-32">
            <div className="flex row items-center text-white justify-between mb-10">
              <h3 className='text-[#6B5CDD]'>Contact us</h3>
              <h1 className="text-3xl cursor-pointer font-semibold">Create New Account</h1>
              <h3 className="text-lg cursor-pointer font-semibold">Contact us</h3>
            </div>
            {children}
          </main>
        </RegisterProvider>
      </body>
    </html>
  )
}
