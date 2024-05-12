'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function edit() {
  const [Data, setData] = useState({});
  const [Loading, setLoading] = useState(false);
  const [Vis, setVis] = useState('');
  function editing() {
    setVis('visible');
  }
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/products/')
      .then((e) => {
        setData(e.data.allproducts);
        console.log('data has arrived successfully : ', e.data.allproducts);
        setLoading(true);
      })
      .catch((er) => {
        console.log('here is an error : ', er);
      });
    // console.log(products);
  }, []);
  if (!Loading) {
    return (
      <>
        <div className="flex">
          <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto bg-cyan-400">
            <div class="animate-pulse flex space-x-4">
              <div class="rounded-full bg-slate-700 h-10 w-10"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-700 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto bg-cyan-400">
            <div class="animate-pulse flex space-x-4">
              <div class="rounded-full bg-slate-700 h-10 w-10"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-700 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto bg-cyan-400">
            <div class="animate-pulse flex space-x-4">
              <div class="rounded-full bg-slate-700 h-10 w-10"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-700 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-2 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          onClick={() => {}}
          className="conta p-4 rounded w-max min-h-[8rem] bg-green-600/80  "
        >
          <p>hello</p>
        </div>
        <div className="grid grid-cols-4 w-[100%] pr-4 gap-2">
          {Data.map((e) => {
            console.log(e.Ename);
            return (
              <>
                <div
                  className="bg-indigo-400 my-1 min-w-[8rem] w-[100%] rounded-md p-2"
                  key={e._id}
                >
                  <div className="flex">
                    <p>نام انگلیسی : </p>
                    {e.Ename}
                  </div>
                  <div className="flex">
                    <p>price : </p>
                    {e.price}
                  </div>
                  <div className="flex">
                    <p>description : </p>
                    {e.description}
                  </div>
                  <Link href={`edit/${e._id}`}>
                    <button className="bg-cyan-400 px-4 py-2 rounded-md hover:bg-cyan-600 transition duration-700 w-[100%]">
                      edit
                    </button>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
  // return (
  //   <>
  //     {Loading ? (
  //       <div className="conta p-4 rounded w-max min-h-[8rem] bg-green-600/80  ">
  //         <p>hello</p>
  //       </div>
  //     ) : (
  //       'loading...'
  //     )}
  //   </>
  // );
}
