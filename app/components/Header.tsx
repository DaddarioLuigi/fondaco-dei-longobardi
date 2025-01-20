'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/appartamento', label: 'Appartamento' },
    { href: '/storia', label: 'La nostra Storia' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contatti', label: 'Contatti/Prenota' },
  ]

  return (
    <header className="bg-[#d8b74b] text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/fondaco_logo.png"
              alt="Fondaco dei Longobardi"
              width={75}
              height={75}
              className="w-auto"
            />
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-brand-secondary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <ul className="flex flex-col items-center py-4">
            {menuItems.map((item) => (
              <li key={item.href} className="py-2">
                <Link href={item.href} className="hover:text-brand-secondary transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  )
}

export default Header

