import {} from 'react'
import splendid from '../assets/splendid.png'

function Splendid() {
  return (
    <section className="flex pb-24 flex-col gap-y-3 md:flex-row">
        <div className='md:w-5/12 md:flex items-center justify-center'>
            <div className="md:w-10/12 flex flex-col gap-4">
                <p>DECIDE ON A COURSE</p>
                <h1 className="gochi text-3xl lg:text-4xl xl:text-6xl">SPLENDID COURSES</h1>
                <p>At <span className="gochi text-2xl">Code</span><span className="gochi text-2xl text-[rgba(52,168,83,1)]">Xcel</span>, we believe in a hands-on, project-based approach to learning. Our curriculum is designed to equip you with not just the technical skills, but also the problem-solving mindset that is crucial in today’s fast-evolving tech landscape. From web development to data science, from beginner courses to advanced programming, we offer a wide range of programs tailored to meet the needs of aspiring coders at every stage of their journey.
                </p>
            </div>
        </div>
        <img src={splendid} alt="" className='w-full h-72 md:h-auto md:w-7/12' />
    </section>
  )
}

export default Splendid