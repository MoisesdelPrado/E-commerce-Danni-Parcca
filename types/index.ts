export interface ProductInfo { 
    Product_name: string;
    Id: number;
    Description: string;
    Category: string;
    Product_line: string;
    Price: number;
    Rating: number;
    NumberOfRatings?: number;
    In_Stock: boolean;
    Image_src: string;
}

export interface ProductProps {
    product: ProductInfo;
}

export interface ProductArray {
    products: ProductInfo[] | null;
}

