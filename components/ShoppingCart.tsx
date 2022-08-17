import React, { useContext } from 'react';
import { Context } from '../pages/_app';
import ShoppingCartItem from './ShoppingCartItem';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { ProductInfo } from './../types/index'

//current items are sample only, change to actual cart items
const ShoppingCart = (cartItems:any) => {

  const context:any = useContext(Context);

  return (
    <div className="w-full">
      <div className="flex flex-row">
        <div>
          <h1 className="text-3xl">MY CART</h1>
        </div>
        <div className="flex flex-row flex-end">
        <ShoppingCartIcon component={ShoppingCartIcon} inheritViewBox />
          <h1>
            In Cart:()
          </h1>
        </div>
      </div>
        { cartItems &&
        (cartItems
          .filter((item:ProductInfo) => item.Product_line == "Summit")
          .map((item:ProductInfo) => {
            return (
              <div>
                  <a><ShoppingCartItem key={item.Id} item={item} /></a>
              </div>
            )
          }))}
    </div>
  )
}

export default ShoppingCart