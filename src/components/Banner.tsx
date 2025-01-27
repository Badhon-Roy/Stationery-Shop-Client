import MainButton from "./customButton/MainButton";
import OutlineButton from "./customButton/OutlineButton";
import { Card } from "./ui/card";

const Banner = () => {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="px-4 mx-auto lg:px-0">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
                    <div className="max-w-2xl">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl ">
                            Premium <span className="primaryColor">Stationery</span>
                            <br />
                            Supplies
                        </h1>
                        <p className="mb-8 text-lg text-muted-foreground">
                            Discover our curated collection of high-quality stationery essentials. From premium notebooks to luxury
                            pens, we have everything you need to make your ideas come to life.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <MainButton text='GET STARTED NOW'></MainButton>
                            <OutlineButton text='LEARN MORE' />
                        </div>



                        <div className="grid gap-6 mt-12 sm:grid-cols-2">
                            {/* Card 1 */}
                            <Card className="p-6 bg-gradient-to-br from-[#fb5770] via-[#ff7e91] to-[#ffb8c3] shadow-lg rounded-xl">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-3 bg-white rounded-full shadow">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-[#fb5770]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5.121 17.804A4 4 0 117.804 5.12l6.364 6.364a4 4 0 11-2.683 2.683l-6.364 6.364z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-3xl font-bold text-white">15K+</span>
                                </div>
                                <p className="text-lg font-bold text-white">Happy Customers</p>
                            </Card>

                            {/* Card 2 */}
                            <Card className="p-6 bg-gradient-to-br from-[#7cc000] via-[#9adf57] to-[#c4f58b] shadow-lg rounded-xl">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-3 bg-white rounded-full shadow">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-[#7cc000]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8 16l-4-4m0 0l4-4m-4 4h16m-8 4h8m0 0l-4 4m4-4l-4-4"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-3xl font-bold text-white">1000+</span>
                                </div>
                                <p className="text-lg font-bold text-white">Products Available</p>
                            </Card>
                        </div>

                    </div>

                    <div className="relative lg:h-full min-h-[400px]">
                        <div className="absolute inset-0 rounded-full bg-primary/10"></div>
                        <div className="relative z-10 flex items-center justify-center h-full">
                            <img
                                src="https://img.freepik.com/free-vector/different-stationery-items-blue-plastic-glass-composition-red-circle-white-background-realistic-vector-illustration_1284-19882.jpg?ga=GA1.1.1520422090.1699525632&semt=ais_hybrid"
                                alt="Stationery collection"
                                width={600}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;