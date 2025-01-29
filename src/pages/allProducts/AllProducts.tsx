import ProductCart from "@/components/ProductCart";
import { categoryOption } from "@/constants/category";
import { useGetAllProductsQuery } from "@/redux/features/product/productManagementApi";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
type TQueryParam = {
    name: string;
    value: any;
};
interface SearchFormValues {
    nameTerm: string;
    brandTerm: string;
    categoryTerm: string;
  }

const AllProducts = () => {
    // Properly type the state for search query
    const [searchQuery, setSearchQuery] = useState<TQueryParam[] | undefined>(undefined);
    const { data: stationeryProducts } = useGetAllProductsQuery(searchQuery); // Fetch data based on search query
    const { register, handleSubmit} = useForm<SearchFormValues>();
    console.log(searchQuery);
    // Handle form submission
    // const onSubmit: SubmitHandler<SearchFormValues> = (data) => {
    //     console.log(data);
        
    //     // Build query args dynamically for the API
    //     const args: TQueryParam[] | undefined =
    //       data.nameTerm || data.brandTerm || data.categoryTerm
    //         ? [
    //             { name: "name", value: data.nameTerm },
    //             { name: "brand", value: data.brandTerm },
    //             { name: "category", value: data.categoryTerm },
    //           ]
    //         : undefined;
      
    //     console.log(args);
    //     setSearchQuery(args);
    //   };


    const onSubmit: SubmitHandler<SearchFormValues> = (data) => {
        console.log(data);
      
        const args: TQueryParam[] | undefined =
          data.nameTerm || data.brandTerm || data.categoryTerm
            ? [
                { name: "name", value: data.nameTerm },
                { name: "brand", value: data.brandTerm },
                { name: "category", value: data.categoryTerm },
              ]
            : undefined;
      
        console.log(args);
        setSearchQuery(args);
      };


    return (
        <div className="px-4 my-8">
            <h2 className="font-bold sectionTitle">Our <span className="primaryColor">All</span> Products</h2>
            <p className="sectionSubtitle">Browse through our diverse collection of high-quality products, meticulously curated to cater to all your needs, offering the perfect balance of style, function, and durability for every occasion.</p>
            <div className="my-4">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex items-center gap-4 rounded-md"
                    style={{ borderRadius: "4px" }}
                >
                    <input
                        type="text"
                        placeholder="Search by name..."
                        {...register("nameTerm")}
                        style={{borderRadius: '4px'}}
                        className="flex-grow px-4 py-2 w-[200px] border-2 border-[#fb5770] outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Search by brand..."
                        {...register("brandTerm")}
                        style={{borderRadius: '4px'}}
                        className="flex-grow px-4 py-2 w-[200px] border-2 border-[#fb5770] outline-none"
                    />
                    <select
                        {...register("categoryTerm")}
                        style={{borderRadius: '4px'}}
                        className="flex-grow px-4 py-2 w-[200px] border-2 border-[#fb5770] outline-none"
                        defaultValue=""
                    >
                        <option value="" disabled>Select a category</option>
                        {
                            categoryOption?.map(product => <option value={product?.value} key={product?.label}>{product?.label}</option>)
                        }
                    </select>

                    <button
                        type="submit"
                        style={{borderRadius: '4px'}}
                        className="ml-2 px-4 py-2 bg-[#fb5770] text-white hover:bg-[#e04d62]"
                    >
                        Search
                    </button>
                </form>
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 md:grid-cols-2">
                {
                    stationeryProducts?.data?.map(product => <ProductCart product={product} key={product?._id}></ProductCart>)
                }

            </div>
        </div>
    );
};

export default AllProducts;