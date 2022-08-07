import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from "../../../lib/prisma";

export const createUserVIPUser = async (req: NextApiRequest, res: NextApiResponse) => {

    //Need authentication / password hashing here
    const { newUserName, newPassword, newEmail } = req.body;
  
    try {

      await prisma.users.create({
          data: {
          Username: newUserName,
          email: newEmail,
          Password: newPassword,
          User_type: "VIP"
          }
      });
      
    } catch(error) {
      res.status(400).json({ error });
    }
  
};