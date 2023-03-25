import pagecontent_style from "../../styles/Layouts/PageContent.module.css";
import BookCard from "../Books/BookCard";
const PageContent = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className={pagecontent_style['card-content']}>
            <div className={pagecontent_style["card-header-container"]}></div>

            <div className={pagecontent_style["card-body"]}>
                <div className="row">
                    <BookCard />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
