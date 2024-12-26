import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../components/Banner';
import CategoryCard from '../components/CategoryCard';

const categories = [
    { name: 'Novel', description: 'Explore various novel books.' },
    { name: 'Thriller', description: 'Dive into thrilling works.' },
    { name: 'Drama', description: 'Discover books on drama.' },
    { name: 'History', description: 'Learn about the past through historical books.' },
    { name: 'Sci-Fi', description: 'Discover books on science and technology.' },
    { name: 'All-Type', description: 'Discover books in general.' },
    
];

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home - Explore Books</title>
                
            </Helmet>
            
            <div className='grid grid-cols-6'>
                
                <div className=' col-span-6'>
                    <div className="h-62 mx-auto text-blue-500">
                        <h2 className="text-2xl w-7/12 mx-auto font-semibold my-3 text-center">
                        “The more that you read, the more things you will know. The more that you learn, the more places you’ll go.” – Dr. Seuss
                        </h2>
                        <Banner />
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold my-3 text-center text-blue-500">
                            Explore Categories
                        </h2>
                    </div>

                    {/* Category Cards Section */}
                    <div className="w-9/12 mx-auto my-6">
                        <div className="grid grid-cols-2 gap-4">
                            {categories.map((category) => (
                                <CategoryCard key={category.name} category={category} />
                            ))}
                        </div>
                    </div>

                    {/* Extra sections */}
<div className='w-9/12 mx-auto'>
    <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">ABOUT BOI_CHAI</h2>
        <p className="text-gray-700 mb-4">
            <strong>NO INFORMATION COLLECTED:</strong> Any answers you provide are anonymous. No personally identifiable information, including IP address, is collected from this application.
        </p>
        <p className="text-gray-700 mb-4">
            This website is designed to help you understand the process of borrowing books from our collection. It provides guidance on how to select, reserve, and return books effectively.
        </p>
        <h3 className="text-lg font-medium text-gray-800 mb-2">ACCESSIBILITY</h3>
        <p className="text-gray-700 mb-2">
            This application aims to be user-friendly. However, certain limitations may exist. We have provided alternatives throughout for the following issues that users may encounter:
        </p>
        <ul className="list-disc list-inside text-gray-700">
            <li>Repeated page titles when using screen readers</li>
            <li>Color contrast for buttons</li>
            <li>Areas where screen readers announce additional blank spaces</li>
        </ul>
    </div>
</div>

{/* FAQs Section */}
<div>
    <div className="max-w-2xl mx-auto p-6 bg-base-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        {/* FAQ Items */}
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title text-xl font-medium">
                What is the purpose of this book borrowing navigator?
            </div>
            <div className="collapse-content">
                <p>This navigator provides information and guidance on how to borrow books from our library effectively. It is designed to assist you throughout the borrowing process.</p>
            </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
                How do I borrow a book using the navigator?
            </div>
            <div className="collapse-content">
                <p>To borrow a book, you can search our collection using the navigator. Once you find a book you like, you can reserve it directly through the application.</p>
            </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
                Are there any fees for borrowing books?
            </div>
            <div className="collapse-content">
                <p>No, borrowing books from our library is completely free. However, late returns may incur a small fee.</p>
            </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
                What happens if I lose a borrowed book?
            </div>
            <div className="collapse-content">
                <p>If you lose a borrowed book, please contact our support team immediately. Depending on the circumstances, you may need to pay for a replacement.</p>
            </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
                How long can I keep a borrowed book?
            </div>
            <div className="collapse-content">
                <p>Generally, you can keep a borrowed book for up to three weeks. If no one else has reserved it, you may have the option to renew the loan.</p>
            </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
                Can I borrow eBooks through this navigator?
            </div>
            <div className="collapse-content">
                <p>Yes, our library offers a selection of eBooks that you can borrow directly through this navigator. Just look for the eBook options in the collection.</p>
            </div>
        </div>
    </div>
</div>

                </div>
            </div>
        </>
    );
};

export default Home;
