import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, text, onClick }) => {
  return (
    <button onClick={onClick} className={'button ' + className}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
