import Image from "next/image";
import { FunctionComponent, useEffect, useState } from "react";

interface CircleWithArrowProps {
    content: 'our-services' | 'our-missions' | 'about-us'
}

const CircleWithArrow: FunctionComponent<CircleWithArrowProps> = ({ content }) => {
    const imgSrc = `/images/2d-assets/${content}.png`

    const [rotationAngle, setRotationAngle] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const maxScroll = document.body.scrollHeight - windowHeight;

            // Increase the multiplier for a faster rotation
            let angle = (scrollPosition / maxScroll) * 360 * 1; // Multiply by 1 for faster rotation

            // Create a smooth transition back from 360 * 1 to 0 degrees
            if (scrollPosition > maxScroll / 2) {
                angle = 360 * 1 - ((scrollPosition - maxScroll / 2) / (maxScroll / 2)) * 360 * 1;
            }

            setRotationAngle(angle);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative h-[64px] w-[64px] md:h-[145px] md:w-[145px] ml-8">
            <div
                className="transform-gpu"
                style={{ transform: `rotate(${rotationAngle}deg)` }}
            >
                <Image src={imgSrc} alt="background" width={145} height={145} />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[7px] h-[26px] md:w-[15px] md:h-[52px]">
                    <Image src={'/images/2d-assets/vertical-arrow.png'} alt="background" width={15} height={52} />
                </div>
            </div>
        </div>
    );
}

export default CircleWithArrow;