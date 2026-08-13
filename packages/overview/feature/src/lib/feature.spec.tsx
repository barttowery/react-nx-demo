import { render } from '@testing-library/react';

import ReactNxDemoFeature from './feature';

describe('ReactNxDemoFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactNxDemoFeature />);
    expect(baseElement).toBeTruthy();
  });
});
