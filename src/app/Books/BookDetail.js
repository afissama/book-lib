import styles from "../../styles/Books/BooksDetail.module.css";

export default function BooksDetail() {
  return (
    <div className="row">
      <div className="col-sm-10">
        <div className="description-book align-items-top row">
          <div className="col-md-5">
            <div className={styles.cover}>
                <img src="https://templates.iqonic.design/booksto/html/images/book-dec/01.jpg" alt=""/>
            </div>
          </div>
          <div className="col-md-5">
            <div className={styles.infos}>
              <h3 className="mb-5">A casey Nigth books in the raza Dakota</h3>
              <div className="pb-5">
                <span>
                    Monterhing in the best book testem ipsum is simply dtest in find
                    in a of the printing and typeseting industry into to end.in find
                    in a of the printing and typeseting industry in find to make it
                    all done into end.
                </span>
              </div>

              <div className={`${styles.author} pb-5`}>
                Author: <span>ANDREA NEGREIA</span>
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
