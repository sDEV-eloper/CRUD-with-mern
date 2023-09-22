import React from 'react'

const UpdateUser = () => {
  return (
    <div className='flex h-screen bg-blue-500 justify-center items-center'>
    <div className='bg-white rounded p-3 w-4/6'>
        <form className='border'>
            <h2 className='bg-gray-600 p-2 rounded text-white text-center'>UpdateUser</h2>
            <div className='flex gap-2 justify-center items-center my-2 p-2 '>
                <label htmlFor="" className=''>Name</label>
                <input type="text" placeholder='Enter Name'  className='border rounded px-2 py-1 w-full'/>
            </div>
            <div className='flex gap-2 justify-center items-center my-2 p-2'>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter Email'  className='border rounded px-2 py-1 w-full'/>
            </div>
            <div className='flex gap-4 justify-center items-center my-2 p-2'>
                <label htmlFor="">Age</label>
                <input type="text" placeholder='Enter Age'  className='border rounded px-2 py-1 w-full'/>
            </div>
            <button className='p-2 rounded bg-green-600 text-white w-full'>UPDATE</button>
        </form>
    </div>
    </div>
  )
 
}

export default UpdateUser