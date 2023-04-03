import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../styles/App.css";
import BooksDetail from "./Books/BookDetail";
import BookPDF from "./Books/BookPDF";
import BooksPage from "./Books/BooksPage";
import ErrorPage from "./ErrorPage";
import { Worker } from "@react-pdf-viewer/core";
import Navigation from "./Navigation";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import ManageUpload from "./Managment/ManageUpload";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <BooksPage />,
        loader: async () => {
          return await axios
          .get("https://book-lib-api.herokuapp.com/books")
          .then((response) => {
            console.log(response.data);
            return response.data;
          });
        },
      },
      {
        path: "book/:bookId",
        element: <BooksDetail />,
        loader: async ({ params }) => {
          return await axios.get("https://book-lib-api.herokuapp.com/book/"+params.bookId)
                            .then((response) =>{
                              console.log(response.data);
                              return response.data;
                            })
        },
      },
      { path: "upload", element: <ManageUpload /> },
      {
        path: "book/:bookId/pdf",
        element: <BookPDF />,
        loader: async ({ params }) => {
          return await axios.get("https://book-lib-api.herokuapp.com/book/"+params.bookId)
          .then((response) =>{
            console.log(response.data);
            return response.data;
          });
        },
      },
      {
        path: "category/:catId",
        element: <BooksPage />,
        loader: async ({params}) => {
          return await axios.get("https://book-lib-api.herokuapp.com/category/"+params.catId)
          .then((response) =>{
            console.log(response.data);
            return response.data;
          });
        }
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

function App() {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <RouterProvider router={router} />
    </Worker>
  );
}

export default App;
