import React from 'react';
import { prisma } from '../../lib/prisma'
import { NextPage, GetServerSideProps, GetStaticProps, GetStaticPaths } from 'next';
import { Header, Footer, IndividualProductCard } from '../../components';
import { useRouter } from 'next/router';

const productPage: NextPage = ({ product }: any) => {

  const router = useRouter();
  const { Product_name, Description, Category, Product_line, Price, In_Stock, Image_src, Id } = product;

  if(router.isFallback) {
    return <h1>Loading....</h1>
  }

  return (
    <div className="h-screen w-full flex flex-col">
      <Header />
      <IndividualProductCard productinfo={product} />
      <div className="my-auto"></div>
      <Footer />
    </div>
  )

}


export const getStaticProps : GetStaticProps = async (context:any) => {


  const product = await prisma.product.findFirst({
    where: {
      Product_name: context.params.productPage
    },
    select: {
      Product_name: true,
      Id: true,
      Description: true,
      Category: true,
      Product_line: true,
      Price: false,
      Rating: false,
      NumberOfRatings: false,
      In_Stock: false,
      Image_src: true
    }
  });

  return { 
      props: { product },
      revalidate: 10000
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  
  
  let products = await prisma.product.findMany({
    select: { 
      Product_name: true,
    }
  }); 

  return {
    fallback: false,
    paths: Array.from(products.map((product:any) => {
      return (
        { params: { productPage: `${product.Product_name}` } }
        );
    }))
  }
}

export default productPage;