import Image from "next/image";
import { FunctionComponent } from "react";

interface SmallBannerProps {
    side: 'left' | 'right'
}

const SmallBanner: FunctionComponent<SmallBannerProps> = ({ side }) => {
    const imgSrc = side === 'left' ? '/images/2d-assets/what-makes-us-unique-01.png' : '/images/2d-assets/what-makes-us-unique-02.png'

    return (
        <div className={`relative  h-[275px] w-[275px] md:h-[450px] md:w-[450px]`}>
            <Image src={imgSrc} alt="ellipse-with-star" width={450} height={450} />
        </div>
    );
}

export default SmallBanner;