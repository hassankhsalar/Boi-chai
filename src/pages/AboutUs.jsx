import React from "react";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <Helmet>
        <title>Boi-Chai | About Us</title>
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mt-10 text-primary">About Boi-Chai</h1>
          <p className="text-lg text-gray-600 mt-4">
            Your ultimate destination for book lovers and literary enthusiasts.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* About Image */}
          <div className="lg:w-1/2">
            <img
              src="https://i.ibb.co.com/2ZKxvCY/L-16972705246418-the-library.jpg"
              alt="Bookshelf"
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* About Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-secondary mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 mb-6">
              At Boi-Chai, we believe in the power of stories to inspire, educate, and
              connect. Our mission is to make books accessible to everyone, bridging the
              gap between readers and their favorite titles. Whether you're looking to
              borrow, buy, or discuss, we have something for everyone.
            </p>
            <h2 className="text-3xl font-semibold text-secondary mb-4">
              What We Offer
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Access to a vast collection of books across various genres.</li>
              <li>
                User-friendly platform for borrowing, buying, or sharing books.
              </li>
              <li>Interactive features to engage with fellow readers.</li>
              <li>Regular updates on book reviews, discussions, and more.</li>
            </ul>
            <div className="mt-6">
              <a
                href="/contact"
                className="btn bg-accent text-black py-2 rounded-md hover:bg-primary transition hover:text-white hover:scale-105"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
