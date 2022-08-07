import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from "../../../lib/prisma";

export const createUser = async (req: NextApiRequest, res: NextApiResponse) => {

    //Need authentication / password hashing here
    const { newUserName, newPassword } = req.body;
  
    try {

      await prisma.users.create({
          data: {
          Username: newUserName,
          Password: newPassword,
          User_type: "Customer"
          }
      });
      
    } catch(error) {
      res.status(400).json({ error });
    }
  
};