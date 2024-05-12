'use client';
import { Menu, Search, ShoppingCart } from 'lucide-react';
import React from 'react';

export default function HomeNav() {
  return (
    <>
      <div className="w-[80vw] bg-gray-500 flex justify-between [&>div]:flex [&>div]:items-center min-h-[3rem] px-2">
        <div className="gap-2">
          <button>
            <ShoppingCart />
          </button>
          <button>
            <Search />
          </button>
        </div>
        <div className="gap-2">
          <h1 className="flex items-center font-medium">Manto LOTUS</h1>
          <button onClick={() => console.log('hi')}>
            <Menu />
          </button>
        </div>
      </div>
      <div className="z-10 bg-green-700 w-[9rem] h-[9rem]"></div>
    </>
  );
}
