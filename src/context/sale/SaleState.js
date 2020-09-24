import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import SaleContext from './saleContext';
import saleReducer from './saleReducer';
import {
  ADD_SALE,
  DELETE_SALE,
  UPDATE_SALE,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_SALES,
  CLEAR_FILTER,
} from '../types';

const SaleState = (props) => {
  const initialState = {
    sales: [
      {
        id: 1,
        customer: 'Matheus',
        date: '22/09/2020',
        products: [
          {
            productName: 'Sabonete Ekos',
            category: 'Natura',
            unitPrice: 24.9,
            quantity: 2,
          },
          {
            productName: 'Hidratante Tododia',
            category: 'Natura',
            unitPrice: 46.9,
            quantity: 1,
          },
        ],
      },
      {
        id: 2,
        customer: 'Suellen',
        date: '30/08/2020',
        products: [
          {
            productName: 'Colônia Luna',
            category: 'Natura',
            unitPrice: 129.9,
            quantity: 1,
          },
        ],
      },
      {
        id: 3,
        customer: 'Suellen',
        date: '20/09/2020',
        products: [
          {
            productName: 'Desodorante',
            category: 'Natura',
            unitPrice: 17.9,
            quantity: 2,
          },
        ],
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(saleReducer, initialState);

  // Add sale
  const addSale = (sale, products) => {
    sale.id = uuid();
    let formattedDate = [];
    formattedDate = sale.date.split('-');
    formattedDate = formattedDate.reverse().join('/');
    sale.date = formattedDate;

    let newSale = { ...sale, products };

    dispatch({ type: ADD_SALE, payload: newSale });
  };

  // Delete sale

  // Set current sale
  const setCurrent = (sale) => {
    dispatch({ type: SET_CURRENT, payload: sale });
  };

  // Clear current sale
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update sale
  const updateSale = (sale, products) => {
    let formattedDate = [];
    formattedDate = sale.date.split('-');
    formattedDate = formattedDate.reverse().join('/');
    sale.date = formattedDate;

    let newSale = { ...sale, products };

    dispatch({ type: UPDATE_SALE, payload: newSale });
  };

  // Filter sale
  const filterSales = (text) => {
    dispatch({ type: FILTER_SALES, payload: text });
  };

  // Clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <SaleContext.Provider
      value={{
        sales: state.sales,
        current: state.current,
        filtered: state.filtered,
        addSale,
        updateSale,
        setCurrent,
        clearCurrent,
        filterSales,
        clearFilter,
      }}
    >
      {props.children}
    </SaleContext.Provider>
  );
};

export default SaleState;
