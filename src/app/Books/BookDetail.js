import styles from "../../styles/Books/BooksDetail.module.css";
import { Link, useLoaderData } from "react-router-dom";

export default function BooksDetail() {

  const book = useLoaderData();
  console.log(book);

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="description-book align-items-top row">
          <div className="col-md-6">
            <div className={styles.cover}>
                <img src={`${book.cover}`} alt=""/>
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.infos}>
              <h3 className="mb-5">{book.title}</h3>
              <div className="pb-5">
                <span>
                  {book.description}
                </span>
              </div>

              <div className={`${styles.author} pb-5`}>
                Author: <span>{book.author}</span>
              </div>

              <div className="pt-5">
                <Link to={`/book/${book.id}/pdf`} className="btn btn-primary">READ THE BOOK</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
