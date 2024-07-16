import {} from 'react'

const Offer = () => {
    return (  
        <div className="w-full min-h-[100vh] py-[50px]">
            <h1 className="offer gochi text-[50px] text-center uppercase">what we offer</h1>
            <div className="grids w-[95%] md:w-[70%] min-h-[80vh] grid grid-cols-3 grid-rows-[260px] md:grid-rows-[250px] mx-auto gap-x-2.5 mt-[30px]">
                <div className="flex flex-col justify-between py-[60px] md:py-[40px] px-[10px] md:px-[25px] text-[black] hover:text-[white] hover:bg-[black] hover:rounded-xl">
                    <h1 className="text-[25px] md:text-[30px] gochi font-semibold  hover:text-[white] capitalize">convenient learning</h1>
                    <p className="text-[12px] md:text-[14px]  hover:text-[white]">Our flexible online classes and user-friendly platform fit seamlessly into your schedule, allowing you to learn anytime, anywhere.</p>
                </div>
                <div className="flex flex-col justify-between py-[60px] px-[10px] md:px-[25px] text-[black] hover:text-[white] hover:bg-[black] hover:rounded-xl">
                    <h1 className="text-[25px] md:text-[30px] gochi font-semibold capitalize">comfort</h1>
                    <p className="text-[12px] md:text-[14px] ">Enjoy a comfortable learning experience with intuitive interfaces and dedicated support to keep you focused and motivated.</p>
                </div>
                <div className="flex flex-col justify-between py-[60px] px-[10px] md:px-[25px] text-[black] hover:text-[white] hover:bg-[black] hover:rounded-xl">
                    <h1 className="text-[25px] md:text-[30px] gochi font-semibold capitalize">relaxation</h1>
                    <p className="text-[12px] md:text-[14px] ">Balance study and relaxation with built-in break times and stress-relief tips, promoting a healthy study-life balance.</p>
                </div>
                <div className="flex flex-col justify-between py-[50px] px-[10px] md:px-[24px] text-[black] hover:text-[white] hover:bg-[black] hover:rounded-xl">
                    <h1 className="text-[25px] md:text-[30px] gochi font-semibold capitalize">home</h1>
                    <p className="text-[12px] md:text-[14px] ">Turn your home into a classroom with our online programs, offering the convenience of learning in your own space.</p>
                </div>
                <div className="flex flex-col justify-between py-[50px] px-[10px] md:px-[25px] text-[black] hover:text-[white] hover:bg-[black] hover:rounded-xl">
                    <h1 className="text-[25px] md:text-[30px] gochi font-semibold capitalize">rest</h1>
                    <p className="text-[12px] md:text-[14px] ">Prioritize rest with flexible learning schedules that accommodate your needs, ensuring you stay refreshed and ready to learn.</p>
                </div>
                <div className="flex flex-col justify-between py-[50px] px-[10px] md:px-[25px] text-[black] hover:text-[white] hover:bg-[black] hover:rounded-xl">
                    <h1 className="text-[25px] md:text-[30px] gochi font-semibold  capitalize">security</h1>
                    <p className="text-[12px] md:text-[14px] ">Learn with confidence knowing our secure platform protects your data and privacy, allowing you to focus on your studies without worry.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Offer;