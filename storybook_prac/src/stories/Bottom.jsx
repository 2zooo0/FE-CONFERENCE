import React from 'react';
import PropTypes from 'prop-types';
import './bottom.css';

export const Bottom = ({ isLoggedIn}) => (
  <div className={`bottom ${isLoggedIn ? 'logged-in' : 'logged-out'}`}>
    {isLoggedIn ? (
      <p>문의사항은 115@cau.ad.ko 로 보내주세요.</p>
    ) : (
      <p>지금 로그인 하세요!</p>
    )}
  </div>
);

Bottom.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

Bottom.defaultProps = {
  isLoggedIn: false,
};
