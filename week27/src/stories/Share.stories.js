import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Share } from '../components/Share';

export default {
  title: 'Example/Share',
  component: Share,
};

export const Default = {
  args: {},
};

export const Shared = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button', { name: 'Share' });

    await userEvent.click(button);
    
    expect(button).toHaveTextContent('Shared');
    expect(button).toHaveStyle('background-color: gray');
    expect(button).toHaveStyle('color: white');
  },
};
