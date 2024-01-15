import { render, screen, fireEvent } from '@testing-library/react';
import { Home } from '../pages/Home';
import { createTask } from './utils/createTask';

describe('Manager Task ', () => {
  it('should render input task field', () => {
    render(<Home />);

    const inputTask = screen.getByRole('textbox', { name: 'Insert-New-Task' });
    expect(inputTask).toBeVisible();
  });

  it('should create task', () => {
    render(<Home />);
    createTask('Go to the gym');
  });

  it('should delete task', () => {
    render(<Home />);
    const deleteTaskButton = screen.getAllByTestId('deleteTaskIcon');
    fireEvent.click(deleteTaskButton[0]);

    const mockTaskName = 'Go to the supermarket';
    createTask(mockTaskName);
    fireEvent.click(deleteTaskButton[0]);

    screen.queryByText(mockTaskName);
  });

  it('should finished task', () => {
    render(<Home />);
    const deleteTaskButton = screen.getAllByTestId('deleteTaskIcon');
    fireEvent.click(deleteTaskButton[0]);

    const mockTaskName = 'Go to the school';
    createTask(mockTaskName);
    const finishedTaskButton = screen.getAllByTestId('finishedTaskIcon');
    fireEvent.click(finishedTaskButton[0]);

    screen.queryByText(mockTaskName);
  });
});

export default {};
