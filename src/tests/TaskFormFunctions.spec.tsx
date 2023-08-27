import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Home } from '../pages/Home';
import { createTask } from './utils/createTask';

describe('Task Form Functions', () => {
  it('should Create Task', () => {
    render(<Home />);
    createTask('Buy shirt in the mall');
  });

  it('should Delete Task', () => {
    render(<Home />);

    const iconDelete = screen.getByLabelText('Delete this task');
    fireEvent.click(iconDelete);

    screen.findByText('Task deleted with successfully!');
  });

  it('should Finished Task', () => {
    render(<Home />);
    createTask('Buy apple and banana');

    const iconDelete = screen.getByLabelText('Finished this task');
    fireEvent.click(iconDelete);

    screen.findByText('Task deleted with successfully!');
  });
});

export default {};
