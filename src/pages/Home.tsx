import React, { useState } from 'react';

import { Header } from '../components/Header';
import { TodoTaskShow } from '../components/TodoTaskShow/TodoTaskShow';
import { TodoTaskListProps } from '../types/TodoTaskListProps';
import { Warning } from '../components/Warning';
import { Tasks } from '../hook/localStorage/Tasks';

import { TOAST_MESSAGES } from '../toastMessages/toastMessages';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface TaskDataProps {
  id: number;
  taskName: string;
}

export function Home() {
  const [newTaskName, setNewTaskName] = useState<string>('');
  const [todoTaskList, setTodoTaskList] = Tasks(
    'todoTaskList',
    [] as TodoTaskListProps[]
  );

  const generateRandomID = (): number =>
    Math.floor(Math.random() * 99999999999);

  function createTask() {
    if (!newTaskName) {
      toast.warning(TOAST_MESSAGES.pleaseEnterTask);
      return;
    }

    const newTask = {
      id: generateRandomID(),
      taskName: newTaskName,
    };

    setTodoTaskList([...todoTaskList, newTask]);
    setNewTaskName('');
    toast.info(TOAST_MESSAGES.taskCreated);
  }

  function handleTaskNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTaskName(event?.target.value);
  }

  function handleActionByTasks(taskId: number): void {
    const setUpdatedTaskList = todoTaskList.filter(
      (task: TaskDataProps) => task.id !== taskId
    );
    setTodoTaskList(setUpdatedTaskList);
  }

  function handleDeleteTask(taskId: number): void {
    handleActionByTasks(taskId);
    toast.error(TOAST_MESSAGES.taskDeleted);
  }

  function handleFinishedTask(taskId: number): void {
    handleActionByTasks(taskId);
    toast.success(TOAST_MESSAGES.taskSuccess);
  }

  return (
    <>
      <Header />
      <main className="w-4/5 my-0 mx-auto lg:w-1/2">
        <section className="my-5 flex flex-col">
          <div className="flex flex-col gap-1 mb-4">
            <Label
              htmlFor="task"
              className="text-base text-secondary-foreground font-semibold"
            >
              What's the next task?
            </Label>

            <Input
              type="text"
              id="task"
              name="task"
              className="w-full bg-input border-border text-secondary-foreground"
              autoComplete="off"
              placeholder="It's necessary buy the new car"
              value={newTaskName}
              onChange={handleTaskNameChange}
            />
          </div>

          <Button
            type="button"
            className="p-6 font-medium"
            onClick={createTask}
          >
            Create new task
          </Button>
        </section>

        {todoTaskList?.length ? (
          todoTaskList.map((task: TaskDataProps, key: number) => (
            <TodoTaskShow
              key={key}
              task={task}
              deleteTask={handleDeleteTask}
              finishedTask={handleFinishedTask}
            />
          ))
        ) : (
          <Warning />
        )}
      </main>
    </>
  );
}
