import React from 'react';
import useFetch from '../hooks/useFetch';

const UseFetchCustomHook = () => {
  const { data, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  );
  console.log(data);
  return (
    <>
      {loading && <h3>Loading...</h3>}
      {data && data.map((d, i) => <h3 key={i}>{d.title}</h3>)}
    </>
  );
};

export default UseFetchCustomHook;
