import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="fixed mx-auto p-10 px-10 h-min-600 w-full bg-black text-white flex-grow-1 z-10">
      <div className="float-left ml-20">
      <Link href="/">
         <span className="text-3xl cursor-pointer font-thin font-serif ">DANNI PARCCA</span>
      </Link>
      </div>
      <div className="float-right mr-32 flex flex-row gap-4">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      <input className="text-black rounded-md" type="search" name="SiteSearch" placeholder="  Search..."></input>
      <Link href="/cart">
      Shopping Cart ( )
      </Link>
      <div>Sign In</div>
      </div>
    </div>
  )
}

export default Header;