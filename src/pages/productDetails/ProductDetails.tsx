import Loading from "@/components/loading/Loading";
import { useGetSingleProductQuery } from "@/redux/features/product/productManagementApi";
import { TProduct } from "@/types";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const { data: stationeryProduct, isLoading, isError } = useGetSingleProductQuery({
        productId: id
    })

    if (isLoading) {
        return <Loading />


    }

    if (isError || !stationeryProduct?.data) {
        return <p>Error fetching product details. Please try again later.</p>;
    }
    const { name, brand, category, image, price, inStock, description, quantity } = stationeryProduct?.data as TProduct
    return (
        <div className="px-4 my-8">
            <h2 className="font-bold sectionTitle">Product <span className="primaryColor">Details</span></h2>
            <p className="sectionSubtitle">Discover all the specifications, features, and details about this product to make an informed purchase. From quality materials to performance, find everything you need right here.</p>
            <div className="flex flex-col gap-8 md:flex-row">
                <div>
                    <img className="w-full h-[400px] object-cover" style={{ borderRadius: '8px' }} src={image} alt={name} /></div>

                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
                        <h2 className="text-3xl font-bold text-gray-800">
                            {name}
                            <span className="ml-2 text-sm text-[#fb5770] font-medium">({brand})</span>
                        </h2>
                        <span
                            className={`text-sm font-semibold px-4 py-2 rounded-full ${inStock
                                ? "bg-gradient-to-r from-green-400 to-green-600 text-white"
                                : "bg-gradient-to-r from-red-400 to-red-600 text-white"
                                }`}
                            style={{
                                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                                transition: "all 0.3s ease-in-out",
                            }}
                        >
                            {inStock ? "In Stock" : "Out of Stock"}
                        </span>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-600">
                        Category: <span className="font-normal">{category}</span>
                    </h2>
                    <h2 className="text-xl font-bold text-[#fb5770]">
                        Price: <span>${price}</span>
                    </h2>

                    <h2 className="text-lg font-semibold text-gray-600">
                        Quantity Available: <span className="font-normal">{quantity}</span>
                    </h2>
                    <p className="text-sm leading-6 text-gray-700">
                        {description}
                    </p>

                    {/* Action Buttons */}
                    <div>
                        <div className="flex gap-4">
                            <button
                                style={{
                                    borderRadius: "8px",
                                }}
                                className="text-sm font-medium border border-[#fb5770] bg-white text-[#fb5770] hover:bg-[#fb5770] hover:text-white px-2 md:px-8 rounded-lg h-11 focus:outline-none flex-1"
                            >
                                Add To Cart
                            </button>
                            <button
                                style={{
                                    borderRadius: "8px",
                                }}
                                className="text-sm font-medium border border-[#fb5770] bg-white text-[#fb5770] hover:bg-[#fb5770] hover:text-white px-2 md:px-8 rounded-lg h-11 focus:outline-none flex-1"
                            >
                                Add To Favorite
                            </button>
                        </div>
                        <div className="mt-4">
                            <button
                                style={{ borderRadius: "8px" }}
                                className="text-sm font-medium bg-[#fb5770] text-white hover:bg-[#e44d63] px-2 md:px-8 rounded-lg h-11 focus:outline-none md:mt-0 w-full flex-1"
                            >
                                Bye Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ProductDetails;