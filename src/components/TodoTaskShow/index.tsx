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
    <div className="bg-blue-200 mt-4 py-4 px-2 flex items-center justify-between">
      <div>
        <p className="text-base font-medium text-blue-900">{task.taskName}</p>
      </div>

      <div className="flex items-center gap-1">
        <span
          className="cursor-pointer text-center text-sm"
          onClick={() => deleteTask(task.id)}
        >
          <Trash size={16} />
        </span>
        <span
          className="cursor-pointer text-center text-sm"
          onClick={() => finishedTask(task.id)}
        >
          <CheckCircle size={16} />
        </span>
      </div>
    </div>
  );
}
