import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../components/Banner";
import CategoryCard from "../components/CategoryCard";
import Faq from "../components/Faq";
import About from "../components/About";
import Testimonials from "../components/Testimonials";

const categories = [
  { name: "Novel", description: "Explore various novel books." },
  { name: "Thriller", description: "Dive into thrilling works." },
  { name: "Drama", description: "Discover books on drama." },
  {
    name: "History",
    description: "Learn about the past through historical books.",
  },
  { name: "Sci-Fi", description: "Discover books on science and technology." },
  { name: "All-Type", description: "Discover books in general." },
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Explore Books</title>
      </Helmet>

      <div className="grid grid-cols-6">
        <div className=" col-span-6">
          <div className="h-auto mx-auto mt-24">
            <Banner />
          </div>

          <div>
            <h2 className="text-2xl font-semibold my-3 text-center text-primary">
              Explore Categories
            </h2>
          </div>

          {/* Category Cards Section */}
          <div className="w-full md:w-10/12 lg:w-9/12 mx-auto my-6">
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category) => (
                <CategoryCard key={category.name} category={category} />
              ))}
            </div>
          </div>
          {/* reviews */}
          <div className="w-full bg-background rounded-2xl my-8">
          <Testimonials/>
          </div>
          

          {/* Extra sections */}
          <About></About>

          {/* FAQs Section */}
          <Faq></Faq>
        </div>
      </div>
    </>
  );
};

export default Home;
