import { useState } from 'react';

function getLocalStorageValue(key, initialValue) {
  const itemFromStorage = localStorage.getItem(key);
  return JSON.parse(itemFromStorage) || initialValue;
}
function useLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  const setValue = (value: any) => {
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;
    // set to state
    setLocalStorageValue(value);
    //set to local storage
    localStorage?.setItem(key, JSON.stringify(valueToStore));
  };

  return [localStorageValue, setValue];
}

export default useLocalStorage;
