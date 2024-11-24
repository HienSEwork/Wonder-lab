import Image from "next/image";
import { FunctionComponent } from "react";

interface StarProps {
    stroke?: boolean
}
 
const Star: FunctionComponent<StarProps> = ({ stroke }) => {
    const imgSrc = stroke ? '/images/2d-assets/stroke-star.png' : '/images/2d-assets/outline-star.png'

    return (
        <div className={`relative h-[50px] w-[50px]`}>
            <Image src={imgSrc} alt="star" width={50} height={50} />
        </div>
    );
}
 
export default Star;