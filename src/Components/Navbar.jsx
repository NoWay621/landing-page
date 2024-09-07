import { useState } from "react";
import { logo, lock, hamburgerMenu, close  } from "../assets";

const Navbar = () => {
  const [ toggle, setToggle ] = useState(false);
  const handleClick = () => setToggle (!toggle);
  return (
    <div className="w-full h-24 bg-slate-100 sticky top-0 z-0[1000]">
        <div className="md:max-w-[1480px] max:w-[680px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
          <img src={logo} className="h-6 cursor-pointer"/>
          <div className="hidden md:flex items-center">
            <ul className="flex gap-4">
                <li>Home</li>
                <li>About</li>
                <li>Support</li>
                <li>Platform</li>
                <li>pricing</li>
            </ul>
          </div>

          <div className="hidden md:flex">
             <button className="flex justify-between items-center bg-transparent px-6 gap-2">
                <img src={lock} />
                Login
             </button>
             <button className="px-8 py-4 bg-[#208466] rounded-md text-white font-bold">sing Up For Free</button>
          </div>
          <div className="md:hidden" onClick={handleClick}>
            <img src={ toggle ? close: hamburgerMenu} />
          </div>


          <div className={toggle ? 'absolute top-0 z-10 p-4 bg-slate-300 w-full px-8 md:hidden border-b': 'hidden'}>
            <ul>
              <li className="p-4 hover:bg-slate-600">Home</li>
              <li className="p-4 hover:bg-slate-100">About</li>
              <li className="p-4 hover:bg-slate-100">Support</li>
              <li className="p-4 hover:bg-slate-100">Platform</li>
              <li className="p-4 hover:bg-slate-100">Pricing</li>
              <div className="flex flex-col my-4 gap-3">
              <button className="border border-[#288486] flex justify-between items-center bg-transparent px-8 gap-0 py-4">
                <img src={lock} />
                Login
             </button>
             <button className="px-8 py-5 rounded-md bg-black text-white font-bold">Sing Up For Free</button>
              </div>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar