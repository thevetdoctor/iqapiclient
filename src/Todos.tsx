/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
// import FlipMove from 'react-flip-move';
import axios from 'axios';
import Todo from './Todo';
import {apiUrl} from './helper';

type TODO = {
    id: number,
    title: string
    cover: string,
    sex: string
}

type GetTodoResponse = {
    data: TODO[];
  };

export default function Todos() {
    const [todoList, setTodoList] = useState<GetTodoResponse["data"]>([]);

    const getTodos = async() => {
        try {
            const {data} = await axios.get<GetTodoResponse["data"]>(`${apiUrl}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            // setTodoList(data);
            setTodoList(data.splice(0, 25));
            console.log(data);
        } catch (error){ 
                if (axios.isAxiosError(error)) {
                    console.log('error message: ', error.message);
                    return error.message;
                  } else {
                    console.log('unexpected error: ', error);
                    return 'An unexpected error occurred';
                  }
        }
    }

    useEffect(() => {
      if(!todoList.length) {
        getTodos();
      }
    }, []);

  return (
    <div className='text-white text-md p-3 h-full my-9'>
        <div className='font-bold p-2 mt-7'>Todos</div>
        {/* <FlipMove> */}
        <div className='flex m-auto flex-col'>{todoList.map(((todo: TODO) => (
            <Todo key={todo.id} todo={todo} />)))}
        </div>
        {/* </FlipMove> */}
    </div>
  )
}
 