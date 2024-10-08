import {} from 'react';
import TechSlide from "../components/TechSlide";
import Career from "../assets/career.png";

const Tech = () => {
    return ( 
        <div className='w-full min-h-[100vh] flex flex-col justify-between py-[50px]'>
            <TechSlide />
            <div className="tech w-full md:min-h-[71.2vh] min-h-[100vh] flex flex-col md:flex-row justify-between px-[50px] md:px-[100px] md:mt-[0] mt-[50px]">
                <img src={Career} alt=""  className='h-[450px]'/>

                <div className="w-[100%] md:w-[40%] flex flex-col justify-center items-start md:mt-[0] mt-[25px]">
                    <h5 className="texting text-[16px] uppercase font-normal tracking-[1px]">start your career in tech</h5>
                    <h1 className="tech-text text-[60px] gochi uppercase">who we are</h1>
                    <div className="w-full h-[25vh]">
                        <p className="text-[14px] mt-[15px]">
                            This is where dreams come to life. With our carefully crafted learning courses we will meet you where you are, and take you to where you want to be in your career.
                        </p>
                        <p className="text-[14px] mt-[15px]">
                            This is where dreams come to life. With our carefully crafted learning courses we will meet you where you are, and take you to where you want to be in your career.
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Tech;