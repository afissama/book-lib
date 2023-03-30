import BookCard from "./BookCard";
import styles from "../../styles/Books/BooksPage.module.css";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";



function filterByTitle(book, title) {
  return book.title.trim().toLowerCase().includes(title.toLowerCase());
}


export default function BooksPage(props) {
  const books = useLoaderData();
  const [filteredBooks, setfilteredBooks] = useState(books);

  useEffect(()=>{
    setfilteredBooks((oldbooks) => {
      return books;
    });
  },[books]);

  
  const inputChangeHandler = (event) => {
    setfilteredBooks((oldbooks) => {
      return books.filter((book) => {
        return filterByTitle(book, event.target.value);
      });
    });
  };

  return (
    <div className="row">
      <div>
        <form className={styles["form-control"]}>
          <input
            type="text"
            placeholder="search here..."
            onChange={inputChangeHandler}
          />
        </form>
      </div>
      {filteredBooks.map((book) => {
        return (
          <BookCard
            title={book.title}
            author={book.author}
            coverURL={book.cover_url}
          />
        );
      })}
    </div>
  );
}
