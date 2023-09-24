import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const CreateUser = () => {
    const [name, setName]=useState()
    const [email, setEmail]=useState()
    const [age, setAge]=useState()
    const navigate=useNavigate()

    const Submit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/createUser", {name, email, age})
        .then(res=>{
            console.log(res)
            navigate('/')
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className='flex h-screen bg-blue-500 justify-center items-center'>
    <div className='bg-white rounded p-3 w-4/6'>
        <form className='border' onSubmit={Submit}>
            <h2 className='bg-gray-600 p-2 rounded text-white text-center'>Add User</h2>
            <div className='flex gap-2 justify-center items-center my-2 p-2 '>
                <label htmlFor="" className=''>Name</label>
                <input type="text" placeholder='Enter Name'  className='border rounded px-2 py-1 w-full' onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='flex gap-2 justify-center items-center my-2 p-2'>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter Email'  className='border rounded px-2 py-1 w-full' onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className='flex gap-4 justify-center items-center my-2 p-2'>
                <label htmlFor="">Age</label>
                <input type="text" placeholder='Enter Age'  className='border rounded px-2 py-1 w-full' onChange={(e)=>setAge(e.target.value)} />
            </div>
            <button type='submit' className='p-2 rounded bg-green-600 text-white w-full'>ADD</button>
        </form>
    </div>
    </div>
  )
}

export default CreateUser