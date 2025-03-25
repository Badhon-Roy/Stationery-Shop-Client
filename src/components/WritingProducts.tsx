import { useGetAllProductsQuery } from "@/redux/features/product/productManagementApi";
import { TProduct } from "@/types";
import { Link } from "react-router-dom";


const WritingProducts = () => {
    const { data: products } = useGetAllProductsQuery(undefined)
    const writingProducts = products?.data?.filter((product: TProduct) => product?.category?.name === 'Writing')
    return (
        <div className="my-32 ">
            <div className="flex items-center justify-between gap-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-700">Cute Writing Products</h2>
                <Link to='/allProducts'>
                    <button
                        style={{ borderRadius: "8px" }}
                        className="text-sm font-medium bg-[#fb5770] text-white hover:bg-[#e44d63] px-12 rounded-lg h-11 focus:outline-none"
                    >
                        View All
                    </button>
                </Link>
            </div>
            <div className="flex justify-between gap-8">
                <div className="grid w-2/3 grid-cols-4 gap-4">
                    {
                        writingProducts?.slice(0, 8)?.map((product: TProduct) => (
                            <div key={product?._id} className="bg-white border shadow rounded-xl">
                                <img className="h-[200px] w-full object-cover rounded-t-xl" src={product?.image} alt="" />
                                <div className="p-4">
                                    <Link to={`/productDetails/${product?._id}`} >
                                        <h2 className="text-lg font-medium text-center text-gray-700 hover:text-[#fb5770] hover:underline">{product?.name}</h2></Link>
                                    <p className="text-[#fb5770] text-lg font-bold text-center">{product?.price}tk</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="w-1/3">
                    <div className="flex flex-col items-center w-full h-full" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/digital-pen-writing-code-with-blue-light-effects-background-representing-ai-powered-content-writing-automated-content-generation-digital-content-creation_982248-11880.jpg?ga=GA1.1.2122364497.1742731770&semt=ais_hybrid')", backgroundSize: "cover", backgroundPosition: "center", borderRadius: '8px' }} >

                        <h2 className="mt-16 text-4xl font-bold text-white">Writing Accessories</h2>
                        <button
                            style={{
                                borderRadius: "8px",
                            }}
                            className="text-sm mt-8 font-medium border border-white bg-white text-[#fb5770] hover:bg-[#fb5770] hover:text-white px-8 rounded-lg h-11 focus:outline-none"
                        >
                            Shop now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WritingProducts;