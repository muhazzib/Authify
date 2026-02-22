import { fireEvent, render } from '@testing-library/react-native';
import AuthSwitch from './AuthSwitch';

describe('AuthSwitch', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <AuthSwitch
        prompt="Don't have an account ?"
        actionText="Sign Up"
        onPress={() => jest.fn()}
      />,
    );
    expect(getByText('Sign Up')).toBeTruthy();
  });
});
