import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from "../../../lib/prisma";

export const editUser = async (req: NextApiRequest, res: NextApiResponse) => {

    const { Username, newUserName, newPassword, userType } = req.body;

    //Need authentication / password hashing here
    
    try {
        await prisma.users.update({
        where: {
            Username: Username,
        },
        data: {
            Username: newUserName,
            Password: newPassword,
            User_type: userType
        }
    });

    } catch(error) {
        res.status(400).json({ error });
    }

};