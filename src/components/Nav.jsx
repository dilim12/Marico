import { useState } from "react";
import { Link } from "react-scroll"
import {FaTimes} from 'react-icons/fa'
import { IoMdMenu } from "react-icons/io";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick =()=>setClick(!click)
  
  const content = <>
    <div className="lg:hidden block absolute top-[100px] w-full left-0 right-0  bg-black transition">
      <ul className="text-center text-xl p-20">
      <Link spy={true} smooth={true} to="/" >
        <select className="bg-black outline-none  my-4 py-4 border-b border-slaye-800 hover:text-blue-600  cursor-pointer  hover:rounded">
                    <option >Use Cases</option>
                    <option >Use Cases</option>
                    <option>Use Cases</option>   
                </select>

        </Link>
        <Link spy={true} smooth={true}  to="/">
          <li className="my-4 py-4 border-b border-slaye-800 active:text-blue-600  cursor-pointer  hover:rounded">About</li>
        </Link>
        <Link spy={true} smooth={true}  to="/">
          <li className="my-4 py-4 border-b border-slaye-800 active:text-blue-600  cursor-pointer  hover:rounded">Pricing</li>
        </Link>
        <Link  spy={true} smooth={true} to="/">
          <li className="my-4 py-4 border-b border-slaye-800 active:text-blue-600  cursor-pointer  hover:rounded">Blog</li>
        </Link>
      </ul>
    </div>
  </>
  return (
    <nav>
      <div className=" h-10vh flex justify-between  z-50 text-white lg:py-5 px-10 py-4  ">
        <div className="flex items-center lg:ml-10 mt-2  lg:mt-8 lg:gap-5 gap-2 flex-1">
            <img className=" lg:ml-10 " src="./assets/logo.svg" alt="" />
          <span className="lg:text-3xl font-bold   text-lg">Marico</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden ">
          <div className="flex-10 mt-7 mr-[100px]">
            <ul className="flex text-[#707070] gap-8 mr-16 text-[18px]">
                <select className="bg-black outline-none">
                    <option >Use Cases</option>
                    <option >Use Cases</option>
                    <option>Use Cases</option>   
                </select>
               <Link spy={true} smooth={true} to="/">
                <li className="active:text-blue-600  cursor-pointer">About</li>
              </Link>
              <Link spy={true} smooth={true} to="/">
                <li className="active:text-blue-600  cursor-pointer">Pricing</li>
              </Link>
              <Link spy={true} smooth={true} to="/">
                <li className="active:text-blue-600  cursor-pointer">Blog</li>
              </Link>
            </ul>
          </div>
        </div>
        <div >
          {click && content}
        </div>
       

    
       <div className="flex lg:gap-10  lg:mr-10    mt-2.5  gap-3">
                <h3 className="text-[#707070]  lg:mt-6 mt-9 font-bold ml-[120px]">Login</h3>
                <button className="bg-[#306EF7] lg:w-[119px] lg:h-[55px] lg:mt-2 rounded-lg w-[70px] h-[40px] mt-7">Sign Up</button>
            </div>
            <button className="block sm:hidden transtion  mb-20    text-2xl"  onClick={handleClick}>
          {click ? <FaTimes/> : <IoMdMenu/>}
        </button>
      </div>
    </nav>
  )
}

export default Nav