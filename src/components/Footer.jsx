import { Link } from "react-scroll";


const Footer = () => {
    return (
        <footer>
            <div className="text-white lg:ml-[450px] font-medium lg:mt-[100px]  lg:text-3xl">
                <div className="text-center p-10  lg:w-[620px]">
                    <img className="w-[100px] ml-28 lg:ml-[200px] pb-10" src="./assets/logo.svg" alt="" />
                    <h3 className="lg:text-6xl text-4xl pb-4 font-semibold">Get Started Now.</h3>
                    <p className="lg:text-2xl">Setup is easy and takes under 5 minutes.</p>
                </div>
                <div className="  space-x-6">
                    <button className="lg:w-[240px] ml-28  p-3 lg:ml-[170px] rounded-xl bg-[#326CF9] lg:text-lg lg:h-[55px]">Get Started Now</button>
                </div>
                <div className="text-white p-4 ml-5  lg:p-8 lg:ml-20 lg:text-lg flex gap-3">
                    <p className="h-[20px] w-[22px] rounded-full bg-green-900  ">
                        <p className=" ml-1  h-[15px] w-[15px] rounded-full bg-green-500"></p>
                    </p>
                    <span className="font-bold">1000+</span>
                    <h4 className="text-[#707070] lg:text-2xl text-[14px]">creators have already started</h4>
                </div>
            </div>


            <div className="md:flex text-white mt-4 lg:mt-10">
                <div className="flex items-center lg:ml-4 lg:mt-2 gap-2 flex-1">
                    <img className="w-8 ml-28 lg:mt-10 lg:ml-40" src="./assets/logo.svg" alt="" />
                    <p className="lg:text-2xl lg:mt-10  font-bold text-[14px]">Marico</p>
                </div>

                <div className=" mt-20 ml-20 ">
                    <p className="absolute md:right-[1220px]   text-[#707070]">info@marico.co</p>
                </div>

                <div className="lg:flex   lg:flex-1 absolute ml-20  xl:left-96 text-[#707070]  xl:ml-[700px] font-normal">
                    <ul className="flex lg:text-[20px] mt-10 lg:mr-4 lg:gap-6 gap-2">
                        <Link spy={true} smooth={true} to="Home">
                            <li className="active:text-blue-600 cursor-pointer">About</li>
                        </Link>
                        <Link spy={true} smooth={true} to="About">
                            <li className="active:text-blue-600 cursor-pointer">Pricing</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Services">
                            <li className="active:text-blue-600 cursor-pointer">Blog</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Services">
                            <li className="active:text-blue-600 cursor-pointer">Sign in</li>
                        </Link>
                    </ul>
                </div>
            </div>

        </footer>
    );
};

export default Footer;