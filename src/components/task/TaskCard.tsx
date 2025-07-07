import styles from './taskCard.module.css';
import { format } from 'date-fns';
import type { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

interface Task {
  id: number;
  name: string;
  date: Date;
  description: string;
  category: string;
}

interface TaskProps {
  task: Task;
  handleRemove: (id: number) => void;
  handleEdit: (id: number) => void;
}

function TaskCard({ task, handleRemove, handleEdit }: TaskProps) {
  const remove = (e: MouseEvent) => {
    e.preventDefault();
    handleRemove(task.id);
  };

  const edit = (e: MouseEvent) => {
    e.preventDefault();
    handleEdit(task.id);
  };

  return (
    <div className={styles.task_card}>
      <h3>{task.name}</h3>
      <p>
        <span>Descrição:</span>
        {task.description}
      </p>
      <p className={styles.category}>{task.category}</p>
      <p className={styles.date}>{format(task.date, 'dd/MM/yyyy')}</p>

      <div className={styles.button_grid}>
        <button className={styles.remove_button} onClick={remove}>
          Remover
        </button>
        <Link to={`/task/${task.id}`} className={styles.edit_button}>
          Editar
        </Link>
      </div>
    </div>
  );
}

export default TaskCard;
