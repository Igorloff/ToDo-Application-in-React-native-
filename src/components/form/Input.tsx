import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
  name: string;
  type: React.HTMLInputTypeAttribute | undefined;
}

function Input({ text, name, ...rest }: InputProps) {
  return (
    <div className={styles.form_control}>
      <label>{text}</label>
      <input name={name} id={`input_${name}`} {...rest}></input>
    </div>
  );
}

export default Input;
