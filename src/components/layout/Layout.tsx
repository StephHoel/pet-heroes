import { createContext, useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { CACHE_KEY } from '@/constants/cache'
import { getSheet } from '@/services/getSheet'
import type { PetsContext as PetsContextType } from '@/types/petsContext'
import type { PetsProps } from '@/types/petsProps'
import { Footer } from './Footer'
import { Header } from './Header'

const PetsContext = createContext<PetsContextType>({
  pets: [],
  loading: true,
})

export function Layout() {
  const [pets, setPets] = useState<PetsProps[]>([])
  const [loading, setLoading] = useState(true)
  const cached = localStorage.getItem(CACHE_KEY)

  if (cached) {
    const { value, expiry } = JSON.parse(cached)

    if (Date.now() < expiry) {
      setPets(value)
      setLoading(false)
      return
    }
    localStorage.removeItem(CACHE_KEY)
  }

  useEffect(() => {
    getSheet()
      .then((fetched) => {
        setPets(fetched.sort((a, b) => a.name.localeCompare(b.name)))
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className='flex min-h-screen max-w-screen flex-col bg-gray-950 text-white'>
      <Header />

      <main className='grow w-10/12 mx-auto'>
        <PetsContext.Provider value={{ pets, loading }}>
          <Outlet />
        </PetsContext.Provider>
      </main>

      <Footer />
    </div>
  )
}


export const usePets = () => useContext(PetsContext)