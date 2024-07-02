import {} from 'react'
import TechSlide from '../components/TechSlide'

function Learn() {
  return (
    <section className='py-7 px-4'>
        <TechSlide />
        <div className="flex items-center">
            <div className="w-1/2">
                <h1 className='text-5xl gochi max-w-[730px]'>LEARN SOFTWARE, PRODUCT DESIGN AND AI SKILLS</h1>
                <p>Learn the data and AI skills you need online at your own pace—from non-coding essentials to data science, AI, and machine learning.</p>
            </div>
        </div>
    </section>
  )
}

export default Learn