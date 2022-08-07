import '../styles/globals.scss';
import "../styles/addStyles.css"
import type { AppProps } from 'next/app';
import React, { useReducer } from 'react';
import Provider from "next-auth/react";

interface ContextInterface {
    context: any; 
    dispatch: any;
}

export const Context = React.createContext<ContextInterface | null>(null);

export const reducer = (state:any, action:any) => {

  switch(action.type) {
    case 'setCartOpen':
      return { ...state, cartOpen: action.payload};
    case 'setCartItems':
      return { ...state, cartItems: action.payload};
    default:
      return console.error('Invalid action');
  }
}

export default function MyApp({ Component, pageProps }: AppProps) {

  const [context, dispatch] = useReducer(reducer, {
    cartOpen:false,
    cartItems:[]
    });
  

  return (
    <Context.Provider
        value={{context, dispatch}}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}

