import classes from "../../styles/Books/BookCard.module.css";
const BookCard = (props) => {
  return (
    <div className={`"col-sm-6 col-md-4 col-lg-3" ${classes["cardbook"]}`}>
      <div className={classes["browse-book-card-content"]}>
        <div className={classes["card-body"]}>
          <div
            className={` d-flex align-items-center ${classes["card-items"]}`}
          >
            <div
              className={`col-6 p-0 position-relative ${classes["img-item"]}`}
            >
              <a href="#">
                <img
                  class="img-fluid rounded w-100"
                  src={props.coverURL}
                  alt=""
                />
              </a>
              <div className="view-book"></div>
            </div>
            <div className={`col-6 ${classes["item-text"]}`}>
              <div className="mb-2">
                <h6 className="mb-1">{props.title}</h6>
                <p className="font-size-13 line-height mb-1">{props.author}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
