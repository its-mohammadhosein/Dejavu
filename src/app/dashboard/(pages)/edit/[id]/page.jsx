import axios from 'axios';
import React from 'react';

export default async function page({ params }) {
  const getdata = axios
    .get(`http://localhost:3000/api/products/find/${params.id}`)
    .then((e) => {
      return e.data;
    })
    .catch((err) => {
      console.log('here is an error :', err);
    });
  const newd = await getdata;
  console.log('checking the getdata ', newd);
  const deleteitem = async (event) => {
    'use server';
    // event.preventDefault();
    axios
      .delete('http:localhost:3000/api/products/update', {
        id: params.id,
      })
      .then((ms) => {
        console.log('deleted : ', ms);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const changing = async (formData) => {
    'use server';
    console.log('formdata');
    const newname = formData.get('newname');
    const newenglishname = formData.get('english');
    const newprice = formData.get('price');
    const newdesc = formData.get('description');

    try {
      axios
        .post('http://localhost:3000/api/products/update', {
          id: params.id,
          name: newname,
          Ename: newenglishname,
          price: newprice,
          description: newdesc,
        })
        .then((e) => {
          console.log(e.data);
        });
    } catch (error) {
      console.log('we got an err in updating', error);
    }
  };

  return (
    <>
      <div
        className={`bg-indigo-300 px-2 py-4 w-max min-h-[3rem] rounded-md [&>div]:flex [&>div]:gap-2 [&>div>input]:w-[50%] `}
      >
        <div>
          <h1>the products id in DATABASE : {newd._id}</h1>
        </div>
        <div>name : {(newd.Ename, '', newd.name)}</div>
        <div>
          price : <p>{newd.price}</p>
        </div>
        <div>
          description : <p>{newd.description}</p>
        </div>
      </div>
      <div>
        <form
          action={changing}
          className={`rounded-md mt-3 [&>div]:grid [&>div]:grid-cols-2 [&>div]:gap-2 min-h-[4rem] min-w-[4rem] w-max h-max bg-green-500 px-2 py-4 [&>div>input]:bg-green-500 `}
        >
          <div className="name">
            enter new persian name :
            <input
              className=" placeholder:text-black text-end"
              type="text"
              name="newname"
              placeholder={newd.name}
            />
          </div>
          <div className="Ename">
            enter new english name :
            <input
              name="english"
              className="placeholder:text-black text-end"
              type="text"
              placeholder={newd.Ename}
            />
          </div>
          <div className="price">
            enter new price :
            <input
              name="price"
              className="placeholder:text-black text-end"
              type="text"
              placeholder={newd.price}
            />
          </div>
          <div className="description">
            enter new description :
            <input
              name="description"
              className="placeholder:text-black text-end"
              type="text"
              placeholder={newd.description}
            />
          </div>
          <button
            type="submit"
            className={`bg-green-400 hover:bg-green-800 transition-all duration-[1.6s] w-full mt-3 rounded-md py-2`}
          >
            save new changes
          </button>
        </form>
        <div className="w-[12rem] h-max px-2 py-4">
          <form action={deleteitem}>
            <button
              type="submit"
              className={`bg-red-400 hover:bg-red-800 transition-all duration-[1.6s] w-full mt-3 rounded-md py-2`}
            >
              or delete it{' '}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
