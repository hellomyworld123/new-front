'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import ServiceCard from '@/components/ServiceCard'
import BookingForm from '@/components/BookingForm'
import AppointmentCalendar from '@/components/AppointmentCalendar'
import useTranslation from 'next-translate/useTranslation'
import { postReservation } from '@/lib/api'

export default function Home() {
  const { t } = useTranslation('common')
  const [selectedDate, setSelectedDate] = useState(null)

  const services = [
    {
      type: 'manucure',
      title: t('service.manucure.title'),
      description: t('service.manucure.desc')
    },
    {
      type: 'pedicure',
      title: t('service.pedicure.title'),
      description: t('service.pedicure.desc')
    },
    {
      type: 'nailart',
      title: t('service.nailart.title'),
      description: t('service.nailart.desc')
    },
    {
      type: 'gel',
      title: t('service.gel.title'),
      description: t('service.gel.desc')
    },
    {
      type: 'soin',
      title: t('service.soin.title'),
      description: t('service.soin.desc')
    }
  ]

  const handleBooking = async (data) => {
    try {
      await postReservation(data)
      alert('Réservation confirmée !')
    } catch (error) {
      alert('Erreur lors de la réservation')
    }
  }

  return (
    <main className="min-h-screen bg-noir">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-marble">
        <div className="absolute inset-0 bg-noir/50" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gold mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-marble mb-8">
            {t('hero.subtitle')}
          </p>
          <button
            onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gold text-noir px-8 py-3 rounded-full hover:bg-gold/80 transition-colors"
          >
            {t('hero.cta')}
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gold text-center mb-12">
            {t('services.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 px-4 bg-marble">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gold text-center mb-12">
            {t('booking.title')}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AppointmentCalendar onSelect={setSelectedDate} />
            {selectedDate && (
              <BookingForm
                selectedDate={selectedDate}
                onSubmit={handleBooking}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  )
} 