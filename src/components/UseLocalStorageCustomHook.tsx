import useLocalStorage from '../hooks/useLocalStorage';

const UseLocalStorageCustomHook = () => {
  const [task, setValue] = useLocalStorage('key', '');
  const [tasks, setTasks] = useLocalStorage('key', []);
  const onSubmit = (e) => {
    e.preventDefault();
    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };
    setTasks([...tasks, taskObj]);
  };
  return (
    <>
      <form className='w-25' onSubmit={onSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Task</label>
          <input
            className='form-control'
            type='text'
            value={task as string}
            onChange={(e) => setValue(e?.target?.value)}
          />
        </div>
        <button className='btn btn-primary' type='submit'>
          Submit
        </button>
      </form>
      <hr />
      {tasks.map((t) => (
        <h3 key={t.date}>{t.task}</h3>
      ))}
    </>
  );
};

export default UseLocalStorageCustomHook;
