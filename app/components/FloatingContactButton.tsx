'use client'

import { Phone } from 'lucide-react'

const FloatingContactButton = () => {
  return (
    <a
      href="tel:+393403453659"
      className="fixed bottom-6 right-6 bg-[#d8b74b] text-white p-4 rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-300 z-50"
      aria-label="Chiama la proprietà"
    >
      <Phone size={32} />
    </a>
  )
}

export default FloatingContactButton

