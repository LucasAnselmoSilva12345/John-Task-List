import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Home } from '../pages/Home';
import { createTask } from './utils/createTask';

describe('Task Form', () => {
  it('should render form message label', () => {
    render(<Home />);

    screen.getByText(/What needs to be done now?/i);
  });

  it('should render task input field', () => {
    render(<Home />);

    const inputElement = screen.getByLabelText('Form input task');
    expect(inputElement).toBeInTheDocument();
  });

  it('should render "Add task" button', () => {
    render(<Home />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});

describe('Task Form Functions', () => {
  it('should create task', () => {
    render(<Home />);
    createTask('Buy shirt in the mall');

    const submitButton = screen.getByText(/Add task/i);
    fireEvent.click(submitButton);

    screen.getByText(/Buy shirt in the mall/i);
    screen.findByText('Task created successfully!');
  });

  it('should delete task', () => {
    render(<Home />);
    createTask('Buy milk');

    const iconDelete = screen.getByLabelText('Delete this task');
    fireEvent.click(iconDelete);

    screen.queryByText(/Buy milk/i);
    screen.findByText('Task deleted with successfully!');
  });

  it('should finish task', () => {
    render(<Home />);
    createTask('Go to the gym');

    const iconFinished = screen.getByRole('button');
    fireEvent.click(iconFinished);

    screen.queryByText(/Go to the gym/i);
    screen.findByText('Congratulations on finished this task!');
  });
});

export default {};
