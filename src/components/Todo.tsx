import React, { useState, useRef, useEffect } from 'react';

const Todo = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [todo, setTodo] = useState<any>({});
  const isMounted = useRef(true);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            setTodo(data);
            setLoading(false);
          }
        }, 1000);
      });
    // This runs when component is unmounted
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);
  return loading ? <h3>Loading...</h3> : <div>{todo?.title}</div>;
};

export default Todo;
