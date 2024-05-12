import { login } from '@/lib/formdata';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <>
      <div className="w-[100%] h-[100%] flex justify-center items-center">
        <div className="bg-green-300 w-[30vw] h-[20rem] flex flex-col item center">
          <h1>welcome</h1>
          <h1>You can register here</h1>
          <form className="mt-2">
            <div className="grid grid-cols-[1fr,1fr] m-2 ml-4">
              <label htmlFor="Username" className="w-[auto]">
                username:{' '}
              </label>
              <input
                type="text"
                name="Username"
                className="w-[100%] text-green-200 outline-none border-none"
                id="Username"
              />
            </div>
            <div className="grid grid-cols-2 m-2 ml-4">
              <label htmlFor="Password">Password: </label>
              <input
                className="focus-visible:border-blue-500 focus:border-blue-500 focus-visible:border-4 text-green-200 outline-none border-none"
                type="text"
                name="Password"
                id="Password"
              />
            </div>
            <div className="grid grid-cols-2 m-2 ml-4">
              <label htmlFor="Password">Password repeat: </label>
              <input
                className="focus-visible:border-blue-500 focus:border-blue-500 focus-visible:border-4 text-green-200 outline-none border-none"
                type="text"
                name="Password"
                id="Password"
              />
            </div>
            <Link href={'/enter'}>
              <button type="submit" className="w-[100%] bg-blue-300 mt-8">
                login
              </button>
            </Link>
            <div className="flex justify-center items-center w-[100%] my-4">
              <h2 className="">-OR-</h2>
            </div>
            <button type="submit" className="w-[100%] text-center bg-blue-300 ">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
