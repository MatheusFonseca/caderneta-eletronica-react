import React from 'react';
import './App.scss';
import AddSaleForm from './components/sale/AddSaleForm';

const App = () => {
  return (
    <div className='App'>
      <h1 className='title'>Caderneta Eletrônica</h1>
      <div className='container home'>
        <AddSaleForm></AddSaleForm>
        <div className='sales-report'>Aside</div>
      </div>
    </div>
  );
};

export default App;
