// import { getServerSession } from 'next-auth';
import Image from 'next/image';
import React from 'react';

import edit from '@/public/icons/edit.png';
import message from '@/public/icons/email.png';
import settic from '@/public/icons/setting.png';
export default async function page() {
  // const session = await getServerSession();
  // console.log(session);

  return (
    <>
      <div className="bg-green-400 h-[100vh] min-w-12 w-[13rem] flex flex-col py-3 items-center justify-evenly pl-4 rounded-e-md gap-2 text-[#121212]">
        <div className="w-[90%] grid grid-cols-2 justify-items-start">
          <Image src={edit} width={32} /> New Item
        </div>
        <div className="w-[90%] grid grid-cols-2 justify-items-start">
          <Image src={message} width={32} />
          notifications
        </div>
        <div className="w-[90%] grid grid-cols-2">
          <Image src={settic} width={32} />
          settings
        </div>
      </div>
    </>
  );
}
