import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  return (
    <div className='flex min-h-screen max-w-full flex-col bg-gray-950 text-white'>
      <Header />

      <main className='grow px-4 py-6 mx-auto lg:max-w-3/4 2xl:max-w-2/4'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
