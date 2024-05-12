'use client';
import './botbar.css';

import React, { useState } from 'react';

import { AiOutlineMap, AiOutlineHome, AiOutlineProfile } from 'react-icons/ai';
import { IoHomeOutline, IoMapOutline, IoPersonOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import {Instagram} from 'lucide-react'
import { FaHome, FaMap, FaPersonBooth } from 'react-icons/fa';
import Link from 'next/link';

function Botbar() {

  return (
    <>
      <div className={'border-t-[1px] border-black [&>div]:w-[80%] bg-[#ece9e0] min-h-[8rem] h-max pb-[2rem] sm:px-[3rem] npm run px-0 pt-[1rem] grid sm:grid-cols-4 lg:grid-cols-1 w-full'} id={'main-footer'}>
        <div className={'flex-col items-end lg:justify-center'}>
            <h2 className={'text-black text-[22px] mb-3 text-end'}>به خانواده دژاوو بپیوندید</h2>
            <form className={'[&>input]:placeholder:text-black/80 [&>input]:placeholder:text-[12px] [&>input]:placeholder flex flex-col gap-4'} action="">
                <input id={'first-name'} placeholder='نام' className={'bg-transparent outline-none border-b-[1px] border-black'} type="text" />
                <input id={'last-name'} placeholder='نام خانوادگی' className={'bg-transparent outline-none border-b-[1px] border-black'} type="text" />
                <input id={'email'} placeholder='ایمیل' className={'bg-transparent outline-none border-b-[1px] border-black'} type="text" />
                <input id={'date'} placeholder='تاریخ تولد' className={'bg-transparent outline-none border-b-[1px] border-black'} type="text" />
                <div>
                    <button className={'bg-black/20 hover:bg-black/35 transition duration-500 w-full px-1 py-2 rounded'} type={'submit'}>ثبت نام</button></div>
            </form>
        </div>
        <div className={'flex flex-col items-end font-thin gap-2'}>
            <h1 className={'font-semibold mb-4 text-[20px]'}>درباره ما</h1>

               <Link href={'/about'}>
                 ارتباط با ما
             </Link>
                 <Link href={'/about'}>
                    به ما بپیوندید
                 </Link>
                 <Link href={'/about'}>
                     خط مشی
                 </Link>

        </div>
        <div className={'flex-col justify-end '}>
            <h1 className={' mb-5 font-semibold text-end'}>ساعت فعالیت</h1>
            <div className={'flex flex-col text-end'}>
               <p> هر روز هفته از 9:30 الی 12</p>
                <button className={'bg-gray-900 transition-all duration-500 hover:bg-gray-500 w-full rounded-md py-2 mt-2 text-white/90'}>رزرو آنلاین</button>
            </div>
        </div>
        <div className={'flex-col justify-end items-end text-end'}>
            <h1 className={'font-semibold mb-3'}>ارتباط با ما</h1>
            <div className={'flex flex-col'}>
                <h3>DEJAVU</h3>
                <h1 className={'underline'}>مرکز خرید روشا، طبقه نهم و دهم(روف گاردن)</h1>
                <h1 className={''}>Dejavugarden@Dejavu.com</h1>
                <h1 className={''}>+21 999 000 11</h1>

            </div>
            <div className={'w-full flex justify-end'}><Instagram className={' mt-5'} /></div>
        </div>
      </div>
        <div className={'w-full bg-[#ece9e0] border-t border-black/90 text-center py-3 font-thin  h-2rem'}>
            All Rights Reserved
        </div>
    </>
  );
}

export default Botbar;
