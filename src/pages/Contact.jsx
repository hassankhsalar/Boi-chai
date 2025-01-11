import React from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <Helmet>
        <title>Boi-Chai | Contact Us</title>
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mt-8 text-primary">Contact Us</h1>
          <p className="text-lg text-gray-600 mt-4">
            We'd love to hear from you! Whether you have questions, feedback, or
            suggestions, feel free to get in touch.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-secondary mb-6">
              Send Us a Message
            </h2>
            <form>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="textarea textarea-bordered w-full"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-accent text-white py-2 rounded-md hover:bg-primary transition hover:scale-105 w-full">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          {/* Contact Info */}
          <div className="flex flex-col justify-center bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-secondary mb-6">
              Reach Out to Us
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <span className="font-bold">Address:</span> Bashundara R/A, Bangladesh
              </p>
              <p>
                <span className="font-bold">Phone:</span>{" "}
                <a href="tel:+123456789" className="link link-hover">
                  +8801726798847
                </a>
              </p>
              <p>
                <span className="font-bold">Email:</span>{" "}
                <a href="mailto:support@boichai.com" className="link link-hover">
                  khsalarhassan@gmail.com
                </a>
              </p>
              <p className="mt-4">
                <span className="font-bold">Follow Us:</span>
              </p>
              <div className="flex items-center space-x-4">
                <a href="https://www.linkedin.com/in/salar-hassan-028167217/" target="_blank" rel="noreferrer">
                  <img
                    src="https://i.ibb.co.com/X7ygyPs/4-1.png"
                    alt="Facebook"
                    className="h-12 object-cover w-8"
                  />
                </a>
                <a href="https://github.com/hassankhsalar" target="_blank" rel="noreferrer">
                  <img
                    src="https://i.ibb.co.com/t3tTZTK/github-inverted-icon-512x499-xwqq0y67.png"
                    alt="Twitter"
                    className="h-8 w-8"
                  />
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
