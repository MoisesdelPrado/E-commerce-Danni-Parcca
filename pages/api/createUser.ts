import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from "@prisma/client";

export const createUser = async (req: NextApiRequest, res: NextApiResponse) => {

    //Need authentication / password hashing here
      const { newUserName, newPassword } = req.body;

      const prisma = new PrismaClient();
    
       await prisma.users.create({
            data: {
            Username: newUserName,
            Password: newPassword,
            Admin: false
            }
        });
    
};