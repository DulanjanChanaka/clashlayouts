
import About from '@/components/About'
import Alllist from '@/components/Alllist'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Homepage from '@/components/Homepage'
import Monetag from '@/components/Monetag'
import Navbar from '@/components/Navbar'

import Today from '@/components/Today'



export default function Home() {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <Today/>
      <Alllist/>
      <Contact/>
      <About/>
      <Footer/>
   
    </div>
  )
}
