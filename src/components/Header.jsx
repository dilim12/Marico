

const Header = () => {
    return (
        <>
        <div>
            <div className="text-white  lg:text-8xl font-bold lg:mt-[200px] text-2xl ml-[70px] sm:ml-[265px]">
                <h1 className="lg:ml-10">Own your audience.</h1>
                <h1
            className="lg:text-8xl font-bold leading-tight tracking-tight"
            style={{
              background: "linear-gradient(to right, #FE6783, #FFBF84)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            So you don&apos;t lose them.
          </h1>

            </div>
            <div className="text-white lg:ml-[500px] font-medium lg:mt-[100px]  lg:text-3xl">
                <div className="text-center p-10   lg:w-[620px]">
                    <h3>Turn your audience into email and
                    text message subscribers.</h3>
                </div>
                <div className=" ml-10 lg:ml-2 space-x-6"> 
                            <button className="lg:w-[190px] p-3 lg:ml-[100px] rounded-xl bg-[#326CF9] lg:text-lg lg:h-[55px]">Get Started Now</button>
                            <button className="lg:w-[190px] p-3 rounded-xl lg:h-[55px] border lg:text-xl text-[#707070] border-[#707070]">View A Demo</button>
                        </div>
                <div className="text-white p-4 ml-5  lg:p-8 lg:ml-20 lg:text-lg flex gap-3">
                    <p className="h-[20px] w-[22px] rounded-full bg-green-900  ">
                        <p className=" ml-1  h-[15px] w-[15px] rounded-full bg-green-500"></p>
                    </p>
                    <span className="font-bold">1000+</span>
                    <h4 className="text-[#707070] text-[15px] lg:text-xl">creators have already started</h4>
                </div>

            </div>
        </div>



        <div className="text-white">
            <div className="lg:text-6xl text-2xl ml-10 lg:ml-[400px] mt-[170px]">
                <h1>Why Creators Love Marico</h1>
            </div>
            <div className="lg:flex mt-10 ml-10 lg:ml-[230px] gap-40">
            <div className="pb-8">
                <h1 className="font-bold  text-xl">🙂Reduced Anxiety</h1>
                <p className="text-sm text-[#707070]">Never worry about losing your audience.</p>
            </div>
                    <div className="pb-8">
                    <h1 className="font-bold text-xl">😃Lower Workload</h1>
                <p className="text-sm text-[#707070]">Just share one link. We&apos;ll handle the rest.</p>
                    </div>
                    <div >
                    <h1 className="font-bold text-xl">🤠More Time</h1>
                <p className="text-sm text-[#707070]">Spend less time on marketing tools</p>
                    </div>
            </div>
        </div>
        </>

        
    );
};

export default Header;