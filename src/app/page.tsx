import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div className='flex flex-col gap-3 items-center'>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
      <Link href="/card">Card</Link>
      <Link href="/dashboard">Dashboard</Link>
      <button className='p-2 bg-red-500 rounded'>Logout</button>
     </div>
    </main>
  )
}
