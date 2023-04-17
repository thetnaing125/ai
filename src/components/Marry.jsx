import React from "react";


import Panda from "../video/robot.mp4";

const Marry = () => {
    return(
        <div className="h-auto bg-slate-900">
          <div className="container mx-auto">
                <div className="grid md:grid-cols-3 gap-5">
                <div className="px-4 md:px-5 p-10 rolling-design">
                    <video className="w-96 rounded-xl mb-5" src={Panda} muted autoPlay loop type="video.mp4"></video>
                    <p className="text-2xl text-white font-bold mb-5">Artificial Intelligence</p>
                    <h1 className="text-white mb-5 max-w-sm">Reactive machines are AI systems that have no memory and are task specific</h1>
                    <button className="bg-red-600 px-10 py-2 rounded-xl text-white font-bold">Export More</button>
                </div>


                <div className="px-4 md:px-5 p-10 rolling-design">
                    <video className="w-96 rounded-xl mb-5" src={Panda} muted autoPlay loop type="video.mp4"></video>
                    <p className="text-2xl text-white font-bold mb-5">Artificial Intelligence</p>
                    <h1 className="text-white mb-5 max-w-sm">Reactive machines are AI systems that have no memory and are task specific</h1>
                    <button className="bg-red-600 px-10 py-2 rounded-xl text-white font-bold">Export More</button>
                </div>


                <div className="px-4 md:px-5 p-10 rolling-design">
                    <video className="w-96 rounded-xl mb-5" src={Panda} muted autoPlay loop type="video.mp4"></video>
                    <p className="text-2xl text-white font-bold mb-5">Artificial Intelligence</p>
                    <h1 className="text-white mb-5 max-w-sm">Reactive machines are AI systems that have no memory and are task specific</h1>
                    <button className="bg-red-600 px-10 py-2 rounded-xl text-white font-bold">Export More</button>
                </div>
                
                </div>
          </div>
        </div>
    )
}

export default Marry;