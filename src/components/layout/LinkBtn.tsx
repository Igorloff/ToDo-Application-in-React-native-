import { Link, type LinkProps } from 'react-router-dom';
import styles from './LinkBtn.module.css';

function LinkBtn({ ...props }: LinkProps) {
  return (
    <div className={styles.btn_space}>
      <Link className={styles.link_btn} {...props}>
        {props.children}
      </Link>
    </div>
  );
}

export default LinkBtn;
