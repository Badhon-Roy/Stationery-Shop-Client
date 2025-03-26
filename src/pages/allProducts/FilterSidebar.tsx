
import { Checkbox } from "@/components/ui/checkbox";
import { useGetAllCategoryQuery } from "@/redux/features/category/categoryManagementApi";

const FilterSidebar = () => {
    const { data: categories } = useGetAllCategoryQuery(undefined);
    return (
        <div className="p-4 bg-white border rounded-lg shadow-md md:w-72">
            <h2 className="mb-4 text-xl font-semibold">Filter Products</h2>

            {/* Category Filter */}
            <div>
                <h3 className="mb-2 text-lg font-medium">Filter by Category</h3>
                <div className="space-y-3">
                    {
                        categories?.data?.map(category => (
                            <div key={category?._id} className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    {category?.name}
                                </label>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Price Range Filter */}
            <div className="mt-4">
                <h3 className="mb-2 text-lg font-medium">Price Range</h3>
                <div className="flex items-center gap-2">
                    <input
                        type="number"
                        className="w-1/2 p-2 border rounded-md"
                    />
                    <span>—</span>
                    <input
                        type="number"
                        className="w-1/2 p-2 border rounded-md"
                    />
                </div>
            </div>

            {/* Reset Button */}
            <button
                className="w-full py-2 mt-4 text-white bg-gray-600 rounded-md hover:bg-gray-800"
            >
                Reset Filters
            </button>
        </div>
    );
};

export default FilterSidebar;
