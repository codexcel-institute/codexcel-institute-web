const Offer = () => {
    return ( 
        <div className="w-full min-h-[100vh] py-[50px]">
            <h1 className="gochi text-[50px] text-center uppercase">what we offer</h1>
            <div className="w-[70%] h-[80vh] grid grid-cols-3 mx-auto gap-x-2.5 mt-[30px]">
                <div className="flex flex-col justify-between py-[40px] px-[25px] text-[black] hover:text-[white] hover:bg-[black] hover:rounded-xl">
                    <h1 className="text-[30px] gochi font-semibold  hover:text-[white] capitalize">convenient learning</h1>
                    <p className="text-[14px]  hover:text-[white]">Like your business, accurate metrics are serious. Lead your business with confidence. There’s nothing more frustrating than cloudy metrics.</p>
                </div>
                <div className="flex flex-col justify-between py-[60px] px-[25px] text-[black] hover:text-[white] hover:bg-[black] hover:rounded-xl">
                    <h1 className="text-[30px] gochi font-semibold capitalize">comfort</h1>
                    <p className="text-[14px] ">By having your ecommerce and customer data in one central location, you can connect with your audience in a whole new way. Context matters.</p>
                </div>
                <div className="flex flex-col justify-between py-[60px] px-[25px] text-[black] hover:text-[white] hover:bg-[black] hover:rounded-xl">
                    <h1 className="text-[30px] gochi font-semibold capitalize">relaxation</h1>
                    <p className="text-[14px] ">By having your ecommerce and customer data in one central location, you can connect with your audience in a whole new way. Context matters.</p>
                </div>
                <div className="flex flex-col justify-between py-[60px] px-[24px] text-[black] hover:text-[white] hover:bg-[black] hover:rounded-xl">
                    <h1 className="text-[30px] gochi font-semibold capitalize">home</h1>
                    <p className="text-[14px] ">More than just card retries. From abandoned carts to failed payment recovery, understand where your leaky buckets are and how to fix them.</p>
                </div>
                <div className="flex flex-col justify-between py-[60px] px-[25px] text-[black] hover:text-[white] hover:bg-[black] hover:rounded-xl">
                    <h1 className="text-[30px] gochi font-semibold capitalize">rest</h1>
                    <p className="text-[14px] ">Frequently communicating with your audience is half the battle. Learn how your message is being received so you can course correct quickly.</p>
                </div>
                <div className="flex flex-col justify-between py-[60px] px-[25px] text-[black] hover:text-[white] hover:bg-[black] hover:rounded-xl">
                    <h1 className="text-[30px] gochi font-semibold  capitalize">security</h1>
                    <p className="text-[14px] ">Have peace of mind monitoring your most valuable metrics relating to your business. From MRR, refunds, average order value, and more.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Offer;