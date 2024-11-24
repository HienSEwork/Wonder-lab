import Image from "next/image";
import { FunctionComponent } from "react";
import { FaInstagram, FaLinkedin, FaRegSmile } from "react-icons/fa";

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
    return (
        <footer className="bg-black">
            <div className="mx-auto max-w-[1440px]">
                <div className="p-6">
                    <div className="block md:flex space-x-12 items-center pt-4 md:pt-20">
                        <div className="flex items-center text-white space-x-4 mb-4">
                            <h1 className="text-xl md:text-4xl lg:text-6xl">Let’s get in touch</h1>
                            <FaRegSmile className="h-5 w-5 md:h-12 md:w-12 lg:h-14 lg:w-14" />
                        </div>
                        <div className="hidden md:block">
                            <Image src={'/images/2d-assets/horizontal-arrow.png'} width={130} height={16} alt="arrow" />
                        </div>
                        <button className="text-white text-md md:text-xl lg:text-2xl border rounded-full py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8">
                            Tell us your next big idea
                        </button>
                    </div>
                    <div className="text-gray-300 pb-4 pt-4 md:pb-16 md:pt-8 lg:pb-20 lg:pt-12">
                        <div className="flex space-x-2">
                            <p>Find us on social media:</p>
                            <a className="text-white" href="#">
                                <FaInstagram size={24} />
                            </a>
                            <a className="text-white" href="#">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-gray-300 text-center py-4">
                    Copyright © 2024 Wonder Lab®
                </div>
            </div>
        </footer>
    );
}

export default Footer;