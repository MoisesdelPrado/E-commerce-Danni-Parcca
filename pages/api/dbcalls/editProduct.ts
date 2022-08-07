import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from "../../../lib/prisma";

export const editProduct = async (req: NextApiRequest, res: NextApiResponse) => {

    const { Product_name, Description, Category, Product_line, Price, In_Stock, Image_src } = req.body;

    try {
        await prisma.product.update({
        where: { 
            Product_name: Product_name
        },
        data: { 
            Product_name: Product_name,
            Description: Description,
            Category: Category,
            Product_line: Product_line,
            Price: Price,
            In_Stock: In_Stock,
            Image_src: Image_src
        }

    })

    } catch(error) {
        res.status(400).json({ error });
    }


};