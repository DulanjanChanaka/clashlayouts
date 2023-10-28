
import About from '@/components/About'
import Allayout from '@/components/Alllayout'
import Alllist from '@/components/Alllist'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Homepage from '@/components/Homepage'
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
