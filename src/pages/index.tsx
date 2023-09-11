import { Inter } from 'next/font/google'
import { Prism } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='w-screen h-screen'>
      <Prism/>
    </main>
  )
}
