import React, { useState } from "react";

const CallToAction = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://boi-chai-serverside.vercel.app/subscriber", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      setSuccessMessage(data.message);
      setEmail("");
      setShowModal(false);
    } else {
      setSuccessMessage("Something went wrong. Try again.");
    }
  };

  return (
    <div>
      <section className="py-6 bg-primary rounded-xl dark:bg-gray-100 text-gray-50 dark:text-gray-900 mb-10">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-5xl font-bold leading-none text-center">
            Sign up now
          </h1>
          <p className="text-xl font-medium text-center">
            Subscribe Now! to know the latest update and offers from us
          </p>
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-3 text-lg font-semibold rounded bg-accent dark:bg-violet-600 text-gray-50 border-2"
            >
              Get started
            </button>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-8 rounded-lg shadow-md w-96 text-gray-900">
            <h2 className="text-xl font-semibold mb-4">Subscribe</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full p-2 border rounded mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {successMessage && (
        <p className="text-center text-green-600 font-medium">{successMessage}</p>
      )}
    </div>
  );
};

export default CallToAction;
