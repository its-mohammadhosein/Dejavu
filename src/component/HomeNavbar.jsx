import React from 'react';
import Link from "next/link";

export default function HomeNavbar() {
  return (
    <>
      <div
        className="w-full bg-white min-h-[6rem] py-4 grid grid-cols-[20%,60%,20%] px-6 sticky top-0"

      >
        <div className=" font-bold text-3xl flex items-center" id="home-logo">
          DEJAVU
        </div>
        <div className="flex items-center justify-center gap-4" id="home-navmenu">

          <Link className={'link-trans-all'} href={'/menu'}>
            <p>Menus</p>
          </Link>
          <Link className={'link-trans-all'} href={'/menu'}>
            <p>Private dining & Events</p>
          </Link>
          <Link className={'link-trans-all'} href={'/menu'}>
            <p>Origins</p>
          </Link>
          <Link className={'link-trans-all'} href={'/menu'}>
            <p>Stories</p>
          </Link>
          <Link className={'link-trans-all'} href={'/menu'}>
            <p>Contacts</p>
          </Link>

        </div>
        <div
          className="flex items-center "
          id="home-book"
          style={{ justifyContent: 'end', paddingRight: '2rem' }}
        >
          <button className="bg-gray-100 p-6 rounded-sm transition-all duration-[450ms]  hover:bg-gray-200">
            BOOK A Table
          </button>
        </div>
      </div>
    </>
  );
}
