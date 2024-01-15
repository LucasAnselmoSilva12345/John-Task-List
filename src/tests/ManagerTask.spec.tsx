import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Home } from '../pages/Home';

describe('Task Form', () => {
  it('should render form message label', () => {
    render(<Home />);
  });
});

export default {};
