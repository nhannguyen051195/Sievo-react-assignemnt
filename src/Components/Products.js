import React from 'react';
import Product from './Product/Product';
import './Products.css';

function Products(props) {
  // eslint-disable-next-line react/no-array-index-key
  const details = props.products.map((obj, index) => <Product key={index} result={obj} />);
  return (
    <div className="products">
      {details}
    </div>
  );
}
export default Products;
