import React from 'react';

import Product from '../Product/Product';

const RelatedProducts = (props) => {
    let related = props.related.map((product) => {
        return (
            <Product {...product} key={product.id}/>
        )
    });
    return (
        <>
            <h2>Related Products...</h2>
            <div className="related">
                { related }
            </div>
        </>    
    )
}

export default RelatedProducts;
