import {} from 'react'
import splendid from '../assets/splendid.png'

function Splendid() {
  return (
    <section className="flex pb-24 flex-col gap-y-3 md:flex-row">
        <div className='md:w-5/12 md:flex items-center justify-center'>
            <div className="md:w-10/12 flex flex-col gap-4">
                <p>DECIDE ON A COURSE</p>
                <h1 className="gochi text-3xl lg:text-4xl xl:text-6xl">SPLENDID COURSES</h1>
                <p>This is where dreams come to life. With our carefully crafted learning courses we will meet you where you are, and take you to where you want to be in your career.</p>
            </div>
        </div>
        <img src={splendid} alt="" className='w-full h-72 md:h-auto md:w-7/12' />
    </section>
  )
}

export default Splendid