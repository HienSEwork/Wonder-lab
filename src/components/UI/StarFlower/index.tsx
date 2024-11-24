import { FunctionComponent } from "react";

interface StarFlowerProps {
    className?: string;
}

const StarFlower: FunctionComponent<StarFlowerProps> = ({ className }) => {
    return (
        <div className={className}>
            <svg 
                className="w-[1.625rem] h-[1.625rem] md:w-[2.75rem] md:h-[2.75rem]" 
                viewBox="0 0 112 112" 
                xmlns="http://www.w3.org/2000/svg" 
                role="presentation" 
                aria-hidden="true"
            >
                <path 
                    className="fill-current" 
                    d="m111.547 59.968-50.391-1.406 36.64 34.531-5.155 5.157L58.11 61.61 59.516 112h-7.188l1.407-50.39-34.532 36.64-5.156-5.157 36.64-34.53-50.39 1.405v-7.187l50.39 1.641-36.64-34.61 5.156-5.078 34.532 36.641L52.328.985h7.188l-1.406 50.39 34.53-36.64 5.157 5.077-36.641 34.61 50.39-1.407z" 
                    fillRule="nonzero"
                />
            </svg>
        </div>
    );
}

export default StarFlower;
