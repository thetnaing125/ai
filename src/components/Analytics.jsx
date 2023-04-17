import React from "react";
import Services from "../assets/laptop.jpg";



const Analytics = () => {
    return(
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[350px] mx-auto my-4 rounded-md rolling-design" src={Services} alt="/"/>
                <div className="flex flex-col justify-center">
                    <p className="text-green-500 font-bold rolling-design">DATA ANALYTICS DASHBOARD</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 rolling-design">Manage Data Analytics Centrally</h1>
                    <p className="text-slate-600 rolling-design">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto fugit impedit ea doloremque, cumque itaque reprehenderit laudantium amet nostrum asperiores commodi mollitia, aliquam voluptate perspiciatis eveniet ex qui nulla reiciendis.
                    </p>
                    <button className="bg-black w-[200px] rounded-md my-6 mx-auto md:mx-0 py-3 text-white font-bold rolling-design">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics;