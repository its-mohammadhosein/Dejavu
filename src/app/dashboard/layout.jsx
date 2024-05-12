import React from 'react';
import './dash.css';
import '@/app/globals.css';

import Sidebar from '@/component/Sidebar';
export default async function dashboardLayout({ children }) {
  const anim = 'hover:bg-cyan-500 transition duration-700 pl-4';
  const divs = 'flex items-center py-2 gap-6';
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Document</title>
        </head>
        <body>
          <div className="flex min-h-[100vh]">
            <Sidebar />
            <section className="main w-[100%] pt-8 pl-6 bg-cyan-300">
              {children}
            </section>
          </div>
        </body>
      </html>
    </>
  );
}
