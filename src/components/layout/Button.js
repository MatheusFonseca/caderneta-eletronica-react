import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, text, onClick, icon }) => {
  return (
    <button onClick={onClick} className={'button ' + className}>
      {icon && <i className={icon}></i>}
      {icon && ' '}
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
