"use client"
import Image from "next/image"
import { useState } from "react"



const images = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]


const ProductImages = () => {
    const [Index, setIndex] = useState(0)
    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image src={images[Index].url}
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-cover rounded-md" />
            </div>
            <div className="flex justify-between gap-4 mt-8">

                {images.map((img, index) => (

                    <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
                        key={img.id}
                        onClick={() => setIndex (index)}
                    >
                        <Image src={img.url}
                            alt=""
                            fill
                            sizes="30vw"
                            className="object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductImages