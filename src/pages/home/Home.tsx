import Banner from "@/components/Banner";
import Blogs from "@/components/Blogs";
import FeaturedProducts from "@/components/FeaturedProducts";
import FilterCategoryProducts from "@/components/FilterCategoryProducts";
import WritingProducts from "@/components/WritingProducts";

const Home = () => {
    return (
        <div>
            <Banner/>
            <FeaturedProducts/>
            <FilterCategoryProducts/>
            <WritingProducts/>
            <Blogs/>
        </div>
    );
};

export default Home;