"use client"

import Image from "next/image";

const cartItems = true;
const CartModal = () => {
  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
        <h2 className="text-xl mb-2 font-semibold">Shopping Cart</h2>
        {/* //List of items */}
          <div className="flex flex-col gap-8">
            {/* Items */}
            <div className="flex gap-4">
              <Image src="https://images.unsplash.com/photo-1717496002081-38a90d3cba26?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={72} height={96}
                className="object-cover rounded-md"
              />
              <div className=" flex flex-col justify-between w-full">
                {/* Top */}
                <div className=" flex items-center justify-between gap-8">
                  {/* Title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className=" font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$90</div>

                  </div>
                  {/* Description */}
                  <div className=" text-sm text-gray-500">
                    Available
                  </div>
                </div>
                {/* // Bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty: 1</span>
                  <span className="text-red-500">Remove</span>
                </div>
              </div>
            </div>
            {/* Items */}
            <div className="flex gap-4">
              <Image src="https://images.unsplash.com/photo-1717496002081-38a90d3cba26?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={72} height={96}
                className="object-cover rounded-md"
              />
              <div className=" flex flex-col justify-between w-full">
                {/* Top */}
                <div className=" flex items-center justify-between gap-8">
                  {/* Title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className=" font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$90</div>

                  </div>
                  {/* Description */}
                  <div className=" text-sm text-gray-500">
                    Available
                  </div>
                </div>
                {/* // Bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty: 1</span>
                  <span className="text-red-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* //Bottom */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
                  <span className="mt-2">Subtotal </span>
                  <span className="text-green-500">$49</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-2 mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  </p>
                  <div className=" flex justify-between text-sm">
                    <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">view Cart</button>
                    <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
                  </div>
                </div>
          </>)}
        </div>
      )
}

      export default CartModal