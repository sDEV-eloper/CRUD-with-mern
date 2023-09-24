import React from 'react'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Users from './components/Users'
import CreateUser from './components/CreateUser'
import PageNotFound from './components/PageNotFound'
import Policy from './components/Policy'
import UpdateUser from './components/UpdateUser'
const App = () => {
const router=createBrowserRouter([
  {path:'/', element:<Users/>},
  {path:'/create', element:<CreateUser/>},
  {path:'/update/:id', element:<UpdateUser/>},
  {path:'/policy', element:<Policy/>},
  {path:'/pageNotFound', element:<PageNotFound/>},

])


  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element={<Users/>} />
    //   <Route path="/create" element={<CreateUser/>} />
    //   <Route path="/update" element={<UpdateUser/>} />
    //   <Route path="/pageNotFound" element={<PageNotFound/>} />
    //   <Route path="/policy" element={<Policy/>} />
    // </Routes>
    // </BrowserRouter>
    <RouterProvider router={router}/>
  )
}

export default App