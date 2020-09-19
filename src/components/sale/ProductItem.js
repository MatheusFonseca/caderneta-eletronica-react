import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../layout/FormInput';

const ProductItem = ({ index, name, qtt, unitPrice, price }) => {
  const validateInput = (value) => {
    if (value === '') {
      return 'Insira um produto';
    } else {
      return null;
    }
  };

  const validate = () => {};

  return (
    <Fragment>
      <p className='input__label input__label--product span1-2'>
        Produto {index}
      </p>
      <fieldset className='sale-form__fieldset'>
        <FormInput
          name='productName'
          label='Nome'
          value={name}
          placeholder=''
          classNameLabel='text-small'
          validateInput={validateInput}
        ></FormInput>
      </fieldset>
      <fieldset className='sale-form__fieldset'>
        <FormInput
          name='productQtt'
          label='Quantidade'
          type='text'
          value={qtt}
          inputMode='numeric'
          placeholder=''
          classNameLabel='text-small'
          validateInput={validateInput}
        ></FormInput>
      </fieldset>
      <fieldset className='sale-form__fieldset'>
        <FormInput
          name='productUnitPrice'
          label='Preço Unitário'
          type='text'
          value={unitPrice}
          inputMode='numeric'
          placeholder=''
          classNameLabel='text-small'
          validateInput={validateInput}
        ></FormInput>
      </fieldset>
      <fieldset className='sale-form__fieldset'>
        <FormInput
          name='productPrice'
          label='Preço'
          type='text'
          value={price}
          placeholder=''
          readonly={true}
          classNameLabel='text-small'
          validateInput={validate}
        ></FormInput>
      </fieldset>
    </Fragment>
  );
};

ProductItem.defaultProps = {
  name: '',
  qtt: 1,
  unitPrice: 0,
  price: 0,
};

ProductItem.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  qtt: PropTypes.number.isRequired,
  unitPrice: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductItem;
