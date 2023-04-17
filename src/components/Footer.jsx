import React from "react";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare,

} from "react-icons/fa"

const Footer = () => {
    return(
        <div className="container mx-auto">
            <div className="max-w-[1240x] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
            <div className="rolling-design">
                <h1 className="w-full text-3xl font-bold text-green-400">React.</h1>
                <p className="py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum enim assumenda optio adipisci? Ad quaerat rerum voluptatem totam inventore consequuntur delectus perspiciatis aliquam sed ipsa! Magnam vel praesentium dolorem facere.</p>
                <div className="flex justify-between md:w-{75%} my-6">
                    <FaFacebookSquare size={30} />
                    <FaInstagramSquare size={30} />
                    <FaDribbbleSquare size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                </div>
            </div>
            <div className="lg:col-span-2 flex justify-between">
                <div className="rolling-design">
                    <h1 className="font-medium text-gray-400">Solutions</h1>
                    <ul>
                        <li className="py-2 text-sm">Analytics</li>
                        <li className="py-2 text-sm">Marketing</li>
                        <li className="py-2 text-sm">Commerce</li>
                        <li className="py-2 text-sm">Insights</li>
                    </ul>
                </div>


                <div className="rolling-design">
                    <h1 className="font-medium text-gray-400">Support</h1>
                    <ul>
                        <li className="py-2 text-sm">Pricing</li>
                        <li className="py-2 text-sm">Documentation</li>
                        <li className="py-2 text-sm">Guides</li>
                        <li className="py-2 text-sm">API Status</li>
                    </ul>
                </div>

                <div className="rolling-design">
                    <h1 className="font-medium text-gray-400">Company</h1>
                    <ul>
                        <li className="py-2 text-sm">About</li>
                        <li className="py-2 text-sm">Blog</li>
                        <li className="py-2 text-sm">Jobs</li>
                        <li className="py-2 text-sm">Press</li>
                        <li className="py-2 text-sm">Careers</li>
                    </ul>
                </div>

                <div className="rolling-design">
                    <h1 className="font-medium text-gray-400">Legal</h1>
                    <ul>
                        <li className="py-2 text-sm">Claim</li>
                        <li className="py-2 text-sm">Policy</li>
                        <li className="py-2 text-sm">Team</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer;