import React from 'react';

const Faq = () => {
    return (
        <div>
            <div className="max-w-2xl mt-6 mx-auto p-6 bg-background rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-center mb-6">
                Frequently Asked Questions
              </h2>
              {/* FAQ Items */}
              <div className="collapse bg-gradient-to-r from-primary to-secondary collapse-arrow bg-base-200">
                <input type="radio" name="faq-accordion" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  What is the purpose of this book borrowing navigator?
                </div>
                <div className="collapse-content">
                  <p>
                    This navigator provides information and guidance on how to
                    borrow books from our library effectively. It is designed to
                    assist you throughout the borrowing process.
                  </p>
                </div>
              </div>
              <div className="collapse bg-gradient-to-r from-secondary to-background collapse-arrow bg-base-200">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-xl font-medium">
                  How do I borrow a book using the navigator?
                </div>
                <div className="collapse-content">
                  <p>
                    To borrow a book, you can search our collection using the
                    navigator. Once you find a book you like, you can reserve it
                    directly through the application.
                  </p>
                </div>
              </div>
              <div className="collapse bg-gradient-to-r from-primary to-secondary collapse-arrow bg-base-200">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-xl font-medium">
                  Are there any fees for borrowing books?
                </div>
                <div className="collapse-content">
                  <p>
                    No, borrowing books from our library is completely free.
                    However, late returns may incur a small fee.
                  </p>
                </div>
              </div>
              <div className="collapse bg-gradient-to-r from-secondary to-background collapse-arrow bg-base-200">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-xl font-medium">
                  What happens if I lose a borrowed book?
                </div>
                <div className="collapse-content">
                  <p>
                    If you lose a borrowed book, please contact our support team
                    immediately. Depending on the circumstances, you may need to
                    pay for a replacement.
                  </p>
                </div>
              </div>
              <div className="collapse bg-gradient-to-r from-primary to-secondary collapse-arrow bg-base-200">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-xl font-medium">
                  How long can I keep a borrowed book?
                </div>
                <div className="collapse-content">
                  <p>
                    Generally, you can keep a borrowed book for up to three
                    weeks. If no one else has reserved it, you may have the
                    option to renew the loan.
                  </p>
                </div>
              </div>
              <div className="collapse bg-gradient-to-r from-secondary to-background collapse-arrow bg-base-200">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-xl font-medium">
                  Can I borrow eBooks through this navigator?
                </div>
                <div className="collapse-content">
                  <p>
                    Yes, our library offers a selection of eBooks that you can
                    borrow directly through this navigator. Just look for the
                    eBook options in the collection.
                  </p>
                </div>
              </div>
            </div>
          </div>
    );
};

export default Faq;