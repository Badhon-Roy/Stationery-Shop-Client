import { useGetAllProductsQuery } from "@/redux/features/product/productManagementApi";
import ProductCart from "./ProductCart";
import { Link } from "react-router-dom";
import Loading from "./loading/Loading";
const FeaturedProducts = () => {
    const { data: stationeryProducts, isLoading } = useGetAllProductsQuery(undefined);
    if(isLoading){
        return <Loading/>
    }
    return (
        <div className="px-4 my-8 lg:px-0">
            <h2 className="font-bold sectionTitle">Our <span className="primaryColor">Featured</span> Products</h2>
            <p className="sectionSubtitle">Explore our handpicked collection of top-quality products, designed to meet <br /> your needs and enhance your lifestyle effortlessly</p>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 md:grid-cols-2">
                {
                    stationeryProducts?.data?.slice(0, 8)?.map(product => <ProductCart product={product} key={product?._id}></ProductCart>)
                }

            </div>
            <div className="flex items-center justify-center mt-6">
                <Link to='/allProducts'>
                    <button
                        style={{ borderRadius: "8px" }}
                        className="text-sm font-medium bg-[#fb5770] text-white hover:bg-[#e44d63] px-12 rounded-lg h-11 focus:outline-none"
                    >
                        View All
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedProducts;