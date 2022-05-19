import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from 'next';


declare global { 
    var prisma: PrismaClient | undefined;
}

var prisma: any;

//check if we are running in production mode
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
//check if there is already a connection to the database
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

const PORT = 4000;

export const createUser = async (req: NextApiRequest, res: NextApiResponse) => {

//Need authentication / password hashing here
  const { newUserName, newPassword } = req.body;

   await prisma.users.create({
        data: {
        Username: newUserName,
        Password: newPassword,
        Admin: false
        }
    });

};

export const removeUser = async (req: NextApiRequest, res: NextApiResponse) => {


    //const removeUser = await prisma.users.delete();

};

export const editUser = async (req: NextApiRequest, res: NextApiResponse) => {

  
//Need authentication / password hashing here
   //const editUser = await prisma.users.update();
};


export const getProducts = async (req: NextApiRequest, res: NextApiResponse) => {

    const products = await prisma.product.findMany();

    
};

export const editProduct = async (req: NextApiRequest, res: NextApiResponse) => {


};

export const addProduct = async (req: NextApiRequest, res: NextApiResponse) => {
    
    
};

export const removeProduct = async (req: NextApiRequest, res: NextApiResponse) => {
    

};