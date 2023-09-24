import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUser = () => {
  const { id } = useParams(); // Use the correct parameter name
  const [name, setName] = useState();
  console.log("name", name)
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getUser/${id}`)
      .then((res) => {
        console.log("onUpdate", res);
        setName(res.data.name);
        setEmail(res.data.email);
        setAge(res.data.age);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const Update = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/updateUser/${id}`, { name, email, age }) // Include id when updating user
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='flex h-screen bg-blue-500 justify-center items-center'>
      <div className='bg-white rounded p-3 w-4/6'>
        <form className='border' onSubmit={Update}>
          <h2 className='bg-gray-600 p-2 rounded text-white text-center'>Update User</h2>
          <div className='flex gap-2 justify-center items-center my-2 p-2 '>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder='Update Name'
              className='border rounded px-2 py-1 w-full'
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className='flex gap-2 justify-center items-center my-2 p-2'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Update email"
              className='border rounded px-2 py-1 w-full'
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className='flex gap-4 justify-center items-center my-2 p-2'>
            <label htmlFor="age">Age</label>
            <input
              type="text"
              id="age"
              placeholder='Update Age'
              className='border rounded px-2 py-1 w-full'
              value={age}
              onChange={handleAgeChange}
            />
          </div>
          <button type='submit' className='p-2 rounded bg-green-600 text-white w-full'>Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
