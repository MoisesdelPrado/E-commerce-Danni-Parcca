import React from 'react';
import ProductBox from './ProductBox';
import Link from 'next/link';

const ProductEncaseBox = ({products}: any) => {
  return (
    <div className="mx-auto my-10 pb-10 bg-white h-min-600 w-5/6 flex-grow-4 grid grid-cols-2 gap-8 lg:grid-cols-5 lg:w-3/5 ">
      {products.map((product:any) => {
       return(
      <div>
        <Link key={product.Product_name} href="/productPage/:Product_name">
          <a><ProductBox product={product} /></a>
        </Link>
      </div> 
       );
      })}
    </div>
  )
}

export default ProductEncaseBox;