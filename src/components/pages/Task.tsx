import styles from './Task.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../layout/Loading';
import { format } from 'date-fns';
import TaskForm from '../task/TaskForm';

function Task() {
  const { id } = useParams();
  const [task, setTask] = useState([]);
  const [showTaskForm, setShowTaskForm] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setTask(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  function toogleTaskForm() {
    setShowTaskForm(!showTaskForm);
  }

  return (
    <>
      {task.name ? (
        <div className={styles.container}>
          <p className={styles.title}>Nome: {task.name}</p>

          {!showTaskForm ? (
            <div className={styles.container}>
              <span className={styles.span_title}>Detalhes da tarefa: </span>
              <p>
                <span>Descrição: </span> {task.description}
              </p>
              <p>
                <span>Categoria: </span> {task.category}
              </p>
              <p>
                <span>Data prevista: </span>
                {format(task.date, 'dd/MM/yyyy')}
              </p>
            </div>
          ) : (
            <div className={styles.container}>
              <span className={styles.span_title}>Editar tarefa:</span>
              <TaskForm onSubmit={editTask}></TaskForm>
            </div>
          )}
          <button onClick={toogleTaskForm}>{!showTaskForm ? 'Editar Tarefa' : 'Fechar'}</button>
        </div>
      ) : (
        <Loading></Loading>
      )}
    </>
  );
}

export default Task;
