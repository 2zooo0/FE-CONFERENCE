import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Login } from '../components/Login';

test('입력 필드가 비어 있을 때 빨간색 테두리 표시', () => {
  render(<Login />);
  
  const loginButton = screen.getByText('Login');
  fireEvent.click(loginButton);
  
  const usernameInput = screen.getByPlaceholderText('Username');
  const passwordInput = screen.getByPlaceholderText('Password');

  expect(usernameInput).toHaveClass('input-error');
  expect(passwordInput).toHaveClass('input-error');
});

test('입력 필드에 값이 있을 때 로그인 성공 메시지 표시', () => {
  render(<Login />);
  
  const usernameInput = screen.getByPlaceholderText('Username');
  const passwordInput = screen.getByPlaceholderText('Password');
  const loginButton = screen.getByText('Login');

  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });
  fireEvent.click(loginButton);

  expect(window.alert).toHaveBeenCalledWith('로그인 성공!');
});
