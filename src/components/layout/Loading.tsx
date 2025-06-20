import styles from './Loading.module.css';
import loading from '../../assets/img/loading.png';

function Loading() {
  return (
    <div className={styles.loader_container}>
      <img className={styles.loader} src={loading} alt="Carregando"></img>
    </div>
  );
}

export default Loading;
