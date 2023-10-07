import { CheckCircle, Trash } from '@phosphor-icons/react';
import { TodoTaskListProps } from '../../types/TodoTaskListProps';
import { DateDisplay } from '../DateDisplay/DateDisplay';

interface TodoTaskShowProps {
  task: TodoTaskListProps;
  deleteTask(DeleteTaskById: number): void;
  finishedTask(FinishedTaskById: number): void;
}

export function TodoTaskShow({
  task,
  deleteTask,
  finishedTask,
}: TodoTaskShowProps) {
  const currentDate = new Date();

  return (
    <div className="bg-violet-300 dark:bg-neutral-700 mt-4 py-4 px-2 flex items-center justify-between">
      <div>
        <p className="text-base font-medium text-zinc-700 dark:text-neutral-300">
          {task.taskName}
        </p>
      </div>

      <DateDisplay date={currentDate} />

      <div className="flex items-center gap-1">
        <span
          data-testid="deleteTaskIcon"
          aria-label="Delete this task"
          role="button"
          className="cursor-pointer text-center text-sm"
          onClick={() => deleteTask(task.id)}
        >
          <Trash
            className="text-red-700 dark:text-violet-300 hover:opacity-50"
            size={16}
          />
        </span>
        <span
          aria-label="Finished this task"
          role="button"
          className="cursor-pointer text-center text-sm"
          onClick={() => finishedTask(task.id)}
        >
          <CheckCircle
            className="text-violet-800 dark:text-violet-300 hover:opacity-50"
            size={16}
          />
        </span>
      </div>
    </div>
  );
}
