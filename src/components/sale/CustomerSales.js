import React from 'react';

const CustomerSales = () => {
  return (
    <div className='customer-card'>
      <p className='customer-card__name'>Matheus</p>
      <div className='customer-card__tablehead'>
        <div className='customer-card__date'>
          <p>22/09/2020</p>
        </div>
        <i className='fas fa-edit'></i>
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
          <tr>
            <td>Sabonete Ekos</td>
            <td>Natura</td>
            <td>R$ 24,90</td>
            <td>2</td>
            <td>R$ 49,80</td>
          </tr>
          <tr>
            <td>Hidratante Tododia</td>
            <td>Natura</td>
            <td>R$ 46,90</td>
            <td>1</td>
            <td>R$ 46,90</td>
          </tr>
        </tbody>
      </table>
      <div className='customer-card__tablehead p-1 m-0'>
        <p className='text-bold'>Total</p>
        <p className='text-bold'>R$ 96,70</p>
      </div>
      {/* PAGAMENTO */}
      <div className='customer-card__tablehead'>
        <div className='customer-card__date customer-card__date--success'>
          <p>22/09/2020</p>
        </div>
        <i className='fas fa-edit text-success'></i>
      </div>
      <div className='customer-card__tablehead p-1 m-0'>
        <p className='text-bold text-success'>Pagamento</p>
        <p className='text-bold text-success'>R$ 50,00</p>
      </div>
      <div className='customer-card__tablehead p-1 bg-dark'>
        <p className='text-bold text-light'>Débito Final de Matheus</p>
        <p className='text-bold text-light'>R$ 46,70</p>
      </div>
    </div>
  );
};

export default CustomerSales;
