import React from 'react';
import { useRouter } from 'next/router';

const productPage = () => {

  const router = useRouter();

  console.log(router);

  return (
    <div>productPage</div>
  )
}

export default [productPage];