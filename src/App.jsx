import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from '../src/pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage, { jobLoader } from './pages/JobPage'
import AddJob from './pages/AddJob'





  
 const App = () => {

  const addJob = async (newJob) => {

  //adding the job using post request

  const res = await fetch('http://localhost:5000/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/Json',
    },
    body: JSON.stringify(newJob), //passing the job data
  });

//deleting job using "id"

const deleteJob = async ( id ) => {
  console.log(deleteJob, id)
}


  return;
}
  const router = createBrowserRouter(
    createRoutesFromElements( 
  
      //making the main layout to be a parent wrapper to all other routes i.e
      //all other routes will inherit the navbar
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-job' element={<AddJob addJobSubmit={addJob}/>} />
      <Route path='*' element={<NotFoundPage />} />
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader} /> {/* Rendering each job using id */}
    </Route>
    
   )
  )
  return <RouterProvider router={router}/>
}

export default App 