import Add from "../components/Add"
import CustomizeProducts from "../components/CustomizeProducts"
import ProductImages from "../components/ProductImages"

const SinglePage = () => {
  return (
    <div className=" px-4 md:px-8  lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* Img */}
      <div className=" w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />

      </div>
      {/* Texts*/}
      <div className=" w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-bold">Product Name</h1>
        <p className="text-gray-800"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officia expedita numquam veniam vel odit itaque esse quod, tempore suscipit odio ipsam qui iste saepe quos vero eum iure assumenda. </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$200</h3>
          <h2 className="text-2xl font-medium">$100</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <h1 className="text-2xl">Title</h1>
        <p className="text-gray-800"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officia expedita numquam veniam vel odit itaque esse quod, tempore suscipit odio ipsam qui iste saepe quos vero eum iure assumenda. </p>
        <h1 className="text-2xl">Title</h1>
        <p className="text-gray-800"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officia expedita numquam veniam vel odit itaque esse quod, tempore suscipit odio ipsam qui iste saepe quos vero eum iure assumenda. </p>
        <h1 className="text-2xl">Title</h1>
        <p className="text-gray-800"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officia expedita numquam veniam vel odit itaque esse quod, tempore suscipit odio ipsam qui iste saepe quos vero eum iure assumenda. </p>
      </div>

    </div>
  )
}

export default SinglePage