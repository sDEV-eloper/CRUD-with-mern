import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
    const [users, setUsers]=useState([
        {
            name:"suraj dev", age:21, email: "sdev123@gmail.com"
        },
        {
            name:"suraj dev", age:21, email: "sdev123@gmail.com"
        },
        {
            name:"suraj dev", age:21, email: "sdev123@gmail.com"
        },
    ])
  return (
    <div className='flex h-screen bg-blue-500 justify-center items-center'>
<div className='bg-white rounded p-3'>
<Link to="/create" className='px-2 rounded bg-green-700 text-white'>Create User +</Link>
<table className='table'>
<thead>
    <tr className='text-left'>
        <th className='w-32'>Name</th>
        <th className='w-48'>Email</th>
        <th className='w-32'>Age</th>
        <th className='w-32'>Action</th>
    </tr>
</thead>
<tbody>
   {
    users.map((user)=>(
        <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.age}</td>
        <td className='flex gap-2'>
            <Link to="/update" className='px-2 rounded bg-blue-600 text-white'>Update</Link>
            <button className='px-2 rounded bg-red-600 text-white'>Delete</button>
        </td>
    </tr>
    ))
   }
</tbody>
</table>
</div>
    </div>
  )
}

export default Users