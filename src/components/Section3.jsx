const Section3 = () => {
    return (
        <section className="text-white mt-8 lg:mt-40">
        <div>
          <div className="text-center">
            <p className="text-[#3D82F2] pb-6 text-xl">STEP3</p>
            <h1 className="text-2xl lg:text-5xl pb-6 font-semibold">Send Emails & Text Messages</h1>
            <h3 className="text-[10px] lg:text-xl text-[#707070] ml-5 lg:ml-0">No more going through a social platform. Reach and engage<br/>
your audience directly over email and text massage.</h3>
          </div>
  
          <div className="flex flex-col lg:ml-52 lg:flex-row lg:w-full lg:max-w-screen-lg mx-auto">
            <div className="lg:ml-4 lg:w-1/2 ml-0 mt-8 lg:mt-40">
              <p className="pb-8  ml-20 lg:ml-0">Create & Share</p>
              <h1 className="text-2xl ml-20 lg:ml-0 lg:text-5xl  pb-10">Reach Your<br/> Audience <span className="text-[#3D82F2]">Directly.</span></h1>
              <div className="flex pb-4 ml-8   lg:ml-0     gap-2">
                <p className="bg-[#2D2D2D]  lg:w-7 lg:h-6 w-5 h-5 text-center rounded-full">1</p>
                <h1 className="text-[10px] lg:text-[15px]">Embed content or create something new to share.</h1>
              </div>
              <div className="flex pb-10 ml-8   lg:ml-0 gap-2">
                <p className="bg-[#2D2D2D]  lg:w-7 lg:h-6 w-5 h-5 text-center rounded-full">2</p>
                <h1 className="text-[10px] lg:text-[15px]">Share content over email, text message or your homepage.</h1>
              </div>
              <div className="flex text-[10px]  ml-8 lg:ml-0  space-x-2 lg:space-x-6">
                <button className="w-[150px]   lg:w-60 p-3 rounded-xl bg-[#326CF9]  lg:text-xl lg:h-12">Get Started Now</button>
                <button className="w-[150px] lg:w-60 p-3 rounded-xl lg:h-12 border lg:text-xl text-[#707070] border-[#707070]">View A Demo</button>
              </div>
            </div>
  
            <div className=" mr-6     mt-8 lg:mr-0 lg:mt-0">
              <img className="lg:ml-[290px] mt-8  lg:h-[700px]" src="/public/Screen (1).svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    );
};

export default Section3;
