import { useGetAllCategoryQuery } from "@/redux/features/category/categoryManagementApi";
import { TCategory } from "@/types";
import BookImage from "../assets/images/banner.png"
import { Link } from "react-router-dom";

const Banner = () => {
    const { data: categories } = useGetAllCategoryQuery(undefined);

    return (
        <div>
            <div className="flex justify-between gap-8 mt-8 overflow-hidden bg-white md:mt-0">
                <div className="w-1/4 mt-8">
                    <h2 className="mb-4 ml-2 text-xl">Browse Categories</h2>
                    <div >
                        {
                            categories?.data?.slice(0, 10)?.map((category: TCategory) => (
                                <div key={category?._id}>
                                    <Link to='/'>
                                        <ul className="flex items-center gap-2 px-4 py-2 border hover:text-[#fb5770] hover:bg-[#fb577029]">
                                            <img className="w-6" src={category?.image} alt={category?.name} />
                                            <li>{category?.name}</li>
                                        </ul>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="w-3/4 px-4 lg:px-0 bg-[#fb5770] mt-8 flex items-center rounded">
                    <div className="flex-1 pl-16">
                        <h1 className="text-5xl font-bold tracking-tight text-gray-800">
                            Premium <span className="text-white">Stationery </span>
                            Supplies
                        </h1>
                        <p className="my-4 mb-8 text-lg text-white">
                            Discover our curated collection of high-quality stationery essentials. From premium notebooks to luxury
                            pens, we have everything you need to make your ideas come to life.
                        </p>
                        <button
                            style={{
                                borderRadius: "8px",
                            }}
                            className="text-sm font-medium border border-white bg-white text-[#fb5770] hover:bg-[#fb5770] hover:text-white px-8 rounded-lg h-11 focus:outline-none"
                        >
                            Shop now
                        </button>
                    </div>

                    <div className="flex items-center justify-center flex-1">
                        <img
                            src={BookImage}
                            alt="Stationery collection"
                            width={600}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 my-16">
                <div className="flex items-center justify-center gap-4 border-r-2">
                    <img className="w-16" src="https://cdn-icons-png.freepik.com/256/3806/3806012.png?ga=GA1.1.2122364497.1742731770&semt=ais_hybrid" alt="" />
                    <div>
                        <h2 className="text-lg font-bold text-gray-700">Fast delivery</h2>
                        <p>For all orders over $120</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4 border-r-2">
                    <img className="w-16" src="https://cdn-icons-png.freepik.com/256/2059/2059129.png?ga=GA1.1.2122364497.1742731770&semt=ais_hybrid" alt="" />
                    <div>
                        <h2 className="text-lg font-bold text-gray-700">Safe Payments</h2>
                        <p>100% secure payment</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4 border-r-2">
                    <img className="w-16" src="https://cdn-icons-png.freepik.com/256/2229/2229248.png?ga=GA1.1.2122364497.1742731770&semt=ais_hybrid" alt="" />
                    <div>
                        <h2 className="text-lg font-bold text-gray-700"> Discount Coupons</h2>
                        <p>Enjoy Huge Promotions</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <img className="w-16" src="https://cdn-icons-png.freepik.com/256/4961/4961759.png?ga=GA1.1.2122364497.1742731770&semt=ais_hybrid" alt="" />
                    <div>
                        <h2 className="text-lg font-bold text-gray-700">Quality Support</h2>
                        <p>Dedicated 24/7 support</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;