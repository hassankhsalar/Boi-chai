import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddBook = () => {
  const navigate = useNavigate();
  const [bookData, setBookData] = useState({
    image: "",
    name: "",
    quantity: 0,
    authorName: "",
    category: "",
    shortDescription: "",
    rating: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://boi-chai-serverside.vercel.app/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to add book");
        }
        return res.json();
      })
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Book added successfully.",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/allbooks");
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to add the book. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <>
      <Helmet>
        <title>Add a New Book - Book Management</title>
      </Helmet>

      {/* <div className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Add a New Book</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 mt-24">
            Image URL:
            <input
              type="text"
              name="image"
              value={bookData.image}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block mb-2">
            Name:
            <input
              type="text"
              name="name"
              value={bookData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block mb-2">
            Quantity:
            <input
              type="number"
              name="quantity"
              value={bookData.quantity}
              onChange={handleChange}
              min="0"
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block mb-2">
            Author Name:
            <input
              type="text"
              name="authorName"
              value={bookData.authorName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block mb-2">
            Category:
            <select
              name="category"
              value={bookData.category}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Category</option>
              <option value="Novel">Novel</option>
              <option value="Thriller">Thriller</option>
              <option value="History">History</option>
              <option value="Drama">Drama</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
          </label>
          <label className="block mb-2">
            Short Description:
            <textarea
              name="shortDescription"
              value={bookData.shortDescription}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block mb-2">
            Rating:
            <input
              type="number"
              name="rating"
              value={bookData.rating}
              onChange={handleChange}
              min="1"
              max="5"
              className="w-full p-2 border rounded"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            Add Book
          </button>
        </form>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Book Content</h3>
          <p>
            Books provide a gateway to countless adventures, knowledge, and
            experiences. Fill out the form above to add a book to the
            collection!
          </p>
        </div>
      </div> */}

      <section className="p-6 text-gray-50">
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="container mt-36 flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-primary">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium text-3xl">Add New Book</p>
              <p className="text-base">
              Books provide a gateway to countless adventures, knowledge, and
            experiences. Fill out the form above to add a book to the
            collection!
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Image URL:
                </label>
                <input
                  //id="firstname"
                  type="text"
                  name="image"
                  value={bookData.image}
                  onChange={handleChange}
                  placeholder="Image URL:"
                  className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Name:
                </label>
                <input
                  //id="lastname"
                  type="text"
                  name="name"
                  value={bookData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Quantity:
                </label>
                <input
                  //id="email"
                  type="number"
                  name="quantity"
                  value={bookData.quantity}
                  onChange={handleChange}
                  min="0"
                  className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Author Name:
                </label>
                <input
                  //id="email"
                  type="text"
                  name="authorName"
                  value={bookData.authorName}
                  onChange={handleChange}
                  placeholder="Author"
                  className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Category:
                </label>
                <select
                  name="category"
                  value={bookData.category}
                  onChange={handleChange}
                  className="w-full p-1 border rounded focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                >
                  <option value="">Select Category</option>
                  <option value="Novel">Novel</option>
                  <option value="Thriller">Thriller</option>
                  <option value="History">History</option>
                  <option value="Drama">Drama</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-4">
                <label htmlFor="city" className="text-sm">
                  Short Description:
                </label>
                <textarea
                  name="shortDescription"
                  value={bookData.shortDescription}
                  onChange={handleChange}
                  className="w-full h-20 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="state" className="text-sm">
                  Rating:
                </label>
                <input
                  id="state"
                  type="number"
                  name="rating"
                  value={bookData.rating}
                  onChange={handleChange}
                  min="1"
                  max="5"
                  className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>
            </div>
          </fieldset>
          <button
            type="submit"
            className="bg-accent hover:bg-primary hover:scale-105 text-white w-60 mx-auto px-4 py-2 rounded mt-2"
          >
            Add Book
          </button>
        </form>
      </section>
    </>
  );
};

export default AddBook;
