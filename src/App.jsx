import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJob from './pages/AddJob';

const App = () => {
  // Function to add a job using POST request
  const addJob = async (newJob) => {
    try {
      const res = await fetch('http://localhost:5000/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Fixed typo (json, not Json)
        },
        body: JSON.stringify(newJob),
      });
      if (!res.ok) throw new Error('Failed to add job');
      return await res.json(); // Return the response if needed
    } catch (error) {
      console.error('Error adding job:', error);
      throw error; // Propagate error for handling in AddJob component
    }
  };

  // Function to delete a job using DELETE request
  const deleteJob = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/jobs/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete job');
      console.log(`Job ${id} deleted successfully`);
      return true; // Indicate success
    } catch (error) {
      console.error('Error deleting job:', error);
      throw error; // Propagate error for handling in JobPage component
    }
  };

  // Define the router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJob addJobSubmit={addJob} />} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;