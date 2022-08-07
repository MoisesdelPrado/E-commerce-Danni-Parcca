import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from "../../../lib/prisma";

export const removeProduct = async (req: NextApiRequest, res: NextApiResponse) => {
    
    const { Product_name } = req.body;

    try {

        await prisma.product.delete({
        where: { 
            Product_name: Product_name
        }
        });

    } catch (error) {
        res.status(400).json({ error });
    }



};