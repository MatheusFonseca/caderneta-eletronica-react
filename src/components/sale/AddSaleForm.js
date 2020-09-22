import React, { useState } from 'react';
import formatDate from '../../utils/formatDate';
import FormInput from '../layout/FormInput';
import ProductInputs from './ProductInputs';
import Button from '../layout/Button';

const AddSaleForm = () => {
  const blankProduct = {
    productName: '',
    category: '',
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

  const saleTotal = productState
    .map((product) => product.price)
    .reduce((a, b) => parseFloat(a) + parseFloat(b), 0);

  return (
    <div className='sale-form-container'>
      <h3 className='title title--section'>Nova Venda</h3>
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
        <div className='sale-form__total span1-2'>
          <p className='sale-form__total-label'>Total</p>
          <p className='sale-form__total-value'>
            R$ <span>{parseFloat(saleTotal).toFixed(2)}</span>
          </p>
        </div>
        <Button
          onClick={addProduct}
          text='Adicionar Produto'
          icon='fas fa-plus'
        ></Button>
        <Button
          className='button--dark'
          onClick={addProduct}
          text='Finalizar Venda'
        ></Button>
      </form>
    </div>
  );
};

export default AddSaleForm;
