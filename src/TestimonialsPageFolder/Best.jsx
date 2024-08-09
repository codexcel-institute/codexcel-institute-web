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
                <p>
                  Welcome to <span className="gochi text-2xl">Code</span><span className="gochi text-2xl text-[rgba(52,168,83,1)]">Xcel</span> Institute, where passion meets purpose in the world of coding and technology. Founded on the belief that anyone can master the art of coding with the right guidance, we are dedicated to empowering individuals from all walks of life to become proficient, innovative, and confident developers.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Best