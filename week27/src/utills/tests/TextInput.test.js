import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TextInput } from '../../components/TextInput';

test('글자 수 제한 초과 시 경고 메시지 표시', () => {
  render(<TextInput maxLength={10} />); // 예시로 최대 10자 제한

  const input = screen.getByPlaceholderText('최대 10자 입력 가능');

  // 최대 길이를 초과하지 않은 상태 확인
  fireEvent.change(input, { target: { value: 'hello' } });
  expect(screen.queryByText('글자 수가 초과되었습니다.')).not.toBeInTheDocument();

  // 최대 길이를 초과한 상태 확인
  fireEvent.change(input, { target: { value: 'hello world' } }); // 11자 입력
  expect(screen.getByText('글자 수가 초과되었습니다.')).toBeInTheDocument();
});
