import BookCard from "./BookCard";

const BOOKS = [
  {
    author: "John SOUMANOU",
    title: "LA GUERRE DE TROIE",
    cover_url:
      "https://templates.iqonic.design/booksto/html/images/browse-books/01.jpg",
  },
  {
    author: "John SOUMANOU",
    title: "LA GUERRE DE TROIE",
    cover_url:
      "https://templates.iqonic.design/booksto/html/images/browse-books/02.jpg",
  },
  {
    author: "John SOUMANOU",
    title: "LA GUERRE DE TROIE",
    cover_url:
      "https://templates.iqonic.design/booksto/html/images/browse-books/03.jpg",
  },
  {
    author: "John SOUMANOU",
    title: "LA GUERRE DE TROIE",
    cover_url:
      "https://templates.iqonic.design/booksto/html/images/browse-books/04.jpg",
  },
  {
    author: "John SOUMANOU",
    title: "LA GUERRE DE TROIE",
    cover_url:
      "https://templates.iqonic.design/booksto/html/images/browse-books/05.jpg",
  },
  {
    author: "John SOUMANOU",
    title: "LA GUERRE DE TROIE",
    cover_url:
      "https://templates.iqonic.design/booksto/html/images/browse-books/06.jpg",
  },
  {
    author: "John SOUMANOU",
    title: "LA GUERRE DE TROIE",
    cover_url:
      "https://templates.iqonic.design/booksto/html/images/browse-books/07.jpg",
  },
  {
    author: "John SOUMANOU",
    title: "LA GUERRE DE TROIE",
    cover_url:
      "https://templates.iqonic.design/booksto/html/images/browse-books/08.jpg",
  },
  {
    author: "John SOUMANOU",
    title: "LA GUERRE DE TROIE",
    cover_url:
      "https://templates.iqonic.design/booksto/html/images/browse-books/09.jpg",
  },
];

export default function BooksPage() {
  return (
    <div className="row">
      {BOOKS.map((book) => {
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
