import { fireEvent, screen } from '@testing-library/react';

export const createTask = (nameTask: string) => {
  const inputTask = screen.getByRole('textbox', { name: 'Insert-New-Task' });

  fireEvent.change(inputTask, {
    target: { value: `${nameTask}` },
  });

  const buttonCreateNewTask = screen.getByRole('button', {
    name: 'Button-Create-New-Task',
  });
  fireEvent.click(buttonCreateNewTask);

  fireEvent.change(inputTask, {
    target: { value: `` },
  });

  screen.getByText(nameTask);
};
