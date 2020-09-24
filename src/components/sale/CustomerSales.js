import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import SaleContext from '../../context/sale/saleContext';

const CustomerSales = ({ customer, sales }) => {
  const saleContext = useContext(SaleContext);
  const { setCurrent } = saleContext;

  const filteredSales = sales.filter((sale) => sale.customer === customer);
  let customerTotal = 0;

  const scrollTop = () => {
    window.scrollTo({ top: 70, behavior: 'smooth' });
  };

  const onEdit = (sale) => {
    setCurrent(sale);
    scrollTop();
  };

  return (
    <div className='customer-card'>
      <p className='customer-card__name'>{customer}</p>
      {/* LOOPING SALES */}
      {filteredSales.map((sale, index) => {
        let saleTotal = 0;
        return (
          <Fragment key={index}>
            <div className='customer-card__tablehead'>
              <div className='customer-card__date'>
                <p>{sale.date}</p>
              </div>
              <i onClick={() => onEdit(sale)} className='fas fa-edit'></i>
            </div>
            <table className='customer-card__table'>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Categoria</th>
                  <th>Preço Unt</th>
                  <th>Qtd</th>
                  <th>Preço</th>
                </tr>
              </thead>
              <tbody>
                {/* LOOPING PRODUCTS */}
                {sale.products.map((product, index) => {
                  saleTotal += parseFloat(product.unitPrice * product.quantity);
                  customerTotal += parseFloat(
                    product.unitPrice * product.quantity
                  );

                  return (
                    <tr key={index}>
                      <td>{product.productName}</td>
                      <td>{product.category}</td>
                      <td>{product.unitPrice}</td>
                      <td>{product.quantity}</td>
                      <td>
                        R${' '}
                        {parseFloat(
                          product.unitPrice * product.quantity
                        ).toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className='customer-card__tablehead p-1 m-0'>
              <p className='text-bold'>Total</p>
              <p className='text-bold'>R$ {saleTotal.toFixed(2)}</p>
            </div>
          </Fragment>
        );
      })}
      {/* PAGAMENTO */}
      {/* <div className='customer-card__tablehead'>
        <div className='customer-card__date customer-card__date--success'>
          <p>22/09/2020</p>
        </div>
        <i className='fas fa-edit text-success'></i>
      </div>
      <div className='customer-card__tablehead p-1 m-0'>
        <p className='text-bold text-success'>Pagamento</p>
        <p className='text-bold text-success'>R$ 50,00</p>
      </div> */}
      {/* DÉBITO FINAL */}
      <div className='customer-card__tablehead p-1 bg-dark'>
        <p className='text-bold text-light'>Débito Final de {customer}</p>
        <p className='text-bold text-light'>R$ {customerTotal.toFixed(2)}</p>
      </div>
    </div>
  );
};

CustomerSales.propTypes = {
  sales: PropTypes.array.isRequired,
  customer: PropTypes.string.isRequired,
};

export default CustomerSales;
