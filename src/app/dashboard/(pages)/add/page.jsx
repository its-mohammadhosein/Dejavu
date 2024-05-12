import axios from 'axios';
import { BadgePlus, BadgePlusIcon } from 'lucide-react';

export default function page() {
  const handlefrom = async (e) => {
    'use server';
    const pername = await e.get('pername');
    const Enname = await e.get('enname');
    const price = await e.get('price');
    const desc = await e.get('desc');
    console.log(pername, Enname, price, desc);
    axios
      .post('http://localhost:3000/api/products/create', {
        name: pername,
        Ename: Enname,
        price: price,
        description: desc,
      })
      .then((e) => {
        console.log('sent', e);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form
        className="adding from form flex flex-col gap-2 w-[40%] transition-all duration-700 rounded p-4 bg-green-400/80"
        action={handlefrom}
      >
        <div className="name grid grid-cols-2">
          <label htmlFor="pername">نام محصول : </label>
          <input
            aria-label="example: orang"
            type="text"
            name="pername"
            id="pername"
          />
        </div>
        <div className="name grid grid-cols-2">
          <label htmlFor="enname">اسم انگلیسی محصول : </label>
          <input
            aria-label="example: orang"
            type="text"
            name="enname"
            id="enname"
          />
        </div>
        <div className="name grid grid-cols-2">
          <label htmlFor="price">قیمت به تومان </label>
          <input
            aria-label="example: orang"
            type="text"
            name="price"
            id="price"
          />
        </div>
        <div className="name grid grid-cols-2">
          <label htmlFor="desc">توضیحات </label>
          <input
            aria-label="example: orang"
            type="text"
            name="desc"
            id="desc"
          />
        </div>
        <button
          className="w-full flex gap-2 justify-center hover:bg-green-600 rounded transition-all duration-700 py-3"
          type="submit"
        >
          ثبت
          <BadgePlus />
        </button>
      </form>
    </>
  );
}
