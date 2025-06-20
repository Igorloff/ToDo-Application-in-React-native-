import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './MyTask.module.css';
import Message from '../layout/Message';
import LinkBtn from '../layout/LinkBtn';
import TaskCard from '../task/TaskCard';
import Loading from '../layout/Loading.tsx';

interface Task {
  id: number;
  name: string;
  description: string;
  category: string;
  date: Date;
}

function MyTasks() {
  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message;
  }

  const [tasks, setTasks] = useState<Task[]>([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/tasks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setTasks(data);
        setRemoveLoading(true);
      })
      .catch((err) => console.error('Erro ao buscar tarefas:', err));
  }, []);

  function removeTask(id: number) {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Erro ao deletar tarefa');
        }
        return resp.json();
      })
      .then(() => {
        setTasks((tasks) => tasks.filter((task) => task.id !== id));
      })
      .catch((err) => console.log(err));
  }

  function editTask(id: number) {
    fetch('http://localhost:5000/tasks', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then(setTasks)
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className={styles.title_container}>
        <h1>Minhas tarefas</h1>
        <LinkBtn to="/NewTask" children="Criar tarefa" />
      </div>

      {message && <Message type="success" msg={message} />}

      <div>
        {tasks.length === 0 && removeLoading ? (
          <p>Não há projetos cadastrados</p>
        ) : (
          <div className={styles.task_container}>
            {tasks.map((task) => (
              <TaskCard handleEdit={editTask} handleRemove={removeTask} key={task.id} task={task} />
            ))}
          </div>
        )}
        {!removeLoading && <Loading />}
      </div>
    </div>
  );
}

export default MyTasks;
