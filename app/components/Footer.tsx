import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-brand-text mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Fondaco dei Longobardi</h3>
            <p>Un'esperienza unica nel cuore di Trani, dove storia e comfort si incontrano.</p>
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Link utili</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-brand-primary transition-colors">Home</Link></li>
              <li><Link href="/appartamento" className="hover:text-brand-primary transition-colors">Appartamento</Link></li>
              <li><Link href="/storia" className="hover:text-brand-primary transition-colors">La nostra Storia</Link></li>
              <li><Link href="/faq" className="hover:text-brand-primary transition-colors">FAQ</Link></li>
              <li><Link href="/contatti" className="hover:text-brand-primary transition-colors">Contatti/Prenota</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Seguici</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-primary transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-brand-primary transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-brand-primary transition-colors"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-300 text-center">
          <p>&copy; {new Date().getFullYear()} Fondaco dei Longobardi. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

