/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Todo from './Todo';
import {Bars} from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
// const placeholder = {id: 1, title: "title", cover: "cover", sex: "f"};

export default function Todos() {
    const [todoList, setTodoList] = useState<GetTodoResponse["data"]>([]);

    const getTodos = async() => {
        try {
            const {data} = await axios.get<GetTodoResponse["data"]>(`${apiUrl}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            // toast.success("API call successful!", {position: "top-center", hideProgressBar: true});
            setTodoList(data?.splice(0, 25));
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
    const deleteById = (id:number) => {
      const removedItem = todoList.splice(id, 1);
      // console.log(`deleting TODO with ID: ${id}`, todoList.length, removedItem);
      setTodoList(todoList);
    }

    useEffect(() => {
      if(todoList.length === 0) {
        getTodos();
      }
    }, []);

  return (
    <div className='text-white text-md p-3 h-full my-9'>
            <ToastContainer />
        <div className='font-bold p-2 mt-7'>Todos</div>
        {/* <FlipMove> */}
        {todoList.length < 1 ? 
            <div className='flex justify-center items-center pt-8 m-auto'>
                <Bars 
                // type='Bars'
                color='#00bfff'
                height={80} 
                width={80} 
            /> 
            </div>:
          <div className='flex m-auto flex-col'>{todoList.map(((todo: TODO, idx:number) => (
              <Todo key={idx} todo={todo} deleteById={deleteById} />)))}
          </div>}
        {/* </FlipMove> */}
    </div>
  )
}
 