import { useEffect, useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';

import styles from './TaskForm.module.css';
import Input from '../form/Input.tsx';
import Select from '../form/Select.tsx';
import SubmitButton from '../form/SubmitButton.tsx';

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

interface TaskFormProps {
  onSubmit: (task: Task) => void;
}

function TaskForm({ onSubmit }: TaskFormProps) {
  const [categories, setCategories] = useState([]);
  const [task, setTask] = useState<Task>({
    name: '',
    category: { id: 0, name: '' },
    description: '',
    date: new Date(),
  });

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit(task);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setTask({ ...task, [e.target.name]: e.target.value });
  }

  return (
    <form className={styles.taskForm} onSubmit={handleSubmit}>
      <Input
        type="text"
        text="Nome da tarefa:"
        name="name"
        placeholder="Insira o nome da tarefa"
        onChange={handleChange}
      />
      <Input
        type="text"
        text="Descrição:"
        name="description"
        placeholder="Insira a descrição dessa tarefa"
        onChange={handleChange}
      />
      <Input
        type="date"
        text="Data para tarefa:"
        name="date"
        placeholder="Insira a descrição dessa tarefa"
        onChange={handleChange}
      />
      <Select text="Categoria:" name="category" options={categories} onChange={handleChange} />

      <div className={styles.button_container}>
        <SubmitButton text="Criar tarefa" />
      </div>
    </form>
  );
}

export default TaskForm;
