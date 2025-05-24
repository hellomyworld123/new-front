'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import { getReservations, deleteReservation } from '@/lib/api'

export default function Admin() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [reservations, setReservations] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    if (isAuthenticated) {
      loadReservations()
    }
  }, [isAuthenticated])

  const loadReservations = async () => {
    try {
      const data = await getReservations()
      setReservations(data)
    } catch (error) {
      setError('Erreur lors du chargement des réservations')
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASS) {
      setIsAuthenticated(true)
    } else {
      setError('Mot de passe incorrect')
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Voulez-vous vraiment supprimer cette réservation ?')) {
      try {
        await deleteReservation(id)
        setReservations(prev => prev.filter(r => r.id !== id))
      } catch (error) {
        setError('Erreur lors de la suppression')
      }
    }
  }

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-noir">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-md mx-auto bg-noir/50 backdrop-blur-sm p-8 rounded-lg">
            <h1 className="text-3xl font-bold text-gold mb-8">Admin</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-gold mb-2">Mot de passe</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-noir/50 border border-gold/20 rounded p-2 text-marble focus:border-gold/40 outline-none"
                  required
                />
              </div>
              {error && <p className="text-rose">{error}</p>}
              <button
                type="submit"
                className="w-full bg-gold text-noir py-2 rounded hover:bg-gold/80 transition-colors"
              >
                Connexion
              </button>
            </form>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-noir">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <div className="bg-noir/50 backdrop-blur-sm p-8 rounded-lg">
          <h1 className="text-3xl font-bold text-gold mb-8">Réservations</h1>
          {error && <p className="text-rose mb-4">{error}</p>}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-gold border-b border-gold/20">
                  <th className="text-left p-4">Date</th>
                  <th className="text-left p-4">Nom</th>
                  <th className="text-left p-4">Service</th>
                  <th className="text-left p-4">Contact</th>
                  <th className="text-left p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((reservation) => (
                  <tr key={reservation.id} className="border-b border-gold/10">
                    <td className="p-4 text-marble">
                      {new Date(reservation.date).toLocaleString()}
                    </td>
                    <td className="p-4 text-marble">{reservation.name}</td>
                    <td className="p-4 text-marble">{reservation.service}</td>
                    <td className="p-4 text-marble">
                      {reservation.email}<br />
                      {reservation.phone}
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => handleDelete(reservation.id)}
                        className="text-rose hover:text-rose/80 transition-colors"
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
} 