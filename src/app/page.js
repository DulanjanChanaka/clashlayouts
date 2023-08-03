
import Allayout from '@/components/Alllayout'
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
      <Allayout/>
      <Footer/>
   
    </div>
  )
}
