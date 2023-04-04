import styles from "../styles/componentstyles/buttons.module.scss";

export const SubmitButton = () => {
  return (
    <a
      href="mailto:diamondhearttechnologies@gmail.com"
      target="_blank"
      rel="noreferrer">
      <button className={`mt-4 ${styles.Submit}`} type="button">
        Submit
      </button>
    </a>
  );
};
