'use client';
import {
  BadgePlus,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Coffee,
  Edit,
  Settings,
  User,
} from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Sidebar() {
  const [IsClosed, setIsClosed] = useState(false);
  return (
    <>
      <aside
        className={`h-[100vh] bg-indigo-400 px-4 pt-4 flex flex-col transition-all relative duration-700 ${
          IsClosed ? '' : ''
        }`}
        style={{
          backgroundColor: 'rgb(90 100 260)',
          width: IsClosed ? `25%` : '5%',
          minWidth: IsClosed ? '8%' : '10%',
        }}
      >
        <div className={`flex ${IsClosed ? 'justify-end' : 'justify-center'}`}>
          {IsClosed ? (
            <span
              className="transition-all duration-700"
              onClick={() => {
                setIsClosed(false);
              }}
            >
              <ChevronLeft />
            </span>
          ) : (
            <span
              className="transition-all duration-700"
              onClick={() => {
                setIsClosed(true);
              }}
            >
              <ChevronRight />
            </span>
          )}
        </div>
        <ul className="gap-4 flex flex-col mt-8">
          <Link href={'/dashboard/'}>
            <li
              className={`gap-4 transition-all duration-700 ${
                IsClosed ? 'justify-start' : 'justify-center'
              }`}
            >
              <User />
              <p className={`${IsClosed ? '' : 'hidden'}`}>Profile</p>
            </li>
          </Link>
          <Link href={'/dashboard/add'}>
            <li
              className={`gap-4 transition-all duration-700 ${
                IsClosed ? 'justify-start' : 'justify-center'
              }`}
            >
              <BadgePlus />
              <p className={`${IsClosed ? '' : 'hidden'}`}>Add</p>
            </li>
          </Link>
          <Link href={'/dashboard/edit'}>
            <li
              className={`gap-4 transition-all duration-700 ${
                IsClosed ? 'justify-start' : 'justify-center'
              }`}
            >
              <Edit />

              <p className={`${IsClosed ? '' : 'hidden'}`}>Edit</p>
            </li>
          </Link>
          <li
            className={`gap-4 transition-all duration-700 ${
              IsClosed ? 'justify-start' : 'justify-center'
            }`}
          >
            <Settings />
            <p className={`${IsClosed ? '' : 'hidden'}`}>setting</p>
          </li>
        </ul>
        <div className="bg-blue-800 absolute h-[24px] bottom-0 left-0  w-full">
          <hr className="bg-green-800" />
          <div
            className={`transition-all duration-700 ${
              IsClosed ? 'justify-between' : 'justify-center'
            } p-2 flex px-8`}
          >
            <Coffee />
            <p
              className={`${
                IsClosed ? 'visible' : 'hidden'
              } transition-all duration-700`}
            >
              hello sir
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
