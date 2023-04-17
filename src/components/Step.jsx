import React from "react";

const Step = () => {
    return(
        <div className="bg-slate-600 ">
            <div className="container mx-auto p-16">
                <div className="grid md:grid-cols-4 gap-3">
                    <div className="mb-3">
                        <h1 className="text-yellow-500 font-bold md:font-black text-5xl md:text-4xl rolling-design">40 Million</h1>
                    </div>
                    <div className="mb-3">
                        <h1 className="text-yellow-500 font-bold md:font-black text-5xl md:text-4xl rolling-design">800 Hundred</h1>
                    </div>
                    <div className="mb-3">
                        <h1 className="text-yellow-500 font-bold md:font-black text-5xl md:text-4xl rolling-design">140 Thousand</h1>
                    </div>
                    <div className="mb-3">
                        <h1 className="text-yellow-500 font-bold md:font-black text-5xl md:text-4xl rolling-design">25 Only</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step;