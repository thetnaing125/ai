import { useEffect } from 'react';
import Typed from 'react-typed';
import ScrollReveal from 'scrollreveal';


const Hero = () => {

useEffect( () =>{
        ScrollReveal().reveal('.rolling-design',{
            origin: 'bottom',
            distance: '40px',
            duration: 1200,
            // reset: true,
            interval: 200,
            scale: 0.9,
            viewFactor: 0.1,
        });
   })
    return(
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
                    <p className="text-[#00df9a] font-bold p-2 uppercase rolling-design">intelligence demonstrated by machines</p>

                    <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 rolling-design">Grow With Data.</h1>
                    {/* Typed JS */}
                    <div className="flex justify-center items-center">
                        <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 rolling-design">Artificial intelligence </p>
                        
                        <Typed className="md:text-5xl sm:text-4xl text-xl font-bold text-lime-500 md:pl-4 pl-2"
                        strings={['HTML','CSS','JS','REACT']}
                        typeSpeed={140} backSpeed={150} 
                        loop/>
                    </div>
                    <p className="md:text-2xl text-lg font-bold text-slate-600 rolling-design">
                        Monitor your data analytics to increase revenue for HTML, CSS, JS, REACT
                    </p>

                    <button className="bg-green-500 w-[200px] rounded-md my-6 mx-auto py-3 text-black font-bold rolling-design">Sign in</button>
            </div>
        </div>
    )
}

export default Hero;