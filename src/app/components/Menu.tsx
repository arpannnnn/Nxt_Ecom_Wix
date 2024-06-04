"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Menu = () => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <Image src="/menu.png"
                alt="Menu"
                width={30}
                height={30}
                onClick={() => setOpen(open =>!open)} />
            {open && (
                <div className="absolute  bg-black text-white left-0 top-20 w-full h-[cal(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
                    <Link href="/about">Home Page</Link>
                    <Link href="/shop">Shop</Link>
                    <Link href="/about">Deals</Link>
                    <Link href="/about">About</Link>
                    <Link href="/about">Contact</Link> 
                    <Link href="/about">Logout</Link>
                    <Link href="/about">Cart(1)</Link>
                   
                </div>
            )}
        </div>
    )
}

export default Menu