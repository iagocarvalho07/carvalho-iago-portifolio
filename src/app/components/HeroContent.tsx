import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ThreeDCardDemo } from "./ThreeDCard";

export const HeroContent = () => {
    const titleRef = useRef(null)
    const descriptionRef = useRef(null)
    const imageRef = useRef(null)

    useGSAP(() => {
        const tittle = titleRef.current;
        const description = descriptionRef.current;
        const imageBaner = imageRef.current;


        gsap.timeline().fromTo(tittle, {
            opacity: 0,
            y: 100,
            delay: 1
        }, {
            opacity: 1,
            y: 0
        }).fromTo(description,
            {
                opacity: 0,
                y: 100,
                delay: 1
            },
            {
                opacity: 1,
                y: 0
            }
        ).fromTo(imageBaner, {opacity: 0,
            x: -100,
            delay: 1},{opacity: 1,
            x: 0});

    }, []);

    return (
        <div className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]">
            <div className="w-1/2 h-full pt-32 ">
                <div className=" top-1/4 left-1/4 pt-32 flex-wrap text-left ">
                    <div ref={titleRef}
                         className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                    >
                        <span>
                            Promovendo a
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                {" "}
                                 Melhor{" "}
                            </span>
                            Experiencia para seus Projetos
                        </span>
                    </div>

                    <p className="text-lg text-gray-400 my-5 max-w-[600px]" ref={descriptionRef}>
                        Full Stack Software Engineer com Experiencia em WebSite, Mobile, e desenvolvimento de software.</p>
                </div>
            </div >
            <div className="w-1/2 h-screen pt-32 right-0  flex items-end justify-end" ref={imageRef}>
            <ThreeDCardDemo/>
            </div>
        </div>
    )
}