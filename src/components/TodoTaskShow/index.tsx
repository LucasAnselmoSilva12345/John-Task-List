import { CheckCircle, Trash } from '@phosphor-icons/react';
import { TodoTaskListProps } from '../../interfaces/interfaces';

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
  return (
    <div className="bg-violet-300 mt-4 py-4 px-2 flex items-center justify-between">
      <div>
        <p className="text-base font-medium text-zinc-700">{task.taskName}</p>
      </div>

      <div className="flex items-center gap-1">
        <span
          className="cursor-pointer text-center text-sm"
          onClick={() => deleteTask(task.id)}
        >
          <Trash className="text-red-700 hover:opacity-50" size={16} />
        </span>
        <span
          className="cursor-pointer text-center text-sm"
          onClick={() => finishedTask(task.id)}
        >
          <CheckCircle className="text-violet-800 hover:opacity-50" size={16} />
        </span>
      </div>
    </div>
  );
}
