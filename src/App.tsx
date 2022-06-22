import React from 'react';
import Todos from './Todos';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='md:w-1/2 bg-gray-300 rounded text-center m-auto pt-4 pb-4 px-2 font-semibold'>Demo AXIOS as the API Client Library for the IQ UI Project</div>
      <Todos />
    </div>
  );
}

export default App;
