'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Map } from 'lucide-react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const mapContainerStyle = {
  width: '100%',
  height: '400px'
}

const center = {
  lat: 41.278355,
  lng: 16.419434
}


const places = [
  { name: 'Valle d’Itria', distance: '120km', lat: 40.748523, lng: 17.400737 },
  { name: 'Castel del Monte', distance: '32km', lat: 41.084036, lng: 16.269952 },
  { name: 'Bari', distance: '50km', lat: 41.117143, lng: 16.871871 },
  { name: 'Alberobello', distance: '100km', lat: 40.784991, lng: 17.237533 },
  { name: 'Matera', distance: '90km', lat: 40.667978, lng: 16.601236 }
]

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    messaggio: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    alert('Grazie per averci contattato! Ti risponderemo al più presto.')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-serif font-bold mb-6 text-brand-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contatti e Prenotazioni
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Informazioni di contatto */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-serif font-semibold mb-4 text-brand-secondary">Dove siamo</h2>
          <p className="mb-4">
            Arrivare al Fondaco dei Longobardi è semplice. Se venite in auto, ci troviamo a pochi minuti dall'uscita dell'autostrada A14...
          </p>
          <div className="space-y-4 mb-6">
            <div className="flex items-center">
              <Mail className="text-brand-secondary mr-2" />
              <span>fondacodeilongobardi@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="text-brand-secondary mr-2" />
              <span>+39 3403453659</span>
            </div>
            <div className="flex items-center">
              <MapPin className="text-brand-secondary mr-2" />
              <span>Via Statuti Marittimi, 24, 76125 Trani (BT)</span>
            </div>
          </div>
          <LoadScript googleMapsApiKey="AIzaSyBXysI6GkMZDYN741YnEg2S2KbuUbja5SI">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </motion.div>
        
        {/* Form di contatto */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-serif font-semibold mb-4 text-brand-secondary">Invia un messaggio</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nome" className="block mb-2 font-semibold">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-secondary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-secondary"
              />
            </div>
            <div>
              <label htmlFor="messaggio" className="block mb-2 font-semibold">Messaggio</label>
              <textarea
                id="messaggio"
                name="messaggio"
                value={formData.messaggio}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                rows={4}
              ></textarea>
            </div>
            <button type="submit" className="bg-[#d8b74b] text-white px-6 py-2 rounded-md hover:bg-opacity-80 transition-colors flex items-center justify-center">
              <Send className="mr-2" />
              Invia messaggio
            </button>
          </form>
        </motion.div>
      </div>

      {/* Sezione Luoghi da visitare */}
      <motion.div
        className="mt-12 bg-white p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-serif font-semibold mb-4 text-brand-secondary">Luoghi da visitare nei dintorni</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {places.map((place, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-4 border rounded-lg shadow-sm flex items-center space-x-4"
            >
              <Map className="text-brand-secondary" />
              <div>
                <p className="font-semibold">{place.name}</p>
                <p className="text-sm text-gray-600">Distanza: {place.distance}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-6">
          <LoadScript googleMapsApiKey="AIzaSyBXysI6GkMZDYN741YnEg2S2KbuUbja5SI">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={8}
            >
              {places.map((place, index) => (
                <Marker key={index} position={{ lat: place.lat, lng: place.lng }} />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>
      </motion.div>
    </div>
  )
}