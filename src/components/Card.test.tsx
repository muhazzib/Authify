import React from 'react';
import { render } from '@testing-library/react-native';
import Card from './Card';
import { Text } from 'react-native';

describe('Card', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Card>
        <Text>Card Content</Text>
      </Card>,
    );
    expect(getByText('Card Content')).toBeTruthy();
  });

  it('applies custom styles', () => {
    const customStyle = { backgroundColor: 'red' };
    const { getByTestId } = render(
      <Card styles={customStyle}>
        <Text testID="card-child">Styled Card</Text>
      </Card>,
    );
    expect(getByTestId('card-child')).toBeTruthy();
  });
});
