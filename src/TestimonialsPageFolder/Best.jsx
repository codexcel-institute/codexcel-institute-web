import {} from 'react'
import best from '../assets/best.png'

function Best() {
  return (
    <section className="flex py-24 flex-col-reverse gap-y-3 md:flex-row">
        <img src={best} alt="" className='w-full h-72 md:h-auto md:w-7/12' />
        <div className='md:w-5/12 md:flex items-center justify-center'>
            <div className="md:w-10/12 flex flex-col gap-4">
                <p>START YOUR CAREER IN TECH</p>
                <h1 className="gochi text-3xl lg:text-4xl xl:text-6xl">BEST INSTITUTE EVER</h1>
                <p>This is where dreams come to life. With our carefully crafted learning courses we will meet you where you are, and take you to where you want to be in your career.</p>
            </div>
        </div>
    </section>
  )
}

export default Best