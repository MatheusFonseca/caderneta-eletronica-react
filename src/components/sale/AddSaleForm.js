import React, { useState } from 'react';
import formatDate from '../../utils/formatDate';
import FormInput from '../layout/FormInput';
import ProductInputs from './ProductInputs';
import Button from '../layout/Button';

const AddSaleForm = () => {
  const blankProduct = {
    productName: '',
    quantity: 1,
    unitPrice: 0,
    price: 0,
  };

  const [productState, setProductState] = useState([
    {
      ...blankProduct,
    },
  ]);

  const [saleState, setSaleState] = useState({
    customer: '',
    date: formatDate(Date.now()),
  });

  const handleSaleChange = (e) => {
    setSaleState({
      ...saleState,
      [e.target.name]: [e.target.value],
    });
  };

  const handleProductsChange = (e) => {
    const updatedProducts = [...productState];
    const { index, fieldname } = e.target.dataset;
    updatedProducts[index][fieldname] = e.target.value;

    // Calculating total price and formatting
    const unitPrice = updatedProducts[index]['unitPrice']
      .toString()
      .replace(',', '.');
    const quantity = updatedProducts[index]['quantity']
      .toString()
      .replace(',', '.');
    updatedProducts[index]['price'] = (unitPrice * quantity).toFixed(2);
    setProductState(updatedProducts);
  };

  const addProduct = (e) => {
    e.preventDefault();
    setProductState([...productState, { ...blankProduct }]);
  };

  const onDelete = (e) => {
    const productId = parseInt(e.target.getAttribute('data-productid'));
    setProductState(
      productState.filter((product, index) => index !== productId)
    );
  };

  const validateInput = (value) => {
    if (value.trim() === '') {
      return 'Preencha este campo';
    } else {
      return null;
    }
  };

  return (
    <form className='sale-form'>
      <fieldset className='sale-form__fieldset'>
        <FormInput
          name='customer'
          label='Cliente'
          value={saleState.customer}
          onChange={handleSaleChange}
          placeholder=''
          validateInput={validateInput}
        ></FormInput>
      </fieldset>
      <fieldset className='sale-form__fieldset'>
        <FormInput
          name='date'
          label='Data da Venda'
          type='date'
          value={saleState.date}
          onChange={handleSaleChange}
          placeholder=''
          validateInput={validateInput}
        ></FormInput>
      </fieldset>
      {/* Dynamic inputs */}
      {productState.map((product, index) => {
        return (
          <ProductInputs
            key={index}
            index={index}
            productState={productState}
            handleProductsChange={handleProductsChange}
            onDelete={onDelete}
            validateInput={validateInput}
          />
        );
      })}
      <Button
        className='span2-1'
        onClick={addProduct}
        text='Adicionar Produto'
      ></Button>
    </form>
  );
};

export default AddSaleForm;
