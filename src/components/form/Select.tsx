import styles from './Select.module.css';

interface Option {
  id: number;
  name: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  text: string;
  options: Option[];
}

function Select({ name, text, options, ...rest }: SelectProps) {
  return (
    <div className={styles.form_control}>
      <label>{text}</label>
      <select name={name} id={`select_${name}`} {...rest}>
        <option value="">Selecione uma opção</option>
        {options.map((opt) => (
          <option key={opt.id} value={opt.name}>
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
