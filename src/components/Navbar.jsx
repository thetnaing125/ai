import React, {useState} from "react";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return(
       <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-emerald-500 "><span className="text-yellow-400">A</span>I<span className="text-yellow-400">A</span></h1>

            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>

            <div onClick={handleNav} className="block md:hidden" >
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                
            </div>

            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#001] ease-in-out duration-500 ' : 'fixed left-[-100%]'}>
            <h1 className="w-full text-3xl font-bold text-emerald-500 m-4"><spam className="text-yellow-400">A</spam>I<span className="text-yellow-400">A</span></h1>
                
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-lime-100">Home</li>
                    <li className="p-4 border-b border-lime-100">Company</li>
                    <li className="p-4 border-b border-lime-100">Resources</li>
                    <li className="p-4 border-b border-lime-100">About</li>
                    <li className="p-4">Contact</li>
                </ul>
            </div>
       </div>
    )
}


export default Navbar;