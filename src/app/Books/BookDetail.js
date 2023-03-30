import styles from "../../styles/Books/BooksDetail.module.css";
import { useLoaderData } from "react-router-dom";

export default function BooksDetail() {

  const book = useLoaderData()[0];

  return (
    <div className="row">
      <div className="col-sm-10">
        <div className="description-book align-items-top row">
          <div className="col-md-5">
            <div className={styles.cover}>
                <img src={`${book.cover_url}`} alt=""/>
            </div>
          </div>
          <div className="col-md-5">
            <div className={styles.infos}>
              <h3 className="mb-5">{book.title}</h3>
              <div className="pb-5">
                <span>
                    Monterhing in the best book testem ipsum is simply dtest in find
                    in a of the printing and typeseting industry into to end.in find
                    in a of the printing and typeseting industry in find to make it
                    all done into end.
                </span>
              </div>

              <div className={`${styles.author} pb-5`}>
                Author: <span>{book.author}</span>
              </div>

              <div className="pt-5">
                <a href="#" className="btn btn-primary">READ THE BOOK</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
