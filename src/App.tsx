import React from 'react';
import UseFetchCustomHook from './components/UseFetchCustomHook';
import UseLocalStorageCustomHook from './components/UseLocalStorageCustomHook';
import UseLayoutEffectExample from './components/UseLayoutEffectExample';
// import UseCallbackExample from './components/UseCallbackExample';
// import UseRefExample1 from './components/UseRefExample1';
// import UseRefExample2 from './components/UseRefExample2';
// import UseRefExample3 from './components/UseRefExample3';
// import UseMemoExample from './components/UseMemoExample';

function App() {
  return (
    <div className='container mt-5'>
      {/* <UseRefExample1 /> */}
      {/* <UseRefExample2 /> */}
      {/* <UseRefExample3 /> */}
      {/* <UseMemoExample /> */}
      {/* <UseCallbackExample /> */}
      {/* <UseFetchCustomHook /> */}
      {/* <UseLocalStorageCustomHook /> */}
      <UseLayoutEffectExample />
    </div>
  );
}

export default App;
