import { Hero } from "@/app/components/Hero";
import { CompanyValues } from "./companieValues/ComponyValues";
export const HomePage = () => {

   

    return (
        <div className="flex flex-col ">
            <div className="relative w-full h-[850px] z-10">
                <Hero />
            </div>
            <CompanyValues/>
        </div>
    )
}