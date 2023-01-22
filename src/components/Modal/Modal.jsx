import styles from "./Modal.module.css";

export const Modal = ({ avatar: { src, alt }, onClose }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <img src={src} alt={alt} />
        <button type="button" className={styles.button} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};
