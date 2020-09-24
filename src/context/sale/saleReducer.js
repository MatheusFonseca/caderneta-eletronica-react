import {
  ADD_SALE,
  DELETE_SALE,
  UPDATE_SALE,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_SALES,
  CLEAR_FILTER,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_SALE:
      return {
        ...state,
        sales: [...state.sales, action.payload],
      };
    case UPDATE_SALE:
      return {
        ...state,
        sales: state.sales.map((sale) =>
          sale.id === action.payload.id ? action.payload : sale
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_SALES:
      return {
        ...state,
        filtered: state.sales.filter((sale) => {
          const regex = new RegExp(`${action.payload.trim()}`, 'gi');
          return sale.customer.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};
