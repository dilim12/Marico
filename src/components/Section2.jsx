

const Section2 = () => {
    return (
      <section className="text-white mt-40  lg:mt-28">
        <div className="text-center">
                    <p className="text-[#3D82F2] pb-6 text-xl">STEP2</p>
                    <h1 className="lg:text-5xl text-2xl pb-6 font-semibold">Share Your Homepage</h1>
                    <h3 className="lg:text-xl text-[10px] text-[#707070]">Share your Wavium homepage link with your followers, and<br/>
we&apos;ll handle the rest.</h3>
                   
                </div>

                <div className="lg:flex space-x-5 ">
                    <div className="bg-[#0D0D0D]  ml-5 w-[340px] h-[300px] lg:ml-14 lg:mt-40 mt-20 lg:w-[692px] lg:h-[506px]">
                        <p className="text-[#0FC65C]  p-10">One Link</p>
                        <h1 className="text-[#919191] font-semibold lg:mb-5 lg:text-5xl ml-10">ALL You Create.</h1>
                        <span className="lg:text-5xl ml-10 lg:ml-10 font-semibold ">One Link</span>
                        <img className="lg:ml-[105px]   ml- lg:mt-8 mt-6" src="./assets/Mobile.svg" alt="" />

                    </div>
                    <div className="bg-[#0D0D0D] ml-5 w-[340px] h-[300px]  lg:mt-40 mt-20 lg:w-[692px] lg:h-[506px]">
                        <p className="text-[#0FC65C] p-10">Collect Subscribers</p>
                        <h1 className="text-[#919191] text-4xl ml-10 lg:mb-5 mt-10 lg:text-5xl font-semibold">Emails.<br/>Phone #s.</h1>
                        <span className="lg:text-5xl font-semibold ml-10">All Yours.</span>

                    </div>
                </div>
                <button className="lg:w-[190px] lg:ml-[650px] ml-[100px] mt-10 w-[160px] text-sm p-3  rounded-xl bg-[#326CF9] lg:text-lg lg:h-[55px]">Get Started Now</button>
      </section>
    );
};

export default Section2;