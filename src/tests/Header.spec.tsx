import { render, screen } from '@testing-library/react';
import { Home } from '../pages/Home';

describe('Header Component component', () => {
  it('should render "John Task List" title', () => {
    render(<Home />);

    screen.getByText(/John Task list/i);
  });
});

export default {};
