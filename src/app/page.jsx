'use client';

import HomeNavbar from '@/component/HomeNavbar';
import React, { useState } from 'react';
import HomeContent from "@/component/HomeContent";
import Botbar from "@/component/botbar";

export default function Page() {
  return (
    <>
      <HomeNavbar />
        <HomeContent/>
        <Botbar/>

    </>
  );
}
