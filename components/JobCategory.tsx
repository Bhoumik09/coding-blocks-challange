'use client'
import { Button } from "@/components/ui/button"
import {
  Briefcase,
  Database,
  BarChart,
  Code,
  DollarSign,
  BookOpen,
  Wrench,
  Calculator,
  Palette,
  BarChart2,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react";

const imageUrl = "https://cdn.enhancv.com/images/1098/i/aHR0cHM6Ly9jZG4uZW5oYW5jdi5jb20vcHJlZGVmaW5lZC1leGFtcGxlcy9CamhWdnRPN25DRnBRZUlVODM0VzA3UDlaS2NvZENKNFNtSHRVQUVjL2ltYWdlLnBuZw~~.png";

const jobCategories = [
  { id: 1, name: "Business Analyst", icon: <Briefcase className="h-10 w-10 text-white/95" />, image: imageUrl },
  { id: 2, name: "Data Scientist", icon: <Database className="h-10 w-10 text-white/95 " />, image: imageUrl },
  { id: 3, name: "Product Manager", icon: <BarChart className="h-10 w-10 text-white/95" />, image: imageUrl },
  { id: 4, name: "Software Engineer", icon: <Code className="h-10 w-10 text-white/95" />, image: imageUrl },
  { id: 5, name: "Sales", icon: <DollarSign className="h-10 w-10 text-white/95" />, image: imageUrl },
  { id: 6, name: "Teacher", icon: <BookOpen className="h-10 w-10 text-white/95" />, image: imageUrl },
  { id: 7, name: "Engineer", icon: <Wrench className="h-10 w-10 text-white/95" />, image: imageUrl },
  { id: 8, name: "Accounting", icon: <Calculator className="h-10 w-10 text-white/95" />, image: imageUrl },
  { id: 9, name: "Designer", icon: <Palette className="h-10 w-10 text-white/95" />, image: imageUrl },
  { id: 10, name: "Marketing", icon: <BarChart2 className="h-10 w-10 text-white/95" />, image: imageUrl },
]

export default function JobCategoryList() {
  const [selectedOption, setSelectedOption] = useState<number>(1);

  return (
    <div className="h-full z-1 w-full items-end bg-gray-200/80 relative">
    <svg
  className="absolute inset-0 z-0 pointer-events-none w-full h-full"
  viewBox="0 0 1440 900"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
>
  <defs>
    <linearGradient id="wave-gradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#f3f4f6" />
      <stop offset="100%" stopColor="#d1d5db" />
    </linearGradient>
  </defs>
  <path
    fill="url(#wave-gradient)"
    d="
      M0,800
      Q720,900 1440,200
      L1440,900
      L0,900
      Z
    "
  />
</svg>


      <div className="text-center text-[3rem] font-bold lg:mx-40">
        The resume builder that’s right for your job and experience
      </div>
      <div className="flex w-full  justify-center">
        <Button size={'lg'} variant="link" className="text-indigo-600 group p-7 bg-transparent flex gap-2 transition-all duration-500  group-hover:gap-4 hover:text-indigo-800">
          <span className="inline-block transition-all duration-300 group-hover:-translate-x-2 text-lg"> Read More Reviews at Reviews.io </span>
          <ExternalLink className="ml-1  transition-all duration-500 group-hover:translate-x-1" />
        </Button>
      </div>
      <div className="flex z-4 h-full  gap-20 max-lg:flex-col bg-transparent p-4">

        <div className="space-y-2 flex-1/2 flex flex-col lg:p-30 ">
          {jobCategories.map((category) => (
            <div

              key={category.id}
              className={` gap-2 p-2    transition-all duration-500 group justify-start items-center flex bg-none outline-none rounded-4xl hover:bg-green-500  text-left ${category.id == selectedOption ? 'bg-green-400 w-64' : 'hover:w-60 w-76'} 
              `}
              onClick={() => setSelectedOption(category.id)}
            >

              <div className={`mr-3 bg-green-500 transition-all duration-300 group-hover:-rotate-45  rounded-full p-2 ${category.id === selectedOption ? "bg-emerald-500 -rotate-45" : "bg-emerald-100"}`}>
                {category.icon}
              </div>
              <div className={`text-xl font-bold  group-hover:-translate-x-2.5 transition-all duation-500  ${category.id === selectedOption && '-translate-x-2.5 '}`}>
                {category.name}
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1/2 relative bg-white rounded-3xl" >
          <Image
            src={jobCategories[selectedOption].image}
            fill
            alt="image"
            loading="lazy"
            className="rounded-3xl absolute"
            style={{ objectFit: 'contain', boxShadow: '.2rem .2rem 1.2px rgba(0,0,0,0.3)' }}

          />
        </div>
      </div>
    </div>
  )
}
