import { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'

export default function BookingForm({ selectedDate, onSubmit }) {
  const { t } = useTranslation('common')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    notes: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await onSubmit({ ...formData, date: selectedDate })
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        notes: ''
      })
    } catch (error) {
      console.error('Erreur lors de la réservation:', error)
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gold mb-2">Nom</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-noir/50 border border-gold/20 rounded p-2 text-marble focus:border-gold/40 outline-none"
        />
      </div>
      
      <div>
        <label className="block text-gold mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-noir/50 border border-gold/20 rounded p-2 text-marble focus:border-gold/40 outline-none"
        />
      </div>
      
      <div>
        <label className="block text-gold mb-2">Téléphone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full bg-noir/50 border border-gold/20 rounded p-2 text-marble focus:border-gold/40 outline-none"
        />
      </div>
      
      <div>
        <label className="block text-gold mb-2">Service</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full bg-noir/50 border border-gold/20 rounded p-2 text-marble focus:border-gold/40 outline-none"
        >
          <option value="">Sélectionnez un service</option>
          <option value="manucure">Manucure</option>
          <option value="pedicure">Pédicure</option>
          <option value="nailart">Nail Art</option>
          <option value="gel">Gel</option>
          <option value="soin">Soin des mains</option>
        </select>
      </div>
      
      <div>
        <label className="block text-gold mb-2">Notes</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className="w-full bg-noir/50 border border-gold/20 rounded p-2 text-marble focus:border-gold/40 outline-none"
          rows="3"
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-gold text-noir py-2 rounded hover:bg-gold/80 transition-colors"
      >
        {t('hero.cta')}
      </button>
    </form>
  )
} 