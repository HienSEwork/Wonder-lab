import Image from "next/image";
import { FunctionComponent } from "react";

interface EllipseWithStarProps {
    side: 'left' | 'right'
}
 
const EllipseWithStar: FunctionComponent<EllipseWithStarProps> = ({ side }) => {
    const imgSrc = side === 'left' ? '/images/2d-assets/left-ellipse.png' : '/images/2d-assets/right-ellipse.png'

    return (
        <div className={`relative h-[128px] w-[108px] md:h-[300px] md:w-[255px] lg:w-[350px] lg:h-[400px] z-10`}>
            <Image src={imgSrc} alt="ellipse-with-star" width={300} height={255} />
        </div>
    );
}
 
export default EllipseWithStar;