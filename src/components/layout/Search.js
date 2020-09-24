import React, { useState, useContext, useEffect } from 'react';
import Button from './Button';
import FormInput from './FormInput';
import SaleContext from '../../context/sale/saleContext';

const Search = () => {
  const saleContext = useContext(SaleContext);
  const { filtered, filterSales, clearFilter } = saleContext;
  const [searchState, setSearchState] = useState('');

  const onChange = (e) => {
    setSearchState(e.target.value);

    if (e.target.value !== '') {
      filterSales(e.target.value);
    } else {
      clearFilter();
    }
  };

  const validateInput = () => {};
  const searchCustomer = () => {};

  return (
    <div className='searchbar'>
      <fieldset className='sale-form__fieldset flex-auto'>
        <FormInput
          name='search'
          label='Buscar Cliente'
          placeholder=''
          value={searchState}
          onChange={onChange}
          validateInput={validateInput}
          disableValidate={true}
        ></FormInput>
      </fieldset>
      <Button
        className='button--search'
        onClick={searchCustomer}
        text=''
        icon='fas fa-search'
      ></Button>
    </div>
  );
};

export default Search;
