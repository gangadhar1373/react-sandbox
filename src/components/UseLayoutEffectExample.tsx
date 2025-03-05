import React, { useState, useLayoutEffect, useRef } from 'react';

// The useLayoutEffect hook is similar to useEffect, but it’s executed synchronously after all DOM mutations.
// This makes it useful for manipulating the DOM immediately after a component is rendered.
const UseLayoutEffectExample = () => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const boxRef = useRef(null);
  useLayoutEffect(() => {
    console.log(boxRef.current.getBoundingClientRect());
    const handleResize = () => {
      setWidth(boxRef.current.clientWidth);
      setHeight(boxRef.current.clientHeight);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div
      ref={boxRef}
      style={{
        width: '50%',
        height: '50%',
        color: 'red',
        border: '1px solid red',
        textAlign: 'center',
      }}
    >
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
};

export default UseLayoutEffectExample;
