import React, { Component } from 'react';

import Product from './Product/Product';
import RelatedProducts from './Related/RelatedProducts';

import { connect }  from 'react-redux';

class Products extends Component{
    constructor(){
        super();
        this.state = {
            products: [
                {id: 1,category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
                {id: 2,category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
                {id: 3,category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
                {id: 4,category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
                {id: 5,category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
                {id: 6,category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
            ],
            related: [
                {
                    id: 1,
                    name: 'Product Name',
                    desc: 'Product Desc',
                    qty: 20,
                    price: 100
                },
                {
                    id: 2,
                    name: 'Product Name 2',
                    desc: 'Product Desc 2',
                    qty: 30,
                    price: 70
                },
            ]
        }
    }

    render(){
        let products = <p>No Products Found...</p>;
        if(this.state.products.length > 0){
            products = this.state.products.map((prod) => {
                return(
                    <Product {...prod} key={prod.id}/>
                )    
            });
        }
        
        let relatedproduct = <p>Please login to see related products...</p>;
        if(this.props.isAuth){
            relatedproduct = (
                <RelatedProducts related={this.state.related}/>
            );
        }
        return (
            

            <>
                {products}
                {relatedproduct}
            </>    
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.isAuthenticate
    }
}

export default connect(mapStateToProps)(Products);