import React from "react";

const Newletter = () => {
    return(
        <div className="w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-4">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 rolling-design">Want tips & ticks to optimize your flow?</h1>
                    <p className="text-slate-300 rolling-design">Sign up to your newsletter and stay up to date.</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input className="p-3 flex w-full rounded-md text-black shadow-2xl rolling-design" type="email" placeholder="Enter Email" />
                        <button className="bg-green-500 w-[200px] rounded-md ml-4 my-6 mx-auto py-3 text-black font-bold rolling-design">Notify Me</button>  
                    </div>
                    <p className="rolling-design">We care bout the protection of your data. Read our <span className="text-green-500 rolling-design">Privacy Policy.</span></p>
                </div>
                
            </div>
        </div>
    ) 
}

export default Newletter;