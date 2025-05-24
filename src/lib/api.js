const API = process.env.NEXT_PUBLIC_API_URL
if (!API) throw new Error('NEXT_PUBLIC_API_URL manquant')

export async function postReservation(data) {
  const res = await fetch(`${API}/api/reservations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (!res.ok) throw new Error(`API ${res.status}`)
  return res.json()
}

export async function getReservations() {
  const res = await fetch(`${API}/api/reservations`)
  if (!res.ok) throw new Error(`API ${res.status}`)
  return res.json()
}

export async function deleteReservation(id) {
  const res = await fetch(`${API}/api/reservations/${id}`, {
    method: 'DELETE'
  })
  if (!res.ok) throw new Error(`API ${res.status}`)
  return res.json()
} 