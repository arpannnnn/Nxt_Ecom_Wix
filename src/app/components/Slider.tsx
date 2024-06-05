"use client"

import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";

const slides = [
    {
        id: 0,
        title: "Summer Collection",
        description: "New Arrivals Are Here",
        image: "https://arpanacharya.com.np/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMy%20project-1.8edb8319.png&w=1080&q=75",
        url: "/",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
        id: 1,
        title: "Summer Collection",
        description: "New Arrivals Are Here",
        image: "https://arpanacharya.com.np/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMy%20project-1.8edb8319.png&w=1080&q=75",
        url: "/",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
        id: 2,
        title: "Summer Collection",
        description: "New Arrivals Are Here",
        image: "https://arpanacharya.com.np/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMy%20project-1.8edb8319.png&w=1080&q=75",
        url: "/",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    }

];
const Slider = () => {
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(current === slides.length - 1 ? 0 : current + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, [current]);
    return (
        <div className="h-[calc(100vh-80px)] overflow-hidden">
            <div className="w-max h-full flex  transition-all ease-in-out duration-1000" 
            style={{transform: `translateX(-${current * 100}vw)`}}
            >
                {slides.map((slides) => (
                    <div className={`${slides.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slides.id}
                    >
                        {/* Text container */}

                        <div className=" h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center ">
                            <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slides.description}</h2>
                            <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slides.title}</h1>
                            <Link href={slides.url}><button className="rounded-md bg-black text-white py-3 px-4">SHOP NOW</button></Link>
                        </div>

                        {/* Image clontainer */}

                        <div className=" h-1/2 xl:w-1/2 xl:h-full relative">
                            <Image src={slides.image} alt="" fill sizes="100%" className="object-cover"
                            />
                        </div>
                    </div>
                ))}

            </div>
            <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
                {slides.map((slides, index) => (
                    <div
                        className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex  items-center justify-center ${current === index ? "scale-150 " : "bg-gray-300"}`}
                        key={slides.id}
                        onClick={()=>setCurrent(index)} >
                        {current === index && (
                            <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slider