import { useState, useEffect} from 'react'

import JobListing from "./JobListing";
import Spinneer from './Spinneer'
function JobsListing({ isHome=false}) {

  const [allJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = useState(true); //set loading to true

useEffect(() =>{

  // fetching data from the json backend
  const fetchJobs = async () => {
    const apiUrl = isHome ? 'http://localhost:5000/jobs?_limit=3' : 'http://localhost:5000/jobs'; //if home page, show 3 jobs else show all jobs
    try{
      const res = await fetch(apiUrl);
      const data = await res.json(); //getting the fetch data in json format
      setAllJobs(data) //setting all jobs to the data gotten 
    }catch(error){
      console.log("Cannot fetch data" + error);
     
    } finally {
      setLoading(false);  //
    }
  }

  fetchJobs() //calling the function afterall
}, []);



  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? 'Recent Jobs' : 'Browse Jobs'}
          </h2>

          
            {loading ? (
              <Spinneer loading={loading}/>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allJobs.map((job)=>(
                
                <JobListing key={job.id} job={job} />
  
            ))}
          </div>
            )}
            
          </div>
        
      </section>
    </>
  );
}

export default JobsListing;
