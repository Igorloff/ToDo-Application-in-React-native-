import { useNavigate } from 'react-router-dom';
import TaskForm from '../task/TaskForm';
import styles from './NewTask.module.css';

interface Category {
  id: number;
  name: string;
}

interface Task {
  name: string;
  category: Category;
  description: string;
  date: Date;
}

function NewTask() {
  const navigate = useNavigate();

  async function createTask(task: Task) {
    try {
      const response = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar tarefa.');
      }

      const data = await response.json();
      console.log(data);

      const state = { message: 'Tarefa criada com sucesso !' };
      navigate('/MyTasks', { state });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.newTask_container}>
      <h1>Nova tarefa</h1>
      <p>Crie sua nova tarefa !</p>
      <TaskForm onSubmit={createTask} />
    </div>
  );
}

export default NewTask;
