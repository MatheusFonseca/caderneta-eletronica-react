import React, { useState } from 'react';
import Seachbar from '../layout/Search';
import CustomerSales from './CustomerSales';

const SalesReport = () => {
  const [searchState, setSearchState] = useState('');

  const onSearch = (e) => {
    setSearchState(e.target.value);
  };

  return (
    <div className='sales-report'>
      <h3 className='title title--section'>Suas Vendas</h3>
      <Seachbar onSearch={onSearch} searchState={searchState} />
      <CustomerSales />
    </div>
  );
};

export default SalesReport;
