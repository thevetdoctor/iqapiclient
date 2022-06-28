import React, {useState} from 'react';
import {MdEdit} from 'react-icons/md';
import {AiTwotoneDelete} from 'react-icons/ai';
import {IoClose, IoCloudUpload} from 'react-icons/io5';
import {FaMale, FaFemale} from 'react-icons/fa';
import {Rings} from "react-loader-spinner";
import axios from 'axios';
import {apiUrl} from './helper';
import alive from './5alive.jpg';

type TODO = {
    id: number,
    title: string,
    cover: string,
    sex: string
}
export default function Todo({todo, deleteById}: {todo: TODO, deleteById: (id:number) => void }) {
    const [editStatus, setEditStatus] = useState(false);
    const [loading, setLoading] = useState(false);
    
    type UpdateTodoResponse = {
        data: TODO[];
      };

    const updateTodo = async(id: number) => {
        setLoading(true);
        try {
            const {data} = await axios.patch<UpdateTodoResponse["data"]>(`${apiUrl}/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log(data, "updating", id);
            setLoading(false);
            setEditStatus(false);
        } catch (error){ 
                if (axios.isAxiosError(error)) {
                    console.log('error message: ', error.message);
                    setLoading(false);
                    return error.message;
                  } else {
                    console.log('unexpected error: ', error);
                    setLoading(false);
                    return 'An unexpected error occurred';
                  }
                }
    }

    const deleteTodo = async(id:number) => {
        try {
            const {data} = await axios.delete<UpdateTodoResponse["data"]>(`${apiUrl}/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log(data, "deleting", id);
            deleteById(id);
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

  return (
    <div 
        className='flex justify-between rounded p-3 text-md bg-white text-black mb-5 md:w-1/2 w-80 m-auto hover:bg-gray-100' 
        key={todo.id}>
            {!editStatus ? 
            <>
                {todo.sex === 'M' ? 
                <span className='text-center font-semibold p-2 border border-2 rounded-full bg-gray-200'><FaMale size={25}/></span>
                :
                <span className='text-center font-semibold p-2 border border-2 rounded-full bg-gray-200'><FaFemale size={25}/></span>}
                <span className='text-center font-semibold px-3'><img src={alive} alt="profile" width="1em" height="1em" /></span>
                <span className='text-center font-semibold px-3'>{todo.title}</span>
                <span className='flex'>
                    <span onClick={() => setEditStatus(!editStatus)} className='p-2 mr-0 rounded mx-2 text-blue-600 cursor-pointer'><MdEdit size={25}/></span>
                    <span onClick={() =>  deleteTodo(todo.id)} className='p-2 mr-0 rounded mx-2 text-red-600 cursor-pointer'><AiTwotoneDelete size={25}/></span>
                </span>
            </>
            :
            <>
                <textarea className='flex-grow px-3' defaultValue={todo.title} disabled={loading}></textarea>
                <span className='flex'>
                    <span onClick={() => setEditStatus(!editStatus)} className='p-2 mr-0 rounded mx-2 text-gray-600 cursor-pointer'><IoClose size={25} /></span>
                    <span onClick={() => updateTodo(todo.id)} className='p-2 mr-0 rounded mx-2 text-blue-600 cursor-pointer'>
                    {loading ?
                    <Rings 
                        color='blue'
                        height={25} 
                        width={25} 
                    />:<IoCloudUpload size={25}/>}
                    </span>
                </span>
            </>}
    </div>
  )
}
