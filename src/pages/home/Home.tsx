import Banner from "@/components/Banner";
import Blogs from "@/components/Blogs";
import FeaturedProducts from "@/components/FeaturedProducts";

const Home = () => {
    return (
        <div>
            <Banner/>
            <FeaturedProducts/>
            <Blogs/>
        </div>
    );
};

export default Home;