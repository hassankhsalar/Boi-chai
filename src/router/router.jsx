import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import BookDetails from "../pages/BookDetails";
import AllBooks from "../pages/AllBooks";
import PrivateRoute from "./PrivateRoute";
import UpdateBook from "../pages/UpdateBook";
import AddBook from "../pages/AddBook";
import NotFound from "../pages/NotFound";
import CategoryPage from "../pages/CategoryPage";
import BorrowedBooks from "../pages/BorrowedBooks";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/allbooks',
          element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>
        },
        {
          path: '/category/:categoryName',
          element: <CategoryPage></CategoryPage>
        },
        {
          path: '/addbook',
          element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
        },
        {
          path: '/borrowedbooks',
          element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
        },
        {
          path: '/update-book/:id',
          element: <PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>,
        },
        {
          path: '/books/:id',
          element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
          loader: ({ params }) => fetch(`https://boi-chai-serverside.vercel.app/books/${params.id}`)
        },
      ]
    },
    {
      path: '*',
      element: <NotFound></NotFound>,
    },
  ]);

  export default router;