import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useInView } from "react-intersection-observer";
import "react-lazy-load-image-component/src/effects/blur.css";
import { AuthContext } from "../provider/AuthProvider";

// eslint-disable-next-line react/prop-types
const AllBooksCard = ({ book }) => {
  const { user } = useContext(AuthContext);

  const {
    _id,
    image,
    name,
    quantity,
    authorName,
    category,
    shortDescription,
    rating,
  } = book;

  // Intersection Observer for animation
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the card is visible
  });

  return (
    <div
      ref={ref}
      className={`max-w-sm flex flex-col justify-between rounded-xl overflow-hidden shadow-lg bg-background transition-transform duration-1000 ease-out ${
        inView ? "scale-100 opacity-100" : "scale-90 opacity-0"
      }`}
    >
      {/* Lazy-loaded Book Image */}
      <LazyLoadImage
        src={image}
        alt={name}
        effect="blur"
        className="w-96 h-48 object-cover"
      />

      {/* Card Content */}
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Author:</span> {authorName}
        </p>
        <p className="text-sm text-gray-600 mb-3">
          <span className="font-medium">Category:</span> {category}
        </p>
        <p className="text-gray-700 text-base mb-3">{shortDescription}</p>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Quantity:</span> {quantity}
          </p>
          <p className="flex items-center text-sm text-gray-600">
            <span className="font-medium mr-1">Rating:</span>
            <span className="text-yellow-500 font-bold">{rating}</span>
            <span className="text-yellow-500 ml-1">★</span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4">
        {user && (
          <Link to={`/update-book/${_id}`}>
            <button className="w-full bg-accent text-white py-2 rounded-md hover:bg-primary transition hover:scale-105">
              Update Book
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AllBooksCard;
