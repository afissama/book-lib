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

const BOOKS = [
  {
    id:1,
    author: "John SOUMANOU",
    title: "LA GUERRE DE TROIE",
    cover_url:
      "https://templates.iqonic.design/booksto/html/images/browse-books/01.jpg",
    category: 1,
    book_url: "https://res.cloudinary.com/dmniahx2e/image/upload/v1680341572/books/Fairness_in_ML___presentation_beofdk.pdf"
  },
  {
    id:2,
    author: "WILLIAM FAULKNER",
    title: " ABSALOM, ABSALOM!",
    cover_url:
      "https://templates.iqonic.design/booksto/html/images/browse-books/02.jpg",
    category: 1,
    book_url: "/pdf/legacy-code.pdf"
  },
  {
    id:3,
    author: "John SOUMANOU",
    title: "LA GUERRE DE TROIE",
    cover_url:
      "https://templates.iqonic.design/booksto/html/images/browse-books/03.jpg",
    category: 1,
    book_url: "/pdf/legacy-code.pdf"
  },
  {
    id:4,
    author: "John SOUMANOU",
    title: " A TIME TO KILL ",
    cover_url:
      "https://templates.iqonic.design/booksto/html/images/browse-books/04.jpg",
    category: 1,
    book_url: "/pdf/how-study.pdf"
  },
  {
    id:5,
    author: "John SOUMANOU",
    title: "THE HOUSE OF MIRTH",
    cover_url:
      "https://templates.iqonic.design/booksto/html/images/browse-books/05.jpg",
    category: 1,
    book_url: "/pdf/how-study.pdf"
  },
  {
    id:6,
    author: "John SOUMANOU",
    title: "THE HOUSE OF MIRTH",
    cover_url:
      "https://templates.iqonic.design/booksto/html/images/browse-books/06.jpg",
    category: 1,
    book_url: "/pdf/how-study.pdf"
  },
  {
    id:7,
    author: "John SOUMANOU",
    title: "THE HOUSE OF MIRTH",
    cover_url:
      "https://templates.iqonic.design/booksto/html/images/browse-books/07.jpg",
    category: 2,
    book_url: "/pdf/how-study.pdf"
  },
  {
    id:8,
    author: "John SOUMANOU",
    title: "THE HOUSE OF MIRTH",
    cover_url:
      "https://templates.iqonic.design/booksto/html/images/browse-books/08.jpg",
    category: 2,
    book_url: "/pdf/how-study.pdf"
  },
  {
    id:9,
    author: "John SOUMANOU",
    title: "PRAGMATIC PROGRAMER",
    cover_url:
      "https://templates.iqonic.design/booksto/html/images/browse-books/09.jpg",
    category: 2,
    book_url: "/pdf/how-study.pdf"
  },
];

const getBookByID = (id) =>{
  return BOOKS.filter(book => {
    return book.id === id;
  })
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <BooksPage />, loader: () =>{
        return BOOKS;
      }
      },
      { path: "book/:bookId", element: <BooksDetail />, loader: ({params}) =>{
        return getBookByID(+params.bookId);
      }},
      {path: 'upload', element: <ManageUpload />},
      { path: "book/:bookId/pdf", element: <BookPDF />, loader: ({params}) =>{
        return getBookByID(+params.bookId);
      }},
      { path: "category/:catId", element: <BooksPage />, loader: ({params}) =>{
          return BOOKS.filter(book =>{
            return book.category === +params.catId;
        });
      }},
    ],
  },
  {
    path:"/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignUp />
  }
]);

function App() {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <RouterProvider router={router} />
    </Worker>
  );
}

export default App;
