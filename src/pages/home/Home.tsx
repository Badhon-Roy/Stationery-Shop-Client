import Banner from "@/components/Banner";
import Blogs from "@/components/Blogs";
import FeaturedProducts from "@/components/FeaturedProducts";
import FilterCategoryProducts from "@/components/FilterCategoryProducts";

const Home = () => {
    return (
        <div>
            <Banner/>
            <FeaturedProducts/>
            <FilterCategoryProducts/>
            <Blogs/>
        </div>
    );
};

export default Home;