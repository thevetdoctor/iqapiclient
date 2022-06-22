import React, {useState, useEffect} from 'react';
import axios from 'axios';

type TODO = {
    id: number,
}

type GetTodoResponse = {
    data: TODO[];
  };

export default function Todos() {
    const [todoList, setTodoList] = useState<TODO[]>([]);
    const apiUrl = `https://jsonplaceholder.typicode.com/todos/`;

    const getTodos = async() => {
        let res = [];
        try {
            res = await axioset>({
                method: 'GET',
                url: `${apiUrl}`,
                // data,
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        }catch (error){ 
                // console.log(error.response.data.error);
        }
    }

    useEffect(() => {
        getTodos();
    });

  return (
    <div className='text-white text-md p-3'>
        Todos
        <div>{todoList.map(((todo:{id: number}) => (
            <div key={todo.id}>{todo.id}j</div>
        )))}</div>
    </div>
  )
}
