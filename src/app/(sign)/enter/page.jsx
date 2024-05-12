'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
const Enter = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const { data: session, status: sessionStatus } = useSession();
  const gettingfullsession = useSession();
  useEffect(() => {
    console.log(sessionStatus);
    console.log(session);
    if (sessionStatus === 'authenticated') {
      console.log(session.user);
      router.push('/dashboard');
      // router.replace('/dashboard');
    }
  }, [sessionStatus, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    console.log(username, password);
    const res = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });
    if (res?.error) {
      console.log(res);
      setError('Invalid email or password');
      if (res?.url) router.replace('/dashboard');
    } else {
      setError('');
      console.log(res, 'in else');
      router.push('/dashboard');
    }
  };
  if (sessionStatus === 'loading') {
    return <h1>Loading...</h1>;
  }

  return (
    // sessionStatus !== 'authenticated' &&
    <div className={'justify-center flex mt-16 bg-green-600'}>
      <div className="w-full p-6 m-auto rounded-md  lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-purple-700">
          Login
          <h1></h1>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">
              <span className="text-base label-text">Username</span>
            </label>

            <input
              type="text"
              placeholder="Username"
              required
              className="bg-green-300 rounded-md outline-none p-2 text-white w-full input input-bordered input-primary"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              required
              className="w-full p-2 rounded-md outline-none bg-green-300 text-white input input-bordered input-primary"
            />
          </div>

          <a
            href="#"
            className="text-xs text-gray-600 hover:underline hover:text-blue-600"
          >
            Forget Password?
          </a>

          <div>
            <button
              type="submit"
              className="p-2 w-full bg-cyan-300 transition-all duration-700 hover:bg-primary btn btn-primary hover:rounded-md text-gray-700 hover:text-gray-100"
            >
              Sign In
            </button>

            <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
          </div>
        </form>
        <Link
          className="block text-center text-blue-500 hover:underline mt-2"
          href="/register"
        >
          Register Here
        </Link>
      </div>
    </div>
  );
};
export default Enter;
