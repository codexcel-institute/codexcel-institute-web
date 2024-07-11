import {} from 'react'
import img from '../assets/user2.png'


function WhoWeAre() {
  return (
    <section className="flex pb-24 px-12">
        <img src={img} alt="" className='w-7/12' />
        <div className='w-5/12 flex items-center justify-center'>
            <div className="w-10/12 flex flex-col gap-4">
                <p>START YOUR CAREER IN TECH</p>
                <h1 className="gochi text-6xl">WHO WE ARE</h1>
                <p>This is where dreams come to life. With our carefully crafted learning courses we will meet you where you are, and take you to where you want to be in your career.</p>
            </div>
        </div>
    </section>
  )
}

export default WhoWeAre