import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProductInfo } from './../types/index';

const ShoppingCartItem = (item:ProductInfo) => {

const { Product_name, Description, Category, Product_line, Price, In_Stock, Image_src, Id } = item;

  return (
    <div className="bg-blue-300 mt-10 mb-2 mx-auto h-72 h-min-600 w-5/6 text-black shadow-2xl rounded-lg flex flex-row">
        <div className="mx-auto mt-5">
                    <Link 
                      key={Product_name} 
                      href={{
                        pathname:`/products/[productPage]`,
                        query: { productPage: Product_name }
                      }}
                      as={`products/${Product_name}`}
                      >
                <Image src={Image_src} height={200} width={150} />
                      </Link>
        </div>
        <div className="ml-2">
            <h1 className="text-black text-3xl mt-5">{Product_name}</h1>
            <h1>{Description}</h1>
            <h1>{Category}</h1>
        </div>
    </div>
  )
}

export default ShoppingCartItem;