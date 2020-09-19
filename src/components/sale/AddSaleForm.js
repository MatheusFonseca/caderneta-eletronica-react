import React from 'react';
import FormInput from '../layout/FormInput';
import SaleProducts from '../sale/SaleProducts';
import formatDate from '../../utils/formatDate';

const addSaleForm = () => {
  const validateCustomer = (value) => {
    if (value === '') {
      return 'Insira um cliente';
    } else {
      return null;
    }
  };

  return (
    <form className='sale-form'>
      <fieldset className='sale-form__fieldset'>
        <FormInput
          name='cliente'
          label='Cliente'
          placeholder=''
          validateInput={validateCustomer}
        ></FormInput>
      </fieldset>
      <fieldset className='sale-form__fieldset'>
        <FormInput
          name='data'
          label='Data da Venda'
          type='date'
          value={formatDate(Date.now())}
          placeholder=''
          validateInput={validateCustomer}
        ></FormInput>
      </fieldset>
      <SaleProducts></SaleProducts>
    </form>
  );
};

export default addSaleForm;
