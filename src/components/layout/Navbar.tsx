import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/img/task.png';

function Navbar() {
  return (
    <nav className={styles.container}>
      <Link to="/">
        <img src={logo} />
      </Link>
      <ul>
        <li>
          <b>
            <Link to="/home">Home</Link>
          </b>
        </li>
        <li>
          <b>
            <Link to="/MyTasks">Tarefas</Link>
          </b>
        </li>
        <li>
          <b>
            <Link to="/NewTask">Nova Tarefa</Link>
          </b>
        </li>
        <li>
          <b>
            <Link to="/Contact">Contato</Link>
          </b>
        </li>
        <li>
          <b>
            <Link to="/Company">Empresa</Link>
          </b>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
