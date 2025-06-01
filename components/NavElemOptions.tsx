import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React, { Fragment } from "react";
import { Button } from "./ui/button";
export type SubOption = {
    label: string;
    description: string;
    icon?: React.JSX.Element
};

export interface NavOptionsProps {
    options: {
        label: string, description: string, icon: React.JSX.Element
        suboptions: SubOption[]
    }[], 
}
export const NavHoverOptions: React.FC<NavOptionsProps> = ({ options }) => {

    return (
        <Fragment>
            <div className="w-full flex flex-col flex-wrap h-full p-5">
                {
                    options.map((option, index) => (
                        <div key={`option-${index}`} className=" flex flex-col flex-1">
                            <h4 className=" text-purple-500 font-semibold items-center transition-all duration-200 gap-2 text-bold hover:text-purple-300 flex ">
                                <span>{option.icon}</span>
                                <span className="inline-block text-lg ">{option.label}</span>
                                <ChevronDown className="-rotate-90"></ChevronDown>
                            </h4>
                            <div className="">
                                {option.suboptions.map((suboption, subIndex) => (
                                    <div key={`subOption-${subIndex}`} className="px-2">
                                        <h6 className="font-semibold flex items-center gap-2 transition-colors duration-200 text-gray-400 hover:text-gray-300 ">
                                            <span >{suboption?.icon}</span>
                                            <span className="inline-block ">{option.label}</span>

                                        </h6>
                                        <div className="px-4">
                                            {suboption.description}
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="relative w-96  flex-shrink-0">
                {/* First (background) image */}
                <Image
                    src="https://enhancv.com/_next/static/images/cover-letter-banner-bg-cd2be31f6ac222aabf37f62877e3b7ed.webp"
                    alt="img"
                    fill
                    style={{ objectFit: "cover" }}
                />
                {/* Second image, centered */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none h-72 mx-10 " style={{
                    width: "calc(90% - 40px)",    // Example: parent width minus 40px
                    height: "calc(300px - 2rem)",  // Example: 300px minus 2rem
                }} >
                    <Image
                        src="https://cdn.enhancv.com/images/600/i/L19uZXh0L3N0YXRpYy9pbWFnZXMvY292ZXItbGV0dGVyLWJhbm5lci1wYXJ0LTNkYmE0OGI1ODE0YjI1ZDAzZjA2NmFmYzYxZGZjZWU1LndlYnA~.webp"
                        alt="img"
                        fill
                        className="z-20"
                        style={{ objectFit: "contain" }}
                    />
                </div>
                {/* Button, absolutely positioned (e.g., bottom center) */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30" style={{
                    width: "calc(90% - 40px)",    // Example: parent width minus 40px
                }}>
                    <Button className="bg-purple-400 font-bold hover:cursor-pointer  hover:bg-purple-300 transition-colors duration-200 ">Build your resume</Button>
                </div>
            </div>

        </Fragment>
    )
}