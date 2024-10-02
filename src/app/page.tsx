
"use client"

import { HeaderComponent} from "@/app/components/HeaderComponent";
import {HomePage  } from "@/app/pages/home/Home";

import { CompanyValues } from "../app/pages/home/companieValues/ComponyValues";
import { Hero } from "./components/Hero";



export default function Home() {
  return (
    <main className="h-full w-full">
    <div className="flex flex-col gap-20">
      <HomePage/>
    </div>
  </main>
  );
}
