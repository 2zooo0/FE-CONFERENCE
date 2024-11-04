// src/stories/Share.stories.js
import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest'; // Storybook용 expect 가져오기
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

    // 버튼 클릭 이벤트 시뮬레이션
    await userEvent.click(button);

    // Storybook의 expect를 사용하여 버튼 상태 확인
    expect(button).toHaveTextContent('Shared');
    expect(button).toHaveStyle('background-color: gray');
    expect(button).toHaveStyle('color: white');
  },
};
