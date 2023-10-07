import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header } from '../components/Header';
import { TodoTaskShow } from '../components/TodoTaskShow';
import { TodoTaskListProps } from '../types/TodoTaskListProps';
import { Plus } from '@phosphor-icons/react';
import { Separator } from '../components/Separator';
import { ThemeToggle } from '../components/ThemeToggle/ThemeToggle';
import { useTranslation } from 'react-i18next';

interface TaskDataProps {
  id: number;
  taskName: string;
}

export function Home() {
  const { t } = useTranslation();

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

    toast('Task created successfully!');
  }

  function handleTaskNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTaskName(event?.target.value);
  }

  function handleActionByTasks(taskId: number): void {
    const setUpdatedTaskList = todoTaskList.filter(
      (task) => task.id !== taskId
    );
    setTodoTaskList(setUpdatedTaskList);
    updatedLocalStorage('todoTaskList', setUpdatedTaskList);
  }

  function handleDeleteTask(taskId: number): void {
    handleActionByTasks(taskId);
    toast.info('Task deleted with successfully!');
  }

  function handleFinishedTask(taskId: number): void {
    handleActionByTasks(taskId);
    toast.success('Congratulations on finished this task!');
  }

  function updatedLocalStorage(key: string, data: TaskDataProps[]) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  return (
    <>
      <ToastContainer autoClose={3000} />

      <Header />
      <main className="w-4/5 my-0 mx-auto lg:w-1/2">
        <section className="my-5 flex flex-col">
          <div className="flex flex-col gap-1 mb-4">
            <div className="flex items-center justify-between">
              <label
                className="text-base text-neutral-800 dark:text-neutral-300 font-medium"
                htmlFor="task"
              >
                {t('whatNeedsToBe')}
              </label>
              <ThemeToggle />
            </div>

            <input
              type="text"
              className="w-full py-4 text-sm text-zinc-800 border-none rounded focus:outline focus:outline-2 focus:outline-violet-400"
              name="task"
              aria-label="Form input task"
              autoComplete="off"
              placeholder={t('inputPlaceholderTask')}
              value={newTaskName}
              onChange={handleTaskNameChange}
            />
          </div>

          <button
            data-testid="createTaskButton"
            className="bg-violet-600 dark:bg-neutral-700 text-blue-50 py-4 flex items-center justify-center gap-1 font-medium border-none rounded hover:opacity-80 focus:outline focus:outline-2 focus:outline-violet-900"
            type="button"
            onClick={createTask}
          >
            {t('addTask')}
            <Plus className="text-white" size={16} />
          </button>
        </section>

        <Separator />

        {todoTaskList.map((task, key) => (
          <TodoTaskShow
            key={key}
            task={task}
            deleteTask={handleDeleteTask}
            finishedTask={handleFinishedTask}
          />
        ))}
      </main>
    </>
  );
}
