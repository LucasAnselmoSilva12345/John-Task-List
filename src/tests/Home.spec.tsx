import { render, screen } from '@testing-library/react';
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

    const buttonElement = screen.getByTestId('createTaskButton');
    expect(buttonElement).toBeInTheDocument();
  });
});

describe('Task Form Functions', () => {
  it('should create task', () => {
    render(<Home />);
    createTask('Buy shirt in the mall');

    screen.getByText(/Buy shirt in the mall/i);
    screen.findByText('Task created successfully!');
  });
});

export default {};
