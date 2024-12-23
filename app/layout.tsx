import './globals.css'
import { Playfair_Display, Raleway } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingContactButton from './components/FloatingContactButton'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})
const raleway = Raleway({ 
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata = {
  title: 'Fondaco dei Longobardi - Elegante B&B a Trani',
  description: 'Scopri il lusso e la storia nel cuore di Trani. Fondaco dei Longobardi, un\'esperienza unica nel centro storico.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${playfair.variable} ${raleway.variable}`}>
      <body className="flex flex-col min-h-screen font-sans text-brand-text bg-brand-accent">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingContactButton />
      </body>
    </html>
  )
}

