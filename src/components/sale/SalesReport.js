import React, { useContext } from 'react';
import Seachbar from '../layout/Search';
import CustomerSales from './CustomerSales';
import SaleContext from '../../context/sale/saleContext';

const SalesReport = () => {
  const saleContext = useContext(SaleContext);

  const { sales, filtered } = saleContext;

  let customers = null;

  // Filtering
  if (filtered) {
    customers = filtered.map((sale) => sale.customer);
  } else {
    customers = sales.map((sale) => sale.customer);
  }

  customers = [...new Set(customers)];

  return (
    <div className='sales-report'>
      <h3 className='title title--section'>Suas Vendas</h3>
      <Seachbar />
      {customers.map((customer, index) => {
        return <CustomerSales key={index} customer={customer} sales={sales} />;
      })}
    </div>
  );
};

export default SalesReport;
