# Frontend - Book Borrowing Platform

This is the frontend for a web-based Book Borrowing Platform, built using **React**. The platform allows users to explore a collection of books, borrow books, and manage their borrowed book list.

## Features

- **Dynamic Navbar:** 
  - Conditional rendering for Login/Register or User Profile with Logout.
  - Navigation to Home, All Books, Add Book, Borrowed Books, and Authentication pages.
  
- **Protected Routes:** 
  - "All Books", "Add Book", and "Borrowed Books" are accessible only to logged-in users.

- **Dynamic Title:** 
  - Each route updates the browser's title dynamically.

- **Home Page:** 
  - Banner with a slider featuring 3 slides.
  - Book Categories section with 4 clickable cards.
  - Two additional meaningful sections.
  
- **All Books Page:**
  - Displays books with filtering (by category, availability) and sorting (by rating).
  - Toggle between Card View and Table View.
  - Includes an Update button for editing book details.

- **Add Book Page:** 
  - A form to add new books to the database, available only for logged-in users.

- **Borrowed Books Page:**
  - Displays books borrowed by the logged-in user.
  - "Return" button to return books and update their quantity.

- **Authentication:** 
  - Login and Registration with email/password and Google login.
  - Password validation: Uppercase, lowercase, and at least 6 characters.

- **Book Details Page:**
  - Shows comprehensive information about a book.
  - Includes a "Borrow" button that decreases the quantity and adds the book to the Borrowed Books list.

- **Error Handling:**
  - Custom 404 page.
  - Loading spinner for data fetch states.
  - Toast notifications for CRUD operations and authentication.

## Technology Stack

- **Frontend Framework:** React
- **Styling:** Tailwind CSS, DaisyUI
- **Routing:** React Router
- **Authentication:** Firebase
- **State Management:** React Context API / State Hooks
- **Notifications:** React Toastify + SweetAlert2
