import React from 'react';
import './App.scss';
import AddSaleForm from './components/sale/AddSaleForm';
import SalesReport from './components/sale/SalesReport';
import SaleState from './context/sale/SaleState';

const App = () => {
  return (
    <SaleState>
      <div className='App'>
        <h1 className='title'>Caderneta Eletrônica</h1>
        <div className='container home'>
          <AddSaleForm />
          <SalesReport />
        </div>
      </div>
    </SaleState>
  );
};

export default App;
