import BlogCart from "./BlogCart";


 export type TBlog = {
    image: string,
    title: string,
    description: string,
    date: string,
    author: string,
    isNew: boolean
}

const Blogs = () => {
    const blogs = [
        {
            image: "https://img.freepik.com/premium-photo/girl-holds-shopping-list-debit-card-chooses-gifts-makes-purchase-laptop-coffee-cup_72679-1617.jpg?ga=GA1.1.1520422090.1699525632&semt=ais_hybrid",
            title: "10 Tips for Effective Online Shopping",
            description: "Learn how to shop smart, save money, and maximize deals.",
            date: "Jan 28, 2025",
            author: "Mr. Jon",
            isNew: true
        },
        {
            image: "https://img.freepik.com/premium-photo/fashionable-brunette-woman-with-long-hair-wearing-stylish-large-wicker-hat-posing-against-white-wall-with-holes_178605-3107.jpg?ga=GA1.1.1520422090.1699525632&semt=ais_hybrid",
            title: "Top Fashion Trends in 2025: Bold, Sustainable, Stylish",
            description: "Discover the latest trends dominating the fashion industry.",
            date: "Jan 15, 2025",
            author: "Jane Smith",
        },
        {
            image: "https://img.freepik.com/premium-photo/woman-writing-notebook-with-pencils-plants-turquoise-wooden-table_1346134-41999.jpg?ga=GA1.1.1520422090.1699525632&semt=ais_hybrid",
            title: "How to Stay Organized with the Perfect Planner",
            description: "Discover the planners that can help you stay on track and achieve your goals effortlessly.",
            date: "Dec 20, 2024",
            author: "David Brown",
        }
    ];

    return (
        <div className="px-4 my-8 lg:px-0">
            <h2 className="font-bold sectionTitle">Latest <span className="primaryColor">Blogs</span></h2>
            <p className="sectionSubtitle"> Stay updated with our most recent articles and insights!</p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog , index) => (
                    <BlogCart  key={index} {...blog as TBlog} />
                ))}
            </div>
        </div>
    );
};

export default Blogs;
