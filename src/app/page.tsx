
"use client"

import { HeaderComponent} from "@/app/components/HeaderComponent";
import {HomePage  } from "@/app/pages/home/Home";

import { CompanyValues } from "../app/pages/home/companieValues/ComponyValues";



export default function Home() {
  return (
    <div className="container h-full w-full mx-auto place-content-center bg-backgroundportifolio">
      
      <HomePage/>
      <HeaderComponent/>
      <CompanyValues/>

 
    </div>
  );
}
