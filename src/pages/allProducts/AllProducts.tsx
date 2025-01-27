import ProductCart from "@/components/ProductCart";
import { useGetAllProductsQuery } from "@/redux/features/product/productManagementApi";

const AllProducts = () => {
    const { data: stationeryProducts } = useGetAllProductsQuery(undefined);
    return (
        <div className="my-8">
            <h2 className="font-bold sectionTitle">Our <span className="primaryColor">All</span> Products</h2>
            <p className="sectionSubtitle">Browse through our diverse collection of high-quality products, meticulously curated to cater to all your needs, offering the perfect balance of style, function, and durability for every occasion.</p>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 md:grid-cols-2">
                {
                    stationeryProducts?.data?.map(product => <ProductCart product={product} key={product?._id}></ProductCart>)
                }

            </div>
        </div>
    );
};

export default AllProducts;