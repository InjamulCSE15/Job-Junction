import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { JobListCard } from '../JobListCard/JobListCard';

export const JobCategoryList = () => {

  const [jobCategories, setJobCategories] = useState([]);
  useEffect(()=>{
    axios.get('../../../public/jobCategories.json')
    .then((response) => { setJobCategories(response.data); })
    .catch((error) => { console.error('There was an error fetching the data!', error); });
  },[])

  return (
    <div className='py-6'>
      <h1 className='text-center md:text-4xl text-xl font-medium'>Get your suitable job</h1>
      <div className="hero-content py-4">
        <p className='text-gray-500 text-justify'>Join thousands of job seekers and find the perfect match for your skills and ambitions. Search for jobs across all industries and locations, get personalized job recommendations, and take the next step in your career journey.</p>
      </div>        
      <div className="grid grid-cols-4 mt-4">
      {
        jobCategories.map(jobCategory => <JobListCard key={jobCategory.id} jobCategory={jobCategory} ></JobListCard>)
      }

      </div>
    </div>
  )
}
