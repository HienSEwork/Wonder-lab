"use client"

import Marquee from "@/components/Core/Marquee";
import Model3D from "@/components/Core/Model3D";
import CircleWithArrow from "@/components/UI/CircleWithArrow";
import EllipseWithStar from "@/components/UI/EllipseWithStar";
import SmallBanner from "@/components/UI/SmallBanner";
import Star from "@/components/UI/Star";
import StarFlower from "@/components/UI/StarFlower";
import { model3dObjects } from "@/constants/common";
import { whatMakesUsUniqueContent, caseStudyItems, ourServiceItems } from "@/constants/home";
import Image from "next/image";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";

export default function Home() {
  return (
    <>
      {/* Main hero section */}
      <section className="relative p-6">
        <div className="mx-auto max-w-[1440px]">
          <div className="pt-8 pb-8 md:pt-[144px] md:pb-[52px] lg:pt-[192px] lg:pb-[52px]">
          <div className="relative">
            <Slide direction="up" triggerOnce delay={300}>
              <h1 className="text-2xl md:text-[68px] md:leading-[84px] ml-2 lg:text-7xl lg:ml-12">
                Designing Wonders,<br />
                Unleashing Dreams
              </h1>
            </Slide>
          </div>
              <div className="mt-10 md:mt-[88px] sm:mt-[40px] lg:ml-12 ">
                <CircleWithArrow content="our-missions" />
              </div>
          </div>
          <div id="works" className="max-w-5xl mx-auto">
            <div className="py-6 md:py-16 border-t border-t-black border-b border-b-black">
              <Slide direction="up" triggerOnce>
                <Fade triggerOnce>
                  <h2 className="mb-4 text-lg md:text-2xl font-medium">Our mission</h2>
                </Fade>
              </Slide>
              <Slide direction="up" triggerOnce delay={300}>
                <Fade triggerOnce delay={300}>
                  <p className="text-md md:text-lg">Our studio specializes in crafting immersive AR and Mixed Reality apps and games,
                    each a unique journey beyond the bounds of imagination.
                    Beyond our own creations, we empower clients to bring their visionary XR experiences to life,
                    offering a full spectrum of services from strategic product planning to design and development.
                  </p>
                </Fade>
              </Slide>
            </div>
          </div>
        </div>

          <div className="absolute w-[250px] right-0 mt-36 h-[200px] pr-0 mb-2 sm:pt-24 md:w-[420px] md:h-[420px] lg:w-[650px] lg:top-[-80px] lg:h-[600px] lg:right-8 top-[5%] md:top-[19%] ">
            <Model3D modelPath={model3dObjects.cloud} color="#dcdcdc" />
          </div>
          <div className="absolute right-0 top-[30%] md:top-[40%]">
            <Slide direction="right" triggerOnce>
              <EllipseWithStar side="right" />
            </Slide>
          </div>
      </section>

      {/* Case study section */}
      <section className="my-8 md:my-32">
        <Marquee speed={60} className='h-[32px] md:h-[64px]' autoFill>
          <div className="flex">
            <span className="text-xl md:text-5xl uppercase">Case Study</span>
            <StarFlower className="mx-2" />
          </div>
        </Marquee>
        <Marquee speed={60} className="h-[325px] md:h-[576px]" pauseOnHover>
          {caseStudyItems.map((item, key) => (
            <div className="mx-4 md:mx-8" key={key}>
              <div className="rounded-[180px] w-[142px] h-[198px] md:w-[320px] md:h-[442px] overflow-hidden">
                <Image src={item.imageURL} width={320} height={442} alt="case-study" />
              </div>
              <div className="font-bold text-md md:text-3xl">{item.title}</div>
              <Link href={item.url} >
                <span className="inline-flex text-sm underline items-center">View case study<img src="/images/2d-assets/right-up.png" alt="arrow icon" className="bg-transparent w-4 h-4 ml-0"/></span> {/* miss arrow symboy */}
              </Link>
            </div>
          ))}
        </Marquee>
      </section>

      {/* What make us unique section*/}
      <section className="mt-8 md:mt-32 relative ">
        <div className="max-w-5xl mx-4 flex justify-center items-center lg:mx-auto">
          <div className="hidden md:block absolute md:w-[400px] md:h-[400px] md:top-[-180px] md:left-[-100px]">
            <Model3D modelPath={model3dObjects.w} toScale={[3, 3, 3]} color="#dcdcdc" spin /> {/*Make this around-self*/}
          </div>
          <div className="absolute top-[-150px] md:top-[-225px] right-0">
            <Slide direction="right" triggerOnce>
              <SmallBanner side="right" />
            </Slide>
          </div>

          <div className="border-t border-b py-8 md:py-16 md:px-12 lg:px-12 border-t-black border-b-black ">
            <h1 className="relative flex items-center mb-10 text-2xl md:text-5xl">
              <div className="hidden md:block absolute left-[-50px]">
                <Star stroke />
              </div>
              <span>What makes us unique</span>
            </h1>
            {whatMakesUsUniqueContent.map((item, key) => (
              <Slide direction="up" triggerOnce delay={key * 300} key={key}>
                <Fade delay={key * 300} triggerOnce>
                  <div className="mb-4 md:mb-8" key={key}>
                    <h2 className="font-semibold text-xl md:text-2xl mb-2 md:mb-3">{item.title}</h2>
                    <p className="text:md md:text-xl">{item.content}</p>
                  </div>
                </Fade>
              </Slide>
            ))}
          </div>
        </div>

        <div className="absolute left-0 bottom-[-150px] md:bottom-[-225px]">
          <Slide direction="left" triggerOnce>
            <SmallBanner side="left" />
          </Slide>
        </div>
        <div className="hidden md:block absolute md:w-[400px] md:h-[400px] md:bottom-[-230px] md:right-[-60px] lg:right-[-80px]">
          <Model3D modelPath={model3dObjects.n} toScale={[3, 3, 3]} color="#dcdcdc" spin /> {/*Make this around-self*/}
        </div>
      </section>

      {/* Our services */}
      <section id="services" className="mt-20 mb-8 sm:mt-14 md:mt-18 md:mb-32">
        <div className=" px-0 mx-4">
          <div className="flex justify-end md:pr-12 mt-[-36px] sm:mt-[-20px] mb-5 mr-5">
            <CircleWithArrow content="our-services" />
          </div>
          <div className="mt-0 mb-12 md:mt-8 md:mb-24">
            <Marquee speed={60} className='h-[32px] md:h-[64px]' direction="right" autoFill>
              <div className="flex">
                <span className="text-xl md:text-5xl uppercase">Our Services</span>
                <StarFlower className="mx-2" />
              </div>
            </Marquee>
          </div>
          <div className="mx-auto max-w-[1108px]">
            <Slide direction="up" triggerOnce>
              <Fade triggerOnce>
                <p className="text-md sm:mx-8 md:text-xl text-black-600 mb-16">At Wonder Lab, we offers a comprehensive suite of services tailored to bring your XR visions to life, from 3D modeling to game/app development.
                  Our team excels in user research and UI/UX design, ensuring your project not only looks stunning but also delivers an intuitive and engaging experience.
                  Let us transform your ideas into immersive realities.
                </p>
              </Fade>
            </Slide>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:mx-8">
              {ourServiceItems.map((item, key) => (
                <Slide direction="up" triggerOnce delay={key * 300} key={key}>
                  <Fade delay={key * 300} triggerOnce>
                    <div className="mb-5 md:mb-10" key={key}>
                      <div className="h-14">
                        <img src={item.imageURL} alt="our-service" />
                      </div>
                      <h3 className="text-lg md:text-2xl mb-2 md:mb-3 font-semibold">{item.title}</h3>
                      <p className="text-md md:text-xl text-black-400">{item.content}</p>
                    </div>
                  </Fade>
                </Slide>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
