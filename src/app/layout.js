import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ColorBuddy',
  description: "ColorBuddy - Your Ultimate Color Conversion Companion Elevate your design and development game with ColorBuddy, the all-in-one solution for designers and developers. Seamlessly convert hex and RGB colors to Tailwind CSS styles with a single click. Say goodbye to color-related headaches and hello to efficiency. ColorBuddy simplifies your workflow, making colors a breeze. Unleash your creativity and take control of your projects like never before.",
  keywords: [
    "Color Conversion",
    "Hex to RGB",
    "RGB to Hex",
    "Tailwind CSS Colors",
    "Color Picker Tool",
    "Color Conversion Tool",
    "Designer's Color Tool",
    "Developer's Color Utility",
    "Web Design Colors",
    "CSS Color Converter",
    "Hexadecimal Color Codes",
    "RGB Color Codes",
    "Color Code Generator",
    "Color Palette Tool",
    "Color Scheme Generator",
    "Color Management",
    "Digital Color Tools",
    "Design and Development Colors",
    "CSS Framework Colors",
    "Color Conversion App"
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <div className='max-w-[100rem] mx-auto bg-gray-900'>
        <Navbar/>
        {children}
        </div>
        </body>
    </html>
  )
}
