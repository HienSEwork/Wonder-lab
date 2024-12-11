"use client"

import Star from "@/components/UI/Star";
import {videos, gifs} from "@/constants/tale-of-shadow";
import Image from "next/image";
import Link from "next/link";
import { Slide, Fade } from "react-awesome-reveal";

export default function TaleOfShadow() {
    return (
        <>
            <section className="relative p-6 mx-0">
                <div className="my-2  md:mt-[88px] lg:my-12 lg:mx-12">
                    <Slide direction="up" triggerOnce>
                        <h1 className="w-[125px] md:w-[350px] lg:w-[100%] text-3xl md:text-[44px] lg:tracking-wider lg:leading-[84px]">The Tale of Shadow - An AR Adventure in Central Park</h1>
                        <Star stroke />
                    </Slide>
                </div>
                <div className="flex mt-8 ">
                    <div>
                        <h1 className="w-[125px] md:w-[350px] lg:w-[400px] text-xl lg:text-[32px] lg:ml-[48px] lg:leading-[84px]">Introduction</h1>
                    </div>
                    <div className="w-full right-2 leading-small">
                        <Slide direction="up" triggerOnce delay={0}>
                            <Fade triggerOnce>
                                <p className="mb-8 text-md lg:text-[19px] lg:ml-[-20px] leading-8 lg:mr-[48px]">The Tale of Shadow, an augmented reality (AR) game set in the heart of Central Park, showcases how we bring this mission to life. The Tale of Shadow is designed to connect families and friends with nature through a magical adventure, where they work together to solve puzzles and uncover secrets. The game is an invitation to step away from the digital distractions and reconnect with the world around us – all while exploring the hidden magic of one of the most iconic parks in the world.</p>
                            </Fade>
                        </Slide>
                    </div>
                </div>
            </section>
            {/* Movie trailer */}
            <section className="relative mb-4 mt-0 md:my-16 mx-0 lg:mt-0 ">
                <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-12 lg:mx-[48px]">
                    <div className="relative w-full h-screen overflow-hidden">
                        <video
                            className="absolute inset-0 w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            >
                            <source src="/videos/trailer.mov" type="video/mp4" />
                            Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
            </section>  
            {/* Brief and Challenges */}
            <section className="relative p-6 mx-0">
                <div className="flex mt-8 ">
                    <div className="w-full right-2 leading-small">
                        <h1 className="w-[125px] md:w-[350px] lg:w-[100%] text-xl lg:text-[32px] lg:ml-[48px] lg:mb-6">Project Brief and Chanllenges</h1>

                        <Slide direction="up" triggerOnce delay={0}>
                            <Fade triggerOnce>
                                <p className="mb-8 text-md lg:text-[19px]  leading-8 lg:mx-[48px]">
                                    The concept for The Tale of Shadow was to create an AR experience that could appeal to kids (around age 10) and adults alike, offering an engaging way
                                    to explore Central Park. The game’s protagonist is Shadow, a curious black cat who guides players through various challenges across the park, encouraging teamwork and puzzle-solving.
                                    <br/>
                                    <br/>
                                    We aimed to create a family-friendly experience that was both accessible and enjoyable. However, we faced several key challenges during development:
                                    <div className="inset-0 flex items-center justify-center">
                                        <div>
                                            <ol className="space-y-2">
                                                <li className="flex items-center">
                                                    <span className="inline-block w-2 h-2 bg-black rounded-full mr-3 mt-1"></span>
                                                    AR Anchoring: Ensuring that AR objects (like the animals and magic items) were accurately anchored around real-world locations.
                                                </li>
                                                <li className="flex items-center">
                                                    <span className="inline-block w-2 h-2 bg-black rounded-full mr-3 mt-1"></span>
                                                    Cross-Generational Appeal: Designing gameplay that was simple enough for younger children yet still compelling for adults.
                                                </li>
                                                <li className="flex items-center">
                                                    <span className="inline-block w-2 h-2 bg-black rounded-full mr-3 mt-1"></span>
                                                    Seamless Cross-Platform Compatibility: Ensuring a smooth experience for both iOS and Android users while maintaining high-quality AR interactions.
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </p>
                            </Fade>
                        </Slide>
                    </div>
                </div>
            </section>
            {/* Gif */}
            <section className="relative mb-4 mt-0 md:my-16 mx-0 lg:mt-0 lg:mx-0">
                <div className="w-full flex justify-evenly lg:mx-0 lg:gap-x-6">
                    {gifs.map((gif, index) => (
                        <div key={index} className="w-1/4">
                            <img src={gif.imageURL} alt={`GIF ${index + 1}`} className="w-full h-auto" />
                        </div>
                        ))}
                </div>
            </section> 
            {/* Design process */}
            <section className="relative p-6 mx-0">
                <div className="flex mt-8 ">
                    <div className="w-full right-2 leading-small">
                        <h1 className="w-[125px] md:w-[350px] lg:w-[100%] text-xl lg:text-[32px] lg:ml-[48px] lg:mb-6">Design Process: From Concept to Reality</h1>

                        <Slide direction="up" triggerOnce delay={0}>
                            <Fade triggerOnce>
                                <p className="mb-8 text-md lg:text-[19px]  leading-8 lg:mx-[48px]">
                                    The design of The Tale of Shadow was crafted with the goal of creating a visually captivating and enchanting experience for players of all ages. The games animals, such as Shadow the cat, were carefully modeled in Blender, with each character featuring hand-painted textures to give them a unique, magical feel. We paid special attention to their animations, bringing them to life with movements that added personality and charm, ensuring that they felt both playful and engaging.
                                    <br/><br/>
                                    Drawing inspiration from popular children`s games, we developed an art style that was vibrant, approachable, and designed to appeal to younger audiences while maintaining a sense of wonder for adults. This art direction perfectly complemented the magical narrative and Central Park setting, making the game both visually appealing and deeply connected to its real-world environment.
                                    <br/> <br/>
                                    The user interface (UI) design and game prototypes were created in Figma, with a focus on intuitive and accessible navigation. Our design process was highly iterative: after each prototype, we conducted extensive user testing to gather feedback on gameplay and messaging. This allowed us to refine the design at every stage, ensuring the game became increasingly user-friendly, while also enhancing its storytelling elements. Each iteration brought the design closer to our goal of creating a seamless, engaging experience that made exploring the park—and the game’s mysteries—both fun and easy to follow.
                                    <br/><br/>
                                    By combining playful animations, hand-crafted visuals, and a carefully considered UI, we were able to create a game that resonates with players of all ages, inviting them into a magical journey through one of New York’s most beloved landmarks.
                                    </p>
                            </Fade>
                        </Slide>
                    </div>
                </div>
            </section>
            {/* Animals */}
            <section className="relative mb-4 mt-0 md:my-16 mx-0 lg:mt-0 ">
                <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-12 lg:mx-[48px]">
                    <div className="relative w-full h-screen overflow-hidden">
                        
                    </div>
                </div>
            </section> 
            {/* Technology and tool, Game Feature */}
            <section className="relative p-6 mx-0">
                <div className="flex mt-8 ">
                    <div className="w-full right-2 leading-small">
                        <h1 className="w-[125px] md:w-[350px] lg:w-[100%] text-xl lg:text-[32px] lg:ml-[48px] lg:mb-6">Technology and Tools Used</h1>
                        <Slide direction="up" triggerOnce delay={0}>
                            <Fade triggerOnce>
                                <p className="mb-8 text-md lg:text-[19px]  leading-8 lg:mx-[48px]">
                                     We used a combination of leading AR tools and development platforms to bring The Tale of Shadow to life:
                                    <div className="inset-0 flex items-center justify-center">
                                        <div>
                                            <ol className="space-y-2">
                                            <li className="flex items-center">
                                                <span className="inline-block w-2 h-2 bg-black rounded-full mr-3 mt-1"></span>
                                                Unity: For game development, including the creation of the AR objects and environment interactions.
                                                </li>
                                            <li className="flex items-center">
                                                <span className="inline-block w-2 h-2 bg-black rounded-full mr-3 mt-1"></span>
                                                ARCore and ARKit: These frameworks ensured seamless AR functionality across Android and iOS devices, respectively.
                                                </li>
                                            <li className="flex items-center">
                                                <span className="inline-block w-2 h-2 bg-black rounded-full mr-3 mt-1"></span>
                                                Geolocation Integration: To ensure the accurate placement of AR objects in relation to real-world landmarks, we implemented GPS-based tracking.</li>
                                            </ol>
                                        </div>
                                    </div>
                                </p>
                            </Fade>
                        </Slide>
                    </div>
                </div>
            </section>
            {/* Game Feature */}
            <section className="relative p-6 mx-0">
                <div className="flex mt-8 ">
                <div className="w-full right-2 leading-small">
                        <h1 className="w-[125px] md:w-[350px] lg:w-[100%] text-xl lg:text-[32px] lg:ml-[48px] lg:mb-6">Game Features and Innovations
                        </h1>
                        <Slide direction="up" triggerOnce delay={0}>
                            <Fade triggerOnce>
                                <p className="mb-8 text-md lg:text-[19px]  leading-8 lg:mx-[48px]">
                                The game was designed with several key features to stand out in the AR space:
                                <div className="inset-0 flex items-center justify-center">
                                        <div>
                                            <ol className="space-y-2">
                                                <li className="flex items-center">
                                                    <span className="inline-block w-2 h-2 bg-black rounded-full mr-3 mt-1"></span>
                                                    Interactive Gameplay: Players use an in-game map to navigate from one location to another, uncovering mysteries along the way. Shadow appears at various points, offering clues and guidance.                                                </li>
                                                <li className="flex items-center">
                                                    <span className="inline-block w-2 h-2 bg-black rounded-full mr-3 mt-1"></span>
                                                    Puzzles Integrated with Nature: The design of the puzzles reflected the environment and history of Central Park. For example, plaques placed near the Cherry Hill Fountain referenced historical facts and invited players to interact with the environment to solve clues.                                                </li>
                                                <li className="flex items-center">
                                                    <span className="inline-block w-2 h-2 bg-black rounded-full mr-3 mt-1"></span>
                                                    A Magical Conclusion: At the end of the game, players unlock the final mystery of Central Park, revealing a magical transformation that emphasizes the theme of imagination and limitless possibilities.</li>
                                           </ol>
                                        </div>
                                    </div>
                                </p>
                            </Fade>
                        </Slide>
                    </div>                    
                </div>
            </section>
            {/* Video demo */}
            <section className="relative mb-4 mt-0 md:my-16 mx-0 lg:mt-0 ">
                <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-12 lg:mx-[48px]">
                    <div className="relative w-full h-screen overflow-hidden">
                        <video
                            className="absolute inset-0 w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            >
                            <source src="/videos/Video.mov" type="video/mp4" />
                            Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
            </section> 
            {/* Last part*/}
            <section className="relative p-6 mx-0"> 
                <div className="flex mt-8 ">
                    <div className="w-full right-2 leading-small lg:mx-12">
                        <Slide direction="up" triggerOnce delay={0}>
                            <Fade triggerOnce>
                                <p className="mb-8 text-md lg:text-[19px] lg:ml-[-20px] leading-8 lg:mr-[48px]">
                                    The Tale of Shadow showcases Wonder Lab’s expertise in blending cutting-edge technology with immersive storytelling 
                                    to craft memorable, engaging experiences. The game highlights the value of stepping outside, connecting with nature, 
                                    and fostering teamwork through shared adventures. As we look to the future, we’re eager to build on this success, 
                                    exploring new opportunities to create projects that spark imagination, inspire curiosity, and bring people together.
                                    <br/><br/>
                                    For more information visit: https://www.thetaleofshadow.com/ 
                                    <br/>
                                    The Tale of Shadow is available in the Wonder Lab XR app from 
                                    <a href="https://apps.apple.com/us/app/wonder-lab-xr/id6737130984?ct=Tap33764680" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mx-2">App Store</a> 
                                    or 
                                    <a href="https://play.google.com/store/apps/details?id=com.WonderLab.Shadowtale&hl=en&pli=1" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mx-2">Google play</a>
                                    store.
                                </p>
                            </Fade>
                        </Slide>
                    </div>
                </div>
            </section>
            {/*Blackcat model */}
            <section className="relative mb-4 mt-0 md:my-16 mx-0 lg:mt-0 ">
                <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-12 lg:mx-[48px]">
                    <div className="relative w-full h-[200px] overflow-hidden">
                        
                    </div>
                </div>
            </section> 
        </>
    )
}