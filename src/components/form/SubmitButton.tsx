import styles from './SubmitButton.module.css';

interface SubmitButtonProps {
  text: string;
}

function SubmitButton({ text }: SubmitButtonProps) {
  return (
    <div>
      <button className={styles.btn}>{text}</button>
    </div>
  );
}

export default SubmitButton;
