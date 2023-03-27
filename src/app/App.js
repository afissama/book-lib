import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../styles/App.css";
import BooksDetail from "./Books/BookDetail";
import BookPDF from "./Books/BookPDF";
import BooksPage from "./Books/BooksPage";
import ErrorPage from "./ErrorPage";
import { Worker } from '@react-pdf-viewer/core';
import Navigation from "./Navigation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <BooksPage />,
      },
      {
        path: "/book",
        element: <BooksDetail />,
      },
      {
        path: "/book/pdf",
        element: <BookPDF />,
      },
    ],
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
