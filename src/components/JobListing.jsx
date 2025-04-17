import { useState } from "react"
import { FaMapMarker } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function JobListing( { job }) {

    //using useState 
    const [showfullDescription, setshowfullDescription] = useState(false) //set to false (not shown by default)

    //getting the description from the job object
    let description = job.description;

    //show full description when button is clicked
    if(!showfullDescription) {
        description = description.substring(0, 115) + "..."
    }

  return (
   
    <div className="bg-white rounded-xl shadow-md relative" key={job.id}>
    <div className="p-4">
    <div className="mb-6">
        <div className="text-gray-600 my-2">{job.type}</div>
        <h3 className="text-xl font-bold">{job.title}</h3>
    </div>

    <div className="mb-5">{description}
        <button 
        onClick={() => setshowfullDescription((prevState)=> {
            return!prevState;
        })}
        className="text-indigo-500 mb-5 hover:text-indigo-600">{showfullDescription ? 'Less' : 'More'}</button>
    </div>
    

    <h3 className="text-indigo-500 mb-2">{job.salary} / year</h3>

    <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3 flex items-center gap-1">
                < FaMapMarker className="inline text-lg mb-1 mr-1"  />
            <i className="fa-solid fa-location-dot text-lg"></i>{job.location}</div>
            <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
            Read More
            </Link>
        </div>
    </div>
</div>
  )
}

export default JobListing