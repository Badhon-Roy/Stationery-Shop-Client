import Banner from "@/components/Banner";
import Blogs from "@/components/Blogs";
import FeaturedProducts from "@/components/FeaturedProducts";
import FilterCategoryProducts from "@/components/FilterCategoryProducts";
import WritingProducts from "@/components/WritingProducts";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    const handleScroll = () => {
      AOS.refresh(); // Refresh AOS on scroll to re-trigger animations
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Banner />
      <FeaturedProducts />
      <FilterCategoryProducts />
      <WritingProducts />
      <Blogs />
    </div>
  );
};

export default Home;