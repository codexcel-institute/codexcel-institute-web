import {} from 'react'
import img from '../assets/user2.png'


function WhoWeAre() {
  return (
    <section className="flex pb-24 flex-col-reverse gap-y-3 md:flex-row">
        <img src={img} alt="" className='w-full h-72 md:h-auto md:w-7/12' />
        <div className='md:w-5/12 md:flex items-center justify-center'>
            <div className="md:w-10/12 flex flex-col gap-4">
                <p>GET TO KNOW US</p>
                <h1 className="gochi text-3xl lg:text-4xl xl:text-6xl">WHO WE ARE</h1>
                
                <p>At <span className="gochi text-2xl">Code</span><span className="gochi text-2xl text-[rgba(52,168,83,1)]">Xcel</span> Institute, we understand that every learner is unique. That's why our programs are flexible, tailored, and supportive, ensuring that you can learn at your own pace, in your own way. Whether you're looking to start a new career, advance in your current role, or simply explore a new passion, we're here to help you succeed.</p>

                <p>At <span className="gochi text-2xl">Code</span><span className="gochi text-2xl text-[rgba(52,168,83,1)]">Xcel</span> Institute, we are more than a coding institue. We are a community. Join us at <span className="gochi text-2xl">Code</span><span className="gochi text-2xl text-[rgba(52,168,83,1)]">Xcel</span> and become part of a vibrant community of learners, mentors, and industry experts. Together, we'll build the future, one line of code at a time.</p>
            </div>
        </div>
    </section>
  )
}

export default WhoWeAre