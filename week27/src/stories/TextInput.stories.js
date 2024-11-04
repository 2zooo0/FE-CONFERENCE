import React from 'react';
import { TextInput } from '../components/TextInput';

export default {
  title: 'Example/TextInput',
  component: TextInput,
};

export const Default = {
  args: {
    maxLength: 10,
  },
};

export const ExceededLimit = {
  args: {
    maxLength: 10,
  },
  play: ({ args, canvasElement }) => {
    const input = canvasElement.querySelector('input');
    input.value = 'hello world';
    input.dispatchEvent(new Event('input', { bubbles: true }));
  },
};
