import { heroImg } from "../assets" 

const Hero = () => {
  return (
    <div className='w-full bg-slate-200 py-24'>
       <dir className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px] px-4 md:px-0">
        <dir className="flex flex-col justify-start gap-3">
            <p className="py-4 text-2xl uppercase text-[#20B486] font-medium">start to success</p>
            <h1 className="md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold">Access to <span className="text-[#20B486]">5000+</span> Courses from <span className="text-[#20B486]">300</span> instructors & institutions</h1>
            <p className="py-2 text-lg text-gray-800">various versions have evolved over the year, sometimes by accident</p>
        </dir>
        <img src={heroImg} className="md:order-last order-first"/>
       </dir>
    </div>
  )
}

export default Hero