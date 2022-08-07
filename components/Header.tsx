import React from 'react';
import Link from 'next/link';
import { useContext } from 'react';
import { Context } from '../pages/_app';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

export const Header = () => {

  const context:any = useContext(Context);

  return (
    <div className="fixed mx-auto p-10 px-10 h-min-600 w-full bg-black text-white flex-grow-1 z-10">
      <div className="float-left ml-20">
      <Link href="/">
         <span className="text-3xl cursor-pointer font-thin font-serif">DANNI PARCCA</span>
      </Link>
      </div>
      <div className="float-right mr-32 flex flex-row gap-4">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      <input className="text-black rounded-md" type="search" name="SiteSearch" placeholder="  Search..."></input>
      <div className="flex flex-row cursor-pointer" onClick={context.dispatch({type:'setCartOpen', payload:true})}>
        <ShoppingCartIcon component={ShoppingCartIcon} inheritViewBox />
        <h1>Shopping Cart ( )</h1>
      </div>
      <Link href="/register/signup">
        <div className="cursor-pointer">Sign In</div>
      </Link>
      <Link href="/register/login">
        <div className="cursor-pointer">Login</div>
      </Link>
      </div>
    </div>
  )
}

export default Header;