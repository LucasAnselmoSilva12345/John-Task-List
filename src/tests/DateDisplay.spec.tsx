import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DateDisplay } from '../components/DateDisplay/DateDisplay';

describe('Current date', () => {
  it('should display current date in task properties', () => {
    const currentDate = new Date();
    const { getByLabelText } = render(<DateDisplay date={currentDate} />);

    const dataElement = getByLabelText(
      `task-date-${currentDate.toISOString()}`
    );

    const formattedCurrentDate = currentDate.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    expect(dataElement.textContent).toBe(formattedCurrentDate);
  });
});

export default {};
