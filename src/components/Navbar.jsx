import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className=' text-white'>
        <div className='flex max-w-7xl justify-around mx-auto py-10'>
            <div className='flex justify-center'>
           <img width={35} className='mx-2' src="/logo2.png" alt="logo" />
           <Link href='/' className='text-xl font-bold align-top hover:transition-all hover:text-blue-400 duration-1000 ease-in-out'>ColorBuddy</Link>
            </div>
            <ul className='flex justify-around text-md font-semibold'>
                <Link href='/' className='mx-2 hover:transition-all hover:text-blue-400 duration-1000 ease-in-out'>About</Link>
                <Link href='/' className='mx-2 hover:transition-all hover:text-blue-400 duration-1000 ease-in-out'>Contact</Link>
            </ul>
        </div>
    </nav>
  )
}
