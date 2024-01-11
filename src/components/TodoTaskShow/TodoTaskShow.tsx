import { TodoTaskListProps } from '../../types/TodoTaskListProps';
import { DateDisplay } from '@/components/DateDisplay/DateDisplay';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { CheckCircle2, Trash } from 'lucide-react';

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
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>
            <DateDisplay date={currentDate} />
          </CardTitle>
          <CardDescription className="flex items-center justify-end space-x-1">
            <span
              data-testid="deleteTaskIcon"
              aria-label="Delete this task"
              role="button"
              className="cursor-pointer text-center text-sm"
              onClick={() => deleteTask(task.id)}
            >
              <Trash
                className="text-destructive transition-all duration-200 hover:opacity-50"
                size={16}
              />
            </span>
            <span
              aria-label="Finished this task"
              role="button"
              className="cursor-pointer text-center text-sm"
              onClick={() => finishedTask(task.id)}
            >
              <CheckCircle2
                className="text-emerald-600  transition-all duration-200 hover:opacity-50"
                size={16}
              />
            </span>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <h2>{task.taskName}</h2>
      </CardContent>
    </Card>
  );
}
