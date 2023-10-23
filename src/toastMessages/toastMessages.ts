interface ToastMessageProps {
  pleaseEnterTask: string;
  taskCreated: string;
  taskDeleted: string;
  taskSuccess: string;
}

export const TOAST_MESSAGES: ToastMessageProps = {
  pleaseEnterTask: 'Please enter a task before adding.',
  taskCreated: 'Task created successfully!',
  taskDeleted: 'Task deleted with successfully!',
  taskSuccess: 'Congratulations on finished this task!',
};
