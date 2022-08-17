import '../styles/globals.scss';
import "../styles/addStyles.css"
import type { AppProps } from 'next/app';
import React, { useReducer } from 'react';
import { useSession, SessionProvider } from "next-auth/react";

interface ContextInterface {
    context: {}; 
    dispatch: {};
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

export default function MyApp({ 
  Component, 
  pageProps : { session, ...pageProps }
 }: AppProps) {

  const [context, dispatch] = useReducer(reducer, {
    cartOpen:false,
    cartItems:[]
    });
  

  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      {Component.auth ? (
      <Auth>
        <Context.Provider
            value={{context, dispatch}}>
          <Component {...pageProps} />
        </Context.Provider>
      </Auth>
      )
      :
      ( 
        <Context.Provider
            value={{context, dispatch}}>
          <Component {...pageProps} />
        </Context.Provider>
      )
    }
    </SessionProvider>
  );
}

function Auth({ children }: any) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true })

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return children;
}


