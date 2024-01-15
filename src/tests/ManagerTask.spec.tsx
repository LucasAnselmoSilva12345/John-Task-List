import { render, screen, fireEvent } from '@testing-library/react';
import { Home } from '../pages/Home';
import { createTask } from './utils/createTask';

describe('Task Manager', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('should render the task input field', () => {
    const inputTask = screen.getByRole('textbox', { name: 'Insert-New-Task' });
    expect(inputTask).toBeVisible();
  });

  it('should create a task', () => {
    createTask('Go to the gym');
  });

  it('should delete a task', () => {
    const deleteTaskButton = screen.getAllByTestId('deleteTaskIcon');
    fireEvent.click(deleteTaskButton[0]);

    const mockTaskName = 'Go to the supermarket';
    createTask(mockTaskName);
    fireEvent.click(deleteTaskButton[0]);

    screen.queryByText(mockTaskName);
  });

  it('should mark a task as finished', () => {
    const deleteTaskButton = screen.getAllByTestId('deleteTaskIcon');
    fireEvent.click(deleteTaskButton[0]);

    const mockTaskName = 'Go to the school';
    createTask(mockTaskName);
    const finishedTaskButton = screen.getAllByTestId('finishedTaskIcon');
    fireEvent.click(finishedTaskButton[0]);

    expect(screen.queryByText(mockTaskName)).toBeNull();
  });
});

export default {};
