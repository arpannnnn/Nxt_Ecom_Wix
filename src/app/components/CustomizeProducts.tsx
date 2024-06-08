
const CustomizeProducts = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium ">Choose a color</h4>
      <ul className=" flex items-center gap-3">
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
          <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "></div>
        </li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500">
        </li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-green-500">
          <div className="absolute bg-red-500 w-10 h-[2px] rotate-45 cursor-not-allowed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "></div>

        </li>
      </ul>
      <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3 ">
        <li className=" text-arpan py-1 px-4 text-sm ring-1 ring-arpan cursor-pointer rounded-md "> Small </li>
        <li className="  py-1 px-4 text-sm ring-1 text-white ring-arpan bg-arpan cursor-pointer rounded-md "> Medium </li>
        <li className=" text-white bg-pink-200  py-1 px-4 text-sm ring-1 ring-pink-200 cursor-pointer rounded-md "> Large </li>

      </ul>
    </div>
  )
}

export default CustomizeProducts