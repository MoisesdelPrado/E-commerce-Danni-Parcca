import type { NextPage, GetStaticProps } from 'next';
import { PrismaClient } from '@prisma/client';
import { Header, Footer, FeatureBoard, ProductEncaseBox, Carousel } from '../components';

const Home: NextPage = ({ products }: any) => {
  return (
        <div className="h-screen w-full flex flex-col">
        <Header />
        <FeatureBoard />
        <Carousel />
        <ProductEncaseBox products={products} />
        <Footer />
        </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const prisma = new PrismaClient();
  let products = await prisma.product.findMany({
    select: { 
      Product_name: true,
      Id: true,
      Description: true,
      Category: true,
      Flavor: true,
      Price: false,
      Rating: false,
      NumberOfRatings: false,
      In_Stock: false,
      Image_src: true
    }
  });

  return { 
      props: { products }
  }
}

