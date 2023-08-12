import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header } from '../components/Header';
import { TodoTaskShow } from '../components/TodoTaskShow';
import { TodoTaskListProps } from '../interfaces/interfaces';

interface TaskDataProps {
  id: number;
  taskName: string;
}

export function Home() {
  const [newTaskName, setNewTaskName] = useState<string>('');
  const [todoTaskList, setTodoTaskList] = useState<TodoTaskListProps[]>([]);

  useEffect(() => {
    const storedTaskList = localStorage.getItem('todoTaskList');
    if (storedTaskList) {
      setTodoTaskList(JSON.parse(storedTaskList));
    }
  }, []);

  const generateRandomID = (): number =>
    Math.floor(Math.random() * 99999999999);

  function createTask() {
    if (!newTaskName) {
      toast.error('Please enter a task before adding.');
      return;
    }

    const newTask = {
      id: generateRandomID(),
      taskName: newTaskName,
    };

    setTodoTaskList([...todoTaskList, newTask]);
    setNewTaskName('');
    updatedLocalStorage('todoTaskList', [...todoTaskList, newTask]);

    toast.success('Task created successfully!');
  }

  function handleTaskNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTaskName(event?.target.value);
  }

  function handleDeleteTask(taskId: number): void {
    const updatedTaskList = todoTaskList.filter((task) => task.id !== taskId);
    setTodoTaskList(updatedTaskList);
    updatedLocalStorage('todoTaskList', updatedTaskList);
  }

  function updatedLocalStorage(key: string, data: TaskDataProps[]) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  return (
    <>
      <ToastContainer autoClose={3000} />

      <Header />
      <main className="w-4/5 my-0 mx-auto lg:w-1/2">
        <section className="mt-5 flex flex-col">
          <div className="flex flex-col gap-1 mb-2">
            <label
              className="text-base text-zinc-950 font-medium"
              htmlFor="task"
            >
              What needs to be done now?
            </label>
            <input
              type="text"
              className="w-full py-3 text-sm text-zinc-800 border-none rounded focus:outline focus:outline-2 focus:outline-blue-400"
              id="task"
              name="task"
              autoComplete="off"
              placeholder="Write your task"
              value={newTaskName}
              onChange={handleTaskNameChange}
            />
          </div>

          <button
            className="bg-blue-600 text-blue-50 py-3 font-medium border-none rounded"
            type="button"
            onClick={createTask}
          >
            Add task
          </button>
        </section>

        {todoTaskList.map((task, key) => (
          <TodoTaskShow key={key} task={task} deleteTask={handleDeleteTask} />
        ))}
      </main>
    </>
  );
}
