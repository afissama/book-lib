import styles from "../../styles/Books/BookPDF.module.css";
import { Viewer } from "@react-pdf-viewer/core";
import { useLoaderData } from "react-router-dom";
import "@react-pdf-viewer/core/lib/styles/index.css";

function BookPDF(props) {

  const book = useLoaderData()[0];

  return (
    <div className={styles['pdf-viewer']}>
      <Viewer fileUrl={book.book_url} />
    </div>
  );
}

export default BookPDF;
