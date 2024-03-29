import type { NextPage, GetStaticProps } from 'next';
import React, { useContext, useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Context } from './_app';
import { prisma } from '../lib/prisma';
import { Header, Footer, ProductLines, ShoppingCart, FeaturedCarousel } from '../components';
import { Drawer } from '@mui/material';
import { ProductArray } from '../types/index';

const Home: NextPage<ProductArray> = ({ products }) => {

  const { data: session, status } = useSession();
  const loading = status === "loading";
  const [ cartOpen, setCartOpen ] = useState(false);
  const context:any = useContext(Context);

  return (
    <div className="h-screen w-full flex flex-col">
      {session && (
        <>
          <Header />
          <Drawer anchor="right" open={cartOpen} onClose={() => context.dispatch({type:'setCartOpen', payload:false})}>
            <ShoppingCart cartItems={products} />
          </Drawer>
          <ProductLines products={products} />
          <FeaturedCarousel featuredProducts={products}/>
          <div className="mx-auto my-20">
            <button className="cursor-pointer border-2" onMouseDown={() => setCartOpen(true)}>OPEN CART</button>
            <br></br>
            <input type="checkbox"></input>
            <br></br>
            <input type="radio"></input>
          </div>
          <Footer />
        </>
      )}
      {session && (
          <>
          Signed in as {session}
          <button>Sign out</button>
          </>
      )}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {

  let products = await prisma.product.findMany({
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
      props: { products },
      revalidate: 10000
  }
}

export default Home;
