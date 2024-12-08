"use client"

import Marquee from "@/components/Core/Marquee";
import Model3D from "@/components/Core/Model3D";
import CircleWithArrow from "@/components/UI/CircleWithArrow";
import EllipseWithStar from "@/components/UI/EllipseWithStar";
import Star from "@/components/UI/Star";
import StarFlower from "@/components/UI/StarFlower";
import { founders } from "@/constants/about-us";
import { model3dObjects } from "@/constants/common";
import Image from "next/image";
import Link from "next/link";
import { Slide, Fade } from "react-awesome-reveal";

export default function AboutUs() {
    return (
        <>
            <section className="relative p-6 mx-0">
                <div className="my-2  md:mt-[88px] lg:my-8">
                    <CircleWithArrow content="about-us" />
                </div>
                <div className="flex mt-4">
                    <div>
                        <Slide direction="up" triggerOnce>
                            <h1 className="w-[125px] md:w-[350px] lg:w-[450px] text-2xl md:text-[68px] md:leading-[84px]">About us</h1>
                            <Star stroke />
                        </Slide>
                    </div>
                    <div className="w-full right-2 leading-small">
                        <Slide direction="up" triggerOnce delay={0}>
                            <Fade triggerOnce>
                                <p className="mb-8 text-md md:text-xl leading-8">Welcome to Wonder Lab, a pioneering XR design studio where we transform dreams into captivating XR experiences. </p>
                            </Fade>
                        </Slide>
                        <Slide direction="up" triggerOnce delay={300}>
                            <Fade triggerOnce delay={300}>
                                <p className="mb-8 text-md md:text-xl leading-8">Founded on a passion for innovation and a boundless imagination, Wonder Lab stands at the forefront of the XR revolution. We specialize in creating mesmerizing augmented reality (AR) and mixed reality (MR) applications and games that not only entertain but also enrich lives. Our team of visionary designers, developers, and storytellers is dedicated to pushing the boundaries of what&#39;s possible, crafting experiences that are as engaging as they are enlightening. </p>
                            </Fade>
                        </Slide>
                        <Slide direction="up" triggerOnce delay={600}>
                            <Fade triggerOnce delay={600}>
                                <p className="mb-8 text-md md:text-xl leading-8">Our approach is holistic and hands-on. From the initial spark of an idea to the final deployment of the experience, every step is guided by our commitment to excellence and our desire to exceed expectations. We&#39;re not just building apps and games; we&#39;re creating gateways to new worlds—places where imagination is the only limit.</p>
                            </Fade>
                        </Slide>
                        <Slide direction="up" triggerOnce delay={900}>
                            <Fade triggerOnce delay={900}>
                                <p className="mb-8 text-md md:text-xl leading-8"> At Wonder Lab, we&#39;re more than just a design studio; we&#39;re a community of dreamers, thinkers, and makers united by a common goal: to weave digital magic into the fabric of everyday life. Join us as we explore the wonders of XR, designing experiences that dazzle, inspire, and transform. Discover the extraordinary with Wonder Lab, where wonders never cease and every dream is within reach.</p>
                            </Fade>
                        </Slide>
                    </div>
                </div>
                <div className="h-[90px] md:h-[200px] w-full mx-0 px-0 mb-0">
                    <div className="absolute left-0 w-[120px] h-[150px] md:w-[450px] md:h-[450px] md:bottom-0 top-[62%] lg:h-[600px] lg:w-[550px] lg:top-[64%]">
                        <Slide direction="left" triggerOnce>
                            <EllipseWithStar side="left" />
                        </Slide>
                    </div>
                    <Slide direction="right" triggerOnce>
                        <div className="absolute right-[-136px] w-[500px] mt-[-30px] h-[150px] md:w-[800px] md:h-[300px] lg:mr-[-300px] lg:mt-[-80px]">
                            <Model3D modelPath={model3dObjects.wave} color="#DAD3BE"/> {/*Make this around-self*/}
                        </div>
                    </Slide>
                </div>
            </section>

            <section className="relative mb-4 mt-0 md:my-16 mx-0 lg:mt-0 ">
                <Marquee speed={120} className='h-[32px] md:h-[64px]' autoFill>
                    <div className="flex">
                        <span className="text-xl md:text-5xl uppercase">MEET THE FOUNDERS</span>
                        <StarFlower className="mx-2" />
                    </div>
                </Marquee>
                <div className="absolute w-[270px] h-[270px] ml-[-80px] mt-[-40px] md:w-[250px] md:h-[450px] lg:left-[70px] left-0 top-0 p-4">
                    <Model3D modelPath={model3dObjects.star} color="#B7B597" spin />
                </div>
                <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-12">
                    {founders.map((item, key) => (
                        <div className="flex flex-col justify-center left-0 mx-6 mt-[-40px] mb-[20px] md:mx-12 my-4 md:my-0" key={key}>
                            <div className="rounded-t-[180px] w-[208px] h-[256x] md:w-[400px] md:h-[512px] overflow-hidden">
                                <Image src={item.imageURL} width={400} height={512} alt="case-study" />
                            </div>
                            <div className="font-bold text-md md:text-2xl mt-2 md:mt-4 md:mb-2">{item.name}</div>
                            <div className="text-sm md:text-xl md:mt-4 md:mb-2">{item.role}</div>
                            <Link href={item.url}>
                                <span className="inline-flex items-center text-sm underline">Learn more<img src="/images/2d-assets/right-up.png" alt="arrow icon" className="bg-transparent w-4 h-4 ml-0"/></span>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="absolute ml-[240px] top-[650px] w-[270px] h-[270px] md:w-[200px] md:h-[350px] lg:left-[70%] lg:right-0 lg:top-[550px] p-4">
                    <Model3D modelPath={model3dObjects.star2} color="#B7B597" spin />
                </div>
            </section>  
        </>
    )
}