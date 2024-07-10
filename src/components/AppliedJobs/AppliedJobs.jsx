import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getStoreAppliedJob, storeAppliedJobId } from '../LocalStore/localStore';
import { AppliedJobCard } from '../AppliedJobCard/AppliedJobCard';

export const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const filteringJob = (filter) => {
    switch (filter) {
      case 'remote':
        const remoteJobs = appliedJobs.filter(job => job.remote == true);
        setFilteredJobs(remoteJobs);
        break;
      case 'onsite':
        const onsiteJobs = appliedJobs.filter(job => job.remote == false);
        setFilteredJobs(onsiteJobs);
        break;
    
      default:
        setFilteredJobs(appliedJobs);
        break;
    }
  }

  useEffect(() => {
    const storageJobIds = getStoreAppliedJob();
    if (jobs.length > 0) {
      const tempJobsArr = [];
      for (const id of storageJobIds) {
        const job = jobs.find(job => job.id == id);
        if (job) {
          tempJobsArr.push(job);
        }
      }
      setAppliedJobs(tempJobsArr);
      setFilteredJobs(tempJobsArr);
    }
  }, [jobs])

  return (
    <div className="main-content">
      <div className="page-content">
        <section className="py-12 bg-slate-100">
          <div className="container mx-auto">
            <div className="grid">
              <div className="col-span-12">
                <div className="text-center">
                  <h3 className="mb-4 text-4xl font-bold">
                    Jobs that I have applied
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <h6 className="text-gray-900 text-base dark:text-gray-50">
                Total applied: {appliedJobs.length}
              </h6>
              <div>
                <details className="dropdown dropdown-end">
                  <summary className="btn m-1">Filter by</summary>
                  <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={()=>filteringJob('all')}><a>All</a></li>
                    <li onClick={()=>filteringJob('remote')}><a>Remote</a></li>
                    <li onClick={()=>filteringJob('onsite')}><a>On-site</a></li>
                  </ul>
                </details>                
              </div>
            </div>            
            <div className="mt-8 container mx-auto px-2">
              <div className="grid grid-cols-1 gap-y-5">
                {
                  filteredJobs.map(appliedJob => <AppliedJobCard key={appliedJob.id} appliedJob={appliedJob}></AppliedJobCard>)
                }
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
