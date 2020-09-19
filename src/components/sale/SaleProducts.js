import React, { Fragment, useState } from 'react';
import ProductItem from './ProductItem';
import Button from '../layout/Button';

const SaleProducts = () => {
  const [quantity, setQuantity] = useState(1);
  // const [products, setProducts] = useState([
  //   {
  //     name: '',
  //     qtt: 1,
  //     unitPrice: 0,
  //     price: 0,
  //   },
  // ]);

  const addProduct = (e) => {
    e.preventDefault();
    setQuantity(quantity + 1);
    // setProducts([
    //   ...products,
    //   {
    //     name: '',
    //     qtt: 1,
    //     unitPrice: 0,
    //     price: 0,
    //   },
    // ]);
  };

  let products = [];

  const onDelete = (e) => {
    const productIndex = e.target.getAttribute('data-productid');
    products = products.filter(
      (product, index) => index !== parseFloat(productIndex)
    );
    setQuantity(quantity - 1);
  };

  for (var i = 0; i < quantity; i++) {
    products.push(<ProductItem key={i} index={i + 1} />);
  }

  return (
    <Fragment>
      {products.map((product, index) => (
        <fieldset
          key={index}
          className='sale-form__fieldset span1-2 bg-light grid-2 sale-form__fieldset--product'
        >
          {index > 0 && (
            <i
              data-productid={index}
              className='fas fa-times'
              onClick={onDelete}
            ></i>
          )}
          {product}
        </fieldset>
      ))}
      <Button
        className='span2-1'
        onClick={addProduct}
        text='Adicionar Produto'
      ></Button>
    </Fragment>
  );
};

export default SaleProducts;
