import { useState } from 'react';
import { Header } from '../components/Header';
import { TodoTaskShow } from '../components/TodoTaskShow';
import { TodoTaskListProps } from '../interfaces/interfaces';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Home() {
  const [task, setTask] = useState<string>('');

  const [todoTaskList, setTodoTaskList] = useState<TodoTaskListProps[]>([]);

  function createTask() {
    if (task === '') {
      toast.error(
        'Oops! It looks like you left an empty field. Please fill in all required fields to continue.'
      );
    } else {
      const generateTaskIDRandom = (num: number) =>
        Math.floor(Math.random() * num);

      const newTask = {
        id: generateTaskIDRandom(99999999999),
        taskName: task,
      };

      setTodoTaskList([...todoTaskList, newTask]);

      toast.success('Task created with success!');
    }
  }

  function deleteTask(DeleteTaskById: number): void {
    setTodoTaskList(
      todoTaskList.filter((taskName) => taskName.id !== DeleteTaskById)
    );
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
              What needs to do now?
            </label>
            <input
              type="text"
              className="w-full py-3 text-sm text-zinc-800 border-none rounded focus:outline focus:outline-2 focus:outline-blue-400"
              id="task"
              name="task"
              autoComplete="off"
              placeholder="Write your task"
              value={task}
              onChange={(event) => setTask(event.target.value)}
            />
          </div>

          <button
            className="bg-blue-600 text-blue-50 py-3 font-medium border-none rounded"
            type="submit"
            onClick={createTask}
          >
            Add task
          </button>
        </section>

        {todoTaskList.map((task, key) => (
          <TodoTaskShow key={key} task={task} deleteTask={deleteTask} />
        ))}
      </main>
    </>
  );
}
