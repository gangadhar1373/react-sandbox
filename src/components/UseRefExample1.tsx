import React, { useRef } from 'react';

const UseRefExample1 = () => {
  const inputRef = useRef(null);
  const parRef = useRef(null);
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = 'Hello';
    parRef.current.innerText = 'Goodbye';
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          className='form-control mb-2'
          ref={inputRef}
        />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={parRef}>
          Hello
        </p>
      </form>
    </div>
  );
};

export default UseRefExample1;
