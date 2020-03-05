import React from 'react';
import Button from '../../Button/Button';

const Product = (props) => {
    return (
        <div className="Box" key={props.id}>
            <h3> { props.name } </h3>
            <span>{ props.price }</span>
            <br/><br/>
            <Button> Add to Cart </Button>
        </div>
    )
}

export default Product;