interface ToastMessageProps {
  PLEASE_ENTER_TASK: string;
  TASK_CREATED: string;
  TASK_DELETED: string;
  TASK_SUCCESS: string;
}

export const todoMessages: ToastMessageProps = {
  PLEASE_ENTER_TASK: 'Please enter a task before adding.',
  TASK_CREATED: 'Task created successfully!',
  TASK_DELETED: 'Task deleted successfully!',
  TASK_SUCCESS: 'Congratulations on finishing this task!',
};
