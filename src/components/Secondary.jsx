import {} from 'react'
import grass from '../assets/grass.png'

function Secondary() {
  return (
    <section className='relative min-h-[500px] h-fit text-white flex flex-col justify-center pl-6'>
        <img src={grass} alt="" className='absolute left-0 top-0 h-full w-full z-[-1] brightness-50 object-cover'/>

        <h1 className='text-6xl gochi max-w-[730px]'>Codexcel for secondary school curriculum</h1>
        <p className='max-w-[570px] mb-3'>Learn the data and AI skills you need online at your own pace—from non-coding essentials to data science, AI, and machine learning.</p>
        <button className="rounded-[100px] bg-[rgba(0,255,68,1)] w-[217px] h-[79px] hover:scale-110 text-3xl">Learn more</button>
    </section>
  )
}

export default Secondary