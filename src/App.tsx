import React from 'react';
import Todos from './Todos';
import './App.css';

function App() {
  return (
    <div className="App overflow-auto">
      <div 
        className='md:w-full bg-gray-300 rounded text-center m-auto pt-4 pb-4 px-2 font-semibold fixed top-0 right-0 left-0'>
          Demo of AXIOS as the API Client Library
        </div>
      <Todos />
      <div 
        className='md:w-full bg-gray-300 rounded text-center m-auto pt-4 pb-4 px-2 font-semibold fixed bottom-0 right-0 left-0'>
          Symphony IQ UI Project
        </div>
    </div>
  );
}

export default App;
