import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';

export const TextInput = ({ maxLength }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const inputText = e.target.value;

    if (inputText.length > maxLength) {
      setError(true);
    } else {
      setError(false);
      setText(inputText);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className={error ? 'input-error' : ''}
        placeholder={`최대 ${maxLength}자 입력 가능`}
      />
      {error && <p className="error-message">글자 수가 초과되었습니다.</p>}
    </div>
  );
};

TextInput.propTypes = {
  maxLength: PropTypes.number.isRequired,
};
