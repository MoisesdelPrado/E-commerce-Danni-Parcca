import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from "../../../lib/prisma";

export const removeUser = async (req: NextApiRequest, res: NextApiResponse) => {

    const { Username } = req.body;

    //const removeUser = await prisma.users.delete();

    try {
        await prisma.users.delete({
        where: {
            Username: Username
        }
    });

    } catch (error) {
        res.status(400).json({ error });
    }

};