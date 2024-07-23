import {} from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function Top() {
  const { "0" : text} = useTypewriter({
    words: ['SOFTWARE ENGINEER', 'PRODUCT DESIGNER', 'DATA ANALYST'],
    loop: {},
    typeSpeed: 140,
    deleteSpeed: 100
  }) 
  return (
    <section className="flex bg-[rgba(5,25,45,1)] text-white items-center flex-col gap-4 min-h-[calc(70svh-80px)] lg:min-h-[calc(100svh-80px)] h-fit py-6 px-5 text-center">
        <p className='text-lg mb-6'>START YOUR CAREER IN TECH</p>
        <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl gochi xl:leading-[70px]'>
            <span>BECOME A </span>
            <span className='bg-[rgba(52,168,83,0.1)] text-[rgba(0,255,68,1)] px-3'>{text}<Cursor /></span>
            
        </h1>
        <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl gochi'>IN 6 MONTHS</h1>
        <p className='max-w-[715px] text-center mb-3'>CodeXcel is an immersive software engineering experience that produces industry-ready software engineers within 6 months.</p>
        <button className="rounded-[100px] bg-[rgba(0,255,68,1)] w-[174px] h-[52px] hover:scale-110">APPLY NOW</button>
    </section>
  )
}

export default Top