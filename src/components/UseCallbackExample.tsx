/* eslint-disable array-callback-return */
import React, { useState, useCallback } from 'react';

const UseCallbackExample = () => {
  const [task, setTask] = useState<any>([]);
  const addTask = useCallback(() => {
    setTask((prevState) => [...prevState, '$Some Task$ ']);
  }, [setTask]);
  return (
    <div>
      <Button addTask={addTask} />
      {task.map((item: any, index: number) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

interface ButtonProps {
  addTask: () => void;
}

const Button = React.memo(({ addTask }: ButtonProps) => {
  console.log('Button rendered');
  return (
    <div>
      <button className='btn btn-primary' onClick={addTask}>
        Add Task
      </button>
    </div>
  );
});

export default UseCallbackExample;
