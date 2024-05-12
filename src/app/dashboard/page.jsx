import { getServerSession } from 'next-auth';
import Image from 'next/image';
import React from 'react';

export default async function page() {
  const session = await getServerSession();
  console.log(session);

  return (
    <>
      <div>
        <div>username :</div>
        <div>change password</div>
      </div>
    </>
  );
}
