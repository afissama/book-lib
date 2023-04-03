import styles from "../../styles/Management/ManageUpload.module.css";
import axios from "axios";
import { useRef, useState } from "react";

// Upload a file to cloudinary
const FileUpload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "booksapi");
  let data = null;
  await axios
    .post("https://api.cloudinary.com/v1_1/dmniahx2e/upload", formData)
    .then((response) => {
      data = response.data["secure_url"];
    })
    .catch((error) => {
      console.log(error);
    });

  return data;
};

const postFormData = async (form) => {
  let data = null;
  await axios
    .post("https://book-lib-api.herokuapp.com/books", form)
    .then((response) => {
      data = response.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

const ManageUpload = () => {


  const [formValue, setformValue] = useState({
    bookTitle: "",
    bookAuthor: "",
    bookCategory: "",
    bookFile: null,
    bookCover: null,
    bookDescription: "",
  });

  const [msg, setMsg] = useState({
    msg: "",
    class:""
  });

  const refPdfFile = useRef(null);
  const refCoverFile = useRef(null);



  const handleChange = (e) => {
    if (e.target.name === "bookFile" || e.target.name === "bookCover") {
      setformValue({
        ...formValue,
        [e.target.name]: e.target.files[0],
      });
      return;
    }
    setformValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
    setMsg({msg:"", class: ""});
  };

  const resetFormMsg = () => {
    setformValue({
      bookTitle: "",
      bookAuthor: "",
      bookCategory: "art",
      bookFile: null,
      bookCover: null,
      bookDescription: "",
    });
    refPdfFile.current.value = null;
    refCoverFile.current.value = null;
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    let pdfLink = await FileUpload(formValue.bookFile);
    if (pdfLink === null) {
      resetFormMsg();
      setMsg({msg:"An error occured whhile upload the pdf file", class: "error"});
      return;
    }

    let coverLink = await FileUpload(formValue.bookCover);
    if (coverLink === null) {
      setMsg({msg:"An error occured whhile upload the cover", class: "error"});
      return;
    }

    let form = {
      title: formValue.bookTitle,
      author: formValue.bookAuthor,
      categories: formValue.bookCategory,
      description: formValue.bookDescription,
      cover: coverLink,
      pdfLink: pdfLink,
    };
    console.log(form);
    let result = await postFormData(form);

    if (result == null) {
      setMsg({msg:"An error occured whhile upload the cover", class: "error"});
      resetFormMsg();
      return;
    }
    setMsg({msg:"Submitted", class: "submit"});
    resetFormMsg();
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className={`"col-md-12" ${styles["input-div"]}`}>
          <input
            name="bookFile"
            type="file"
            ref={refPdfFile}
            accept=".pdf"
            onChange={handleChange}
          />
        </div>

        <div className={`"col-md-12" ${styles["input-div"]}`}>
          <input
            name="bookCover"
            type="file"
            ref={refCoverFile}
            accept=".png,.jpg,jpeg"
            onChange={handleChange}
          />
        </div>

        <div className={`"col-md-12" ${styles["input-div"]}`}>
          <input
            name="bookTitle"
            value={formValue.bookTitle}
            type={`text`}
            placeholder="Title"
            onChange={handleChange}
          />
        </div>

        <div className={`"col-md-12" ${styles["input-div"]}`}>
          <input
            name="bookAuthor"
            value={formValue.bookAuthor}
            type={`text`}
            placeholder="Author"
            onChange={handleChange}
          />
        </div>

        <div className={`"col-md-12" ${styles["input-div"]}`}>
          <select name="bookCategory" onChange={handleChange} value={formValue.bookCategory}>
            <option value={`science`}>Science</option>
            <option value={`literature`}>Litterature</option>
            <option value={`art`}>Art</option>
          </select>
        </div>

        <div className={`"col-md-12" ${styles["input-div"]}`}>
          <textarea value={formValue.bookDescription} name="bookDescription" onChange={handleChange} />
        </div>

        <div className={`"col-md-12" ${styles["input-div"]} ${styles["msg-div"]}`}>
          <p className={`${msg.class}`}>{msg.msg}</p>
        </div>

        <div className={`"col-md-12" ${styles["input-div"]}`}>
          <button type="submit">UPLOAD BOOK</button>
        </div>
      </form>
    </>
  );
};

export default ManageUpload;
