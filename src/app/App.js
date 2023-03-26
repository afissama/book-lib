import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../styles/App.css";
import BooksDetail from "./Books/BookDetail";
import BooksPage from "./Books/BooksPage";
import ErrorPage from "./ErrorPage";
import Navigation from "./Navigation";

const router = createBrowserRouter([
{
  path: '/',
  element: <Navigation />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/',
      element: <BooksPage />
    },
    {
      path: '/book',
      element: <BooksDetail />
    }
  ]
}
]);

function App(){
  return (
    <RouterProvider router={router} />
  );
}

export default App;
