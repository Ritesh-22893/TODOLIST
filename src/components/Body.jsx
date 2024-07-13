import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Body = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [allTodos, setAllTodos] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTitle("");
    setDesc("");
    setAllTodos([...allTodos, { title, desc }]);
  };

  const deleteHandler = (i) => {
    let copyAllTodos = [...allTodos];
    copyAllTodos.splice(i, 1);
    setAllTodos(copyAllTodos);
  };

  let renderTask = <h1 className='md:text-[28px] text-3xl tracking-wide text-indigo-400 font-bold'>Added todos will appear here.</h1>;

  if (allTodos.length > 0) {
    renderTask = allTodos.map((t, i) => {
      return (
        <div className='flex flex-col md:flex-row min-h-fit mt-6 mb-4 w-full gap-3' key={i}>
          <div className='min-h-16 h-full gap-10 w-full bg-indigo-900 bg-opacity-70 rounded-xl p-3 md:p-4'>
            <h1 className='text-indigo-400 w-full text-2xl uppercase font-extrabold'>{t.title}</h1>
            <h1 className='mt-2 text-gray-200 w-full text-xl tracking-wide font-normal'>{t.desc}</h1>
          </div>
          <div className='w-full md:w-28 flex items-center justify-center'>
            <button
              onClick={() => deleteHandler(i)}
              className='hover:bg-red-900 flex items-center justify-center text-xl tracking-wider h-full w-full md:w-28 lg:mx-2 text-center font-bold bg-red-800 bg-opacity-90 text-gray-300 py-4 rounded-xl'
            >
              <FontAwesomeIcon className='text-3xl' icon={faTrash} />
            </button>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <div className='flex-grow flex flex-col'>
        <form
          className='lg:mx-12 lg:my-11 mx-5 my-10 flex flex-col lg:flex-row gap-10 md:gap-14'
          onSubmit={submitHandler}
        >
          <input
            id='title'
            className='placeholder:text-gray-400 font-medium lg:w-3/5 text-gray-400 text-[25px] bg-transparent border-b-2 border-b-gray-400 outline-none'
            type='text' placeholder='Enter title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <input
            id='desc'
            className='placeholder:text-gray-400 lg:w-3/5 font-medium text-gray-400 text-[25px] bg-transparent border-b-2 border-b-gray-400 outline-none'
            type='text' placeholder='Enter description'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></input>
          <button
            className='hover:bg-indigo-800 hover:bg-opacity-90 text-[28px] tracking-wide font-bold h-16 lg:w-1/3 text-gray-200 bg-indigo-800 rounded-2xl'
          >Add Todo</button>
        </form>

        <div className='lg:mx-12 lg:my-4 mx-6 rounded-xl'>
          <ul>
            {renderTask}
          </ul>
        </div>
      </div>

    </>
  );
}

export default Body;


