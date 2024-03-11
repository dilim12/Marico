import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

export default function App() {
  return (
   <div className="bg-[#000000] lg:w-[1520px] lg:h-[6700px] w-[375px] h-[5000px] ">
    <Nav/>
    <Header/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Footer/>
   </div>
  )
}