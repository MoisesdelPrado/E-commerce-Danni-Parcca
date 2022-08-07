import React from 'react';
import Image from 'next/image';

const IndividualProductCard = ({ productinfo }:any) => {

  const { Product_name, Description, Category, Product_line, Price, In_Stock, Image_src, Id } = productinfo;

  return (
    <div className="bg-blue-300 mt-52 mb-10 mx-auto h-72 h-min-600 w-3/5 text-black shadow-2xl rounded-lg flex flex-col">
        <div className="mx-auto mt-5">
          <Image src={Image_src} height={200} width={150} />
        </div>
        <h1 className="text-black text-3xl">{Product_name}</h1>
        <h1>{Description}</h1>
        <h1>{Category}</h1>
    </div>
  )
}

export default IndividualProductCard;