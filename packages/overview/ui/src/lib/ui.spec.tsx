import { render } from '@testing-library/react';

import ReactNxDemoUi from './ui';

describe('ReactNxDemoUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactNxDemoUi />);
    expect(baseElement).toBeTruthy();
  });
});
