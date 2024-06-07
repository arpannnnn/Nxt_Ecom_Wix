import CategoryList from "./components/CategoryList"
import Filter from "./components/Filter"
import NewProductList from "./components/NewProductList"
import ProductList from "./components/ProductList"
import Slider from "./components/Slider"

const HomePage = () => {
  return (
    <div className="">
      
        <Slider />
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 ">
          <h1 className="text-2xl ">Products</h1>
          <ProductList />
        </div>
        <div className="mt-24">
          <h1 className="text-2xl   px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">Categories</h1>

          <CategoryList />
        </div>
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 ">
          <h1 className="text-2xl ">New Products</h1>
          <NewProductList />
        </div>
        {/* filter  */}
        <Filter />
     
    </div>
  )
}

export default HomePage