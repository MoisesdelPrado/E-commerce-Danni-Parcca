import React from 'react';
import Image from 'next/image';
import { ProductInfo } from '../types/index';


const ProductBox = (prod: ProductInfo) => {

  const { Product_name, Category, Image_src } = prod;  

  return (
      <div className="container bg-gray-50 mx-auto shadow-xl border-2 rounded-2xl p-4 flex flex-col hover:scale-110 hover:transition-transform ease-in-out duration-300">
        <div className="mx-auto">
          <Image src={Image_src} height={175} width={150} />
        </div>
        <div className="align-center mx-auto font-serif text-xl">
          <p>{Product_name}</p>
        </div>
        <div className="align-center mx-auto text-orange-500 ">
          <p>{Category}</p>
        </div>
        <div className="align-center mx-auto">
          <button className="rounded-lg shadow-lg bg-cyan-400 hover:bg-orange-300 transition-background ease-in-out duration-300 mx-auto p-2 font-bold ">ADD TO CART</button>
        </div>
      </div>
  )
}

export default ProductBox;