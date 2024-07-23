import {} from 'react'
import TestimonialsTop from '../TestimonialsPageFolder/TestimonialsTop'
import Best from '../TestimonialsPageFolder/Best'
import Splendid from '../TestimonialsPageFolder/Splendid'
import WhoWeAre from '../TestimonialsPageFolder/WhoWeAre'

function Testimonials() {
  return (
    <main>
        <TestimonialsTop />
        <div className='px-5 lg:px-12'>
          <Best />
          <Splendid />
          <WhoWeAre />
        </div>
    </main>
  )
}

export default Testimonials