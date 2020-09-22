import React from 'react';
import Button from './Button';
import FormInput from './FormInput';

const Search = ({ onSearch, searchState }) => {
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
          onChange={onSearch}
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
