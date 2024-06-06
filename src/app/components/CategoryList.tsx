
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryList = () => {
    return (
        <div className='px-4 overflow-x-scroll scrollbar-hide'>
            <div className='flex gap-4 md:gap-8'>
                <Link href='/list?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src="https://plus.unsplash.com/premium_photo-1707816508645-d229ddd3aa65?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" fill sizes="20vw" className="object-cover" />
                    </div>
                    <h1 className="mt-8 font-light text-cl traking-wide">Category Name</h1>
                </Link>
                <Link href='/list?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src="https://plus.unsplash.com/premium_photo-1707816508645-d229ddd3aa65?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" fill sizes="20vw" className="object-cover" />
                    </div>
                    <h1 className="mt-8 font-light text-cl traking-wide">Category Name</h1>
                </Link>
                <Link href='/list?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src="https://plus.unsplash.com/premium_photo-1707816508645-d229ddd3aa65?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" fill sizes="20vw" className="object-cover" />
                    </div>
                    <h1 className="mt-8 font-light text-cl traking-wide">Category Name</h1>
                </Link>
                <Link href='/list?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src="https://plus.unsplash.com/premium_photo-1707816508645-d229ddd3aa65?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" fill sizes="20vw" className="object-cover" />
                    </div>
                    <h1 className="mt-8 font-light text-cl traking-wide">Category Name</h1>
                </Link>
                <Link href='/list?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src="https://plus.unsplash.com/premium_photo-1707816508645-d229ddd3aa65?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" fill sizes="20vw" className="object-cover" />
                    </div>
                    <h1 className="mt-8 font-light text-cl traking-wide">Category Name</h1>
                </Link>
                <Link href='/list?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src="https://plus.unsplash.com/premium_photo-1707816508645-d229ddd3aa65?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" fill sizes="20vw" className="object-cover" />
                    </div>
                    <h1 className="mt-8 font-light text-cl traking-wide">Category Name</h1>
                </Link>
                <Link href='/list?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src="https://plus.unsplash.com/premium_photo-1707816508645-d229ddd3aa65?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" fill sizes="20vw" className="object-cover" />
                    </div>
                    <h1 className="mt-8 font-light text-cl traking-wide">Category Name</h1>
                </Link>
            </div >
        </div >

    )
}

export default CategoryList