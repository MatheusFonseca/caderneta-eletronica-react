import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '../layout/FormInput';

const ProductInputs = ({
  index,
  productState,
  handleProductsChange,
  validateInput,
  onDelete,
}) => {
  const productId = `productName-${index}`;
  const quantityId = `quantity-${index}`;
  const unitPriceId = `unitPrice-${index}`;
  const priceId = `price-${index}`;

  return (
    <fieldset
      key={`product-${index}`}
      className='sale-form__fieldset span1-2 bg-light grid-2 sale-form__fieldset--product'
    >
      {index !== 0 && (
        <i
          onClick={onDelete}
          data-productid={index}
          className='fas fa-times'
        ></i>
      )}
      <p className='input__label input__label--product span1-2'>
        Produto {index + 1}
      </p>
      <fieldset className='sale-form__fieldset'>
        <FormInput
          name={productId}
          label='Nome'
          dataIndex={index}
          dataFieldname='productName'
          placeholder=''
          classNameLabel='text-small'
          validateInput={validateInput}
          onChange={handleProductsChange}
          value={productState[index].productName}
        ></FormInput>
      </fieldset>
      <fieldset className='sale-form__fieldset'>
        <FormInput
          name={quantityId}
          label='Quantidade'
          type='text'
          dataIndex={index}
          dataFieldname='quantity'
          inputMode='numeric'
          placeholder=''
          classNameLabel='text-small'
          validateInput={validateInput}
          onChange={handleProductsChange}
          value={productState[index].quantity}
        ></FormInput>
      </fieldset>
      <fieldset className='sale-form__fieldset'>
        <FormInput
          name={unitPriceId}
          label='Preço Unitário'
          type='text'
          inputMode='numeric'
          dataIndex={index}
          dataFieldname='unitPrice'
          placeholder=''
          classNameLabel='text-small'
          validateInput={validateInput}
          onChange={handleProductsChange}
          value={productState[index].unitPrice}
        ></FormInput>
      </fieldset>
      <fieldset className='sale-form__fieldset'>
        <FormInput
          name={priceId}
          label='Preço'
          type='text'
          dataIndex={index}
          dataFieldname='price'
          placeholder=''
          readonly={true}
          classNameLabel='text-small'
          validateInput={validateInput}
          onChange={handleProductsChange}
          value={productState[index].price}
        ></FormInput>
      </fieldset>
    </fieldset>
  );
};

ProductInputs.propTypes = {
  index: PropTypes.number.isRequired,
  productState: PropTypes.array.isRequired,
  handleProductsChange: PropTypes.func.isRequired,
  validateInput: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ProductInputs;
