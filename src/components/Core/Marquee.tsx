import React, { FunctionComponent, useEffect, useState } from 'react';
import FastMarquee from "react-fast-marquee";

interface MarqueeProps {
    children: any
    speed?: number
    direction?: 'left' | 'right'
    autoFill?: boolean
    className?: string
    pauseOnHover?: boolean
}

const Marquee: FunctionComponent<MarqueeProps> = ({ 
    children, 
    speed = 60, 
    direction = 'left', 
    autoFill, 
    className,
    pauseOnHover
}) => {
    const [marqueeSpeed, setMarqueeSpeed] = useState(speed);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = Math.abs(window.scrollY);
            const windowHeight = window.innerHeight;
            const maxScroll = document.body.scrollHeight - windowHeight;

            // Normalize the scroll position to a range of 1 to 2
            let speedMultiplier = (scrollPosition / maxScroll) * 1 + 1; // Range: 1 to 2

            setMarqueeSpeed(speed * speedMultiplier);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return (
        <FastMarquee
            speed={marqueeSpeed}
            direction={direction}
            autoFill={autoFill}
            className={className}
            pauseOnHover={pauseOnHover}
        >
            {children}
        </FastMarquee>
    );
}

export default Marquee;
