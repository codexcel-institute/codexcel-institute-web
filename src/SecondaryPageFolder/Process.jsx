import {} from 'react';
import Frame from '../assets/Frame7.png'

const Process = () => {
    return ( 
        <div className="process w-full min-h-[70vh] mt-[20px] bg-[#05192D] pt-[35px]">
            <h1 className="gochi uppercase text-[white] font-normal text-[50px] text-center">our process</h1>
            <div className="max-w-[95%] md:max-w-[70%] h-[50vh] mx-auto grid grid-cols-2 gap-2.5">
                <div className="flex flex-row items-center pr-[10px]">
                    <img src={Frame} alt="" className="img w-[25px] h-[25px]" />
                    <span className="span ml-[22px]">
                        <h4 className="learn text-[white] texting font-bold text-[20px]">Learn anywhere</h4>
                        <p className="text-[white] text-[12px] font-normal mt-[15px]">Access our courses online from any device, anytime, anywhere. Flexible learning that fits your lifestyle.</p>
                    </span>
                </div>
                <div className="flex flex-row items-center pr-[10px]">
                    <img src={Frame} alt="" className="img w-[25px] h-[25px]" />
                    <span className="span ml-[22px]">
                        <h4 className="learn text-[white] texting font-bold text-[20px]">Flexible payments</h4>
                        <p className="text-[white] text-[12px] font-normal mt-[15px]">Affordable programs, flexible payment plans, and scholarships make high-quality education accessible to everyone.</p>
                    </span>
                </div>
                <div className="flex flex-row items-center pr-[10px]">
                    <img src={Frame} alt="" className="img w-[25px] h-[25px]" />
                    <span className="span ml-[22px]">
                        <h4 className="learn text-[white] texting font-bold text-[20px]">Learn from the Best</h4>
                        <p className="text-[white] text-[12px] font-normal mt-[15px]">Gain insights from industry leaders and experienced professionals. Learn from the best to become the best.</p>
                    </span>
                </div>
                <div className="flex flex-row items-center pr-[10px]">
                    <img src={Frame} alt="" className="img w-[25px] h-[25px]" />
                    <span className="span ml-[22px]">
                        <h4 className="learn text-[white] texting font-bold text-[20px]">Learn in comfort</h4>
                        <p className="text-[white] text-[12px] font-normal mt-[15px]">Study in your preferred environment with flexible, online courses. Support services are always available.</p>
                    </span>
                </div>
            </div>
        </div>
     );
}
 
export default Process;