import {} from 'react'

function Offers() {
  return (
    <section className="flex min-h-[860px] items-center">
        <div className="w-1/2 h-full flex justify-center items-center px-4 ">
            <div className="max-w-[520px]">
                <h1 className='text-7xl gochi leading-[70px] mb-4'>WHAT WE OFFER</h1>
                <p className='mb-7'>This is where dreams come to life. With our carefully crafted learning courses we will meet you where you are, and take you to where you want to be in your career.</p>
                <p>Enrolling in any course with our institute will provide you with access to our lifetime mentorship program, CV building services, and career advancement opportunities.</p>
            </div>
        </div>
        <div className="w-1/2 h-full bg-[#05192D] text-white flex items-center justify-center">
          <ul className="relative w-10/12 flex flex-col gap-16 py-10">
            <div className="absolute left-[22px] top-[90px] w-1 h-[75%] bg-[rgba(0,255,68,0.2)]"></div>
            <li className="flex items-center gap-5">
              <div className='min-w-11 h-11 bg-[#00FF44]'></div>
              <div>
                <h1 className="text-4xl mb-2">Learn anywhere</h1>
                <p>Why go to a lecture hall when you can learn from home, by the beach, at the recording studio or at your shop?</p>
              </div>
            </li>
            <li className="flex items-center gap-5">
              <div className='min-w-11 h-11 bg-[#00FF44]'></div>
              <div>
                <h1 className="text-4xl mb-2">Learn from the Best</h1>
                <p>At <span className='gochi text-2xl ml-1'>code</span><span className='text-[#00FF44] gochi text-2xl mr-1'>xcel</span>, we pride ourselves on having a team of instructors who are exceptionally experienced and highly knowledgeable in their respective fields. Their expertise and dedication ensure that you receive the highest quality education and mentorship available.</p>
              </div>
            </li>
            <li className="flex items-center gap-5">
              <div className='min-w-11 h-11 bg-[#00FF44]'></div>
              <div>
                <h1 className="text-4xl">Life Time Mentorship</h1>
                <p>Enrolling in any course with our institute will provide you with access to our lifetime mentorship program, CV building services, and career advancement opportunities.</p>
              </div>
            </li>
            <li className="flex items-center gap-5">
              <div className='min-w-11 h-11 bg-[#00FF44]'></div>
              <div>
                <h1 className="text-4xl">Updated and Diligently Researched Curriculum</h1>
                <p>Our curriculum is meticulously researched and designed to align with the latest trends and advancements in the field. We continually update our course content to ensure it remains relevant and cutting-edge, providing our students with the most current knowledge and skills needed to excel in their chosen field.</p>
              </div>
            </li>
          </ul>
        </div>
    </section>
  )
}

export default Offers