import React, { Component } from 'react';
import Product from './Product/Product';
import  './Products.css';



class products extends Component {


    render() {
        let details = this.props.products.map((obj, index)=>
        {
        return <Product key ={index} result={obj}/>})
        
        return (
            <div className ='products'>
                    {details}               
            </div>
        );
    }
}

export default products;