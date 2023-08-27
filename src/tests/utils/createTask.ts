import { fireEvent, screen } from '@testing-library/react';

export const createTask = (task: string) => {
  const taskInput = screen.getByLabelText('Form input task');
  fireEvent.change(taskInput, {
    target: { value: `${task}` },
  });
  const submitButton = screen.getByText(/Add task/i);
  fireEvent.click(submitButton);
};
