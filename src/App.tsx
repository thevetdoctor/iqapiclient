import React from 'react';
// import { Switch, Route } from "react-router-dom";
import Todos from './Todos';
import './App.css';
// import SchemaComponent from './SchemaComponent';
// import LineComponent from './LineComponent';
// toast.success("Signup successful!", {position: "top-center", hideProgressBar: true});

function App() {
  return (
    // <Switch>
    // <Route path="/" exact component={SchemaComponent}></Route>
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
        {/* <SchemaComponent /> */}
        {/* <LineComponent /> */}
      </div>
    // </Switch>
  );
}

export default App;
