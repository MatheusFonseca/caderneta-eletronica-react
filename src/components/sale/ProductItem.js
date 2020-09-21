import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../layout/FormInput';

const ProductItem = ({ index }) => {
  const [product, setProduct] = useState({
    productName: '',
    quantity: 1,
    unitPrice: 0,
  });

  const { productName, quantity, unitPrice } = product;

  const validateInput = (value) => {
    if (value === '') {
      return 'Insira um produto';
    } else {
      return null;
    }
  };

  const onChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value.replace(',', '.'),
    });
  };

  const price = (quantity * unitPrice).toFixed(2);

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
          value={productName}
          onChange={onChange}
          placeholder=''
          classNameLabel='text-small'
          validateInput={validateInput}
        ></FormInput>
      </fieldset>
      <fieldset className='sale-form__fieldset'>
        <FormInput
          name='quantity'
          label='Quantidade'
          type='text'
          value={quantity}
          onChange={onChange}
          inputMode='numeric'
          placeholder=''
          classNameLabel='text-small'
          validateInput={validateInput}
        ></FormInput>
      </fieldset>
      <fieldset className='sale-form__fieldset'>
        <FormInput
          name='unitPrice'
          label='Preço Unitário'
          type='text'
          onChange={onChange}
          value={unitPrice}
          inputMode='numeric'
          placeholder=''
          classNameLabel='text-small'
          validateInput={validateInput}
        ></FormInput>
      </fieldset>
      <fieldset className='sale-form__fieldset'>
        <FormInput
          name='price'
          label='Preço'
          type='text'
          value={price}
          onChange={onChange}
          placeholder=''
          readonly={true}
          classNameLabel='text-small'
          validateInput={validate}
        ></FormInput>
      </fieldset>
    </Fragment>
  );
};

ProductItem.propTypes = {
  index: PropTypes.number.isRequired,
};

export default ProductItem;
