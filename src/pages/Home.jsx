import React from 'react';
import Banner from '../components/Banner';
import Books from './Books';

const Home = () => {
    return (
        <div className='grid grid-cols-6'>
            <aside className='border-2 col-span-1'>
                side bar
            </aside>
            <div className='border-2 col-span-5'>
            <div className="h-62 mx-auto text-blue-500">
        <h2 className="text-2xl font-semibold my-3 text-center">
          "The world is a book, and those who do not travel read only one page." — Saint Augustine
        </h2>
        <Banner></Banner>
      </div>

      <div>
        <h2 className="text-2xl font-semibold my-3 text-center text-blue-500">
          Trending Books
        </h2>
      </div>

      <div className=" w-9/12 mx-auto">
        <Books></Books>
      </div>

      <div className="w-8/12 mx-auto text-center">
        <button
          className="btn btn-secondary w-full my-6"
          
        >
          All Books
        </button>
      </div>

      {/* Extra sections */}
<div className='w-9/12 mx-auto'>
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">ABOUT THIS NAVIGATOR</h2>
          <p className="text-gray-700 mb-4">
              <strong>NO INFORMATION COLLECTED:</strong> Any answers you provide are anonymous. No personally identifiable information, including IP address, is collected from this application, and the Agency has no way of connecting responses to any individual.
          </p>
          <p className="text-gray-700 mb-4">
              The Navigator is not an online application. Completing the navigator does not entitle you to a Agency or any other immigration benefit. The Agency or consulate may require you to provide additional information or supporting documents before acting on your request.
          </p>
          <h3 className="text-lg font-medium text-gray-800 mb-2">ACCESSIBILITY</h3>
          <p className="text-gray-700 mb-2">
              Google Forms has certain software limitations. We have provided alternatives throughout for the following issues that users will encounter:
          </p>
          <ul className="list-disc list-inside text-gray-700">
              <li>Repeated page titles when using screen readers</li>
              <li>Color contrast for buttons</li>
              <li>Areas where screen readers announce additional blank spaces</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="max-w-2xl mx-auto p-6 bg-base-100 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>

          {/* FAQ 1 */}
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What is the purpose of this navigator?
            </div>
            <div className="collapse-content">
              <p>
                This navigator provides information and guidance for users. It is not an official application for any visa or immigration benefit.
              </p>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="collapse collapse-arrow bg-base-200 mt-4">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              Is my information collected or stored?
            </div>
            <div className="collapse-content">
              <p>
                No, this navigator does not collect or store any personally identifiable information, including your IP address.
              </p>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="collapse collapse-arrow bg-base-200 mt-4">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              Does completing the navigator guarantee a visa?
            </div>
            <div className="collapse-content">
              <p>
                No, completing the navigator does not guarantee a visa or any immigration benefit. Additional documents or information may be required by the embassy or consulate.
              </p>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="collapse collapse-arrow bg-base-200 mt-4">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              What are the accessibility features of this navigator?
            </div>
            <div className="collapse-content">
              <p>
                The navigator addresses issues like repeated page titles for screen readers, improved color contrast for buttons, and adjustments for spaces announced by screen readers.
              </p>
            </div>
          </div>
        </div>
      </div>
            </div>
        </div>
    );
};

export default Home;