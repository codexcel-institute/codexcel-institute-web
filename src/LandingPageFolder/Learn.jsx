import {} from 'react'
import TechSlide from '../components/TechSlide'

function Learn() {
  return (
    <section className='py-7 px-4 lg:min-h-[500px] h-fit'>
        <TechSlide />
        <div className="flex mt-[8%] justify-center text-center">
            <div className="w-9/12 lg:w-1/2">
                <h1 className='text-3xl md:text-4xl xl:text-5xl gochi max-w-[730px]'>LEARN SOFTWARE, PRODUCT DESIGN AND AI SKILLS</h1>
                <p>Learn the data and AI skills you need online at your own pace—from non-coding essentials to data science, AI, and machine learning.</p>
            </div>
        </div>
    </section>
  )
}

export default Learn