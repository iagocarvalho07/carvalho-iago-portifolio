import { ElipseComponent } from "@/app/components/ElipseComponent";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useGSAP } from '@gsap/react';
export const HomePage = () => {
    const titleRef = useRef(null)
    const descriptionRef = useRef(null)
    const imageRef = useRef(null)

    useGSAP(() => {
        const tittle = titleRef.current;
        const description = descriptionRef.current;
        const imageBaner = imageRef.current;
        const tl = gsap

        gsap.timeline().fromTo(tittle, {
            opacity: 0,
            y: 100
        }, {
            opacity: 1,
            y: 0
        }).fromTo(description,
            {
                opacity: 0,
                y: 100
            },
            {
                opacity: 1,
                y: 0
            }
        );

    }, []);

    return (
        <div className="h- w-auto h-auto bg-[#000000] flex  ">
            <div className="w-1/2 relative pt-32">
                <ElipseComponent />
                <div className="absolute top-1/4 left-1/4 text-center pt-32 ">
                    <div ref={titleRef}>
                        <h1 className="text-5xl font-bold" >Let's Explore</h1>
                        <h1 className="text-5xl font-bold" >Three-Dimensional</h1>
                        <h1 className="text-5xl font-bold" >Visual</h1>
                    </div>

                    <p className="text-[#FFFFFF]" ref={descriptionRef}>
                        with virtual technology you can see the digital world feel
                        more real and you can play the game with a new style.</p>
                </div>
            </div>
            <div className="w-1/2 flex justify-center items-center h-screen ">
                <div className="p-4  static" ref={imageRef}>
                    <div className="relative h-80 w-[300px] bg-[#534686] rounded-b-full">
                        <div className="absolute bottom-12 m-6   space-y-6">
                            <h3 className="text-[19px] font-bold text-white">Cinematic Virtual Reality</h3>
                            <hr />
                            <p className="text-white text-[11px]">Let's be the best for more real and effective results and ready to explore the limitless world that we have prepared for you.</p>
                        </div>
                    </div>
                    <img className="absolute top-28 " src="assets/Ellipse1.png" alt="" />

                </div>

            </div>



        </div>
    )
}