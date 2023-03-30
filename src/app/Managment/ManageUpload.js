import AuthInput from "../UI/AuthInput";
import styles from '../../styles/Management/ManageUpload.module.css';
import AuthBtn from "../UI/AuthBtn";
const ManageUpload = () => {
  return (
    <div className={styles['container']}>
        <div className={styles['upload-container']}>
            <form>
                <AuthInput type='text' label='Book Title' />
                <AuthInput type='text' label='Book Author' />
                <AuthInput type='text' label='Book Categorie' />
                <AuthInput type='text' label='Book description' />
                <AuthInput type='text' label='Book url' />
                <AuthInput type='text' label='Book cover url' />
            </form>
            <AuthBtn type="submit">
                        ADD BOOK
            </AuthBtn>
        </div>
    </div>
  );
};

export default ManageUpload;
