import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  children,
  label,
  validateInput,
  inputMode,
  pattern,
  readonly,
  ...props
}) => {
  const [error, setError] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);
  const [focused, setFocused] = useState(false);
  const [stateValue, setValue] = useState(value);

  const handleChange = (e) => {
    setValue(e.target.value);

    // catching 'x' click on date picker
    if (type === 'date' && e.target.value === '') {
      setError(validateInput(e.target.value));
    }
  };

  const onBlur = (e) => {
    if (!readonly) {
      setError(validateInput(e.target.value));
      setHasChanged(true);
      setFocused(false);
    }
  };

  const onFocus = (e) => {
    if (!readonly) {
      setError(null);
      setFocused(true);
    }
  };

  const classNames = () => {
    let text = 'input ';
    if (error && !focused) {
      text += 'input--error ';
    } else {
      if (hasChanged) {
        text += 'input--valid ';
      }
    }
    text += className;

    return text;
  };

  return (
    <Fragment>
      <label className={'input__label ' + props.classNameLabel} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={stateValue}
        onBlur={onBlur}
        onFocus={onFocus}
        inputMode={inputMode}
        pattern={pattern}
        className={classNames()}
        readOnly={readonly}
      />
      {error && <small className='input__error-text'>{error}</small>}
    </Fragment>
  );
};

FormInput.defaultProps = {
  type: 'text',
  className: '',
  value: '',
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  //eslint-disable-next-line
  type: PropTypes.oneOf(['text', 'number', 'password', 'email', 'date']),
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  validateInput: PropTypes.func.isRequired,
  inputMode: PropTypes.string,
  pattern: PropTypes.string,
  readonly: PropTypes.bool,
};

export default FormInput;
