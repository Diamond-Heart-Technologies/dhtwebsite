import styles from "../styles/componentstyles/buttons.module.scss";

export const SubmitButton = () => {
  return (
    <a href="mailto:muoghaluijeoma@gmail.com" target="_blank">
      <button className={`mt-4 ${styles.Submit}`} type="button">
        Submit
      </button>
    </a>
  );
};
