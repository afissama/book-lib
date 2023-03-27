import styles from "../../styles/Books/BookPDF.module.css";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

function BookPDF() {
  return (
    <div className={styles['pdf-viewer']}>
      <Viewer fileUrl="https://cors-anywhere.herokuapp.com/https://www2.ed.gov/parents/schools/find/choose/choosing.pdf" />
    </div>
  );
}

export default BookPDF;
