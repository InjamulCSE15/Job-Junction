import { useEffect, useState } from "react";
import axios from 'axios';
import { FeaturedJobCard } from "../FeaturedJobCard/FeaturedJobCard";

export const Jobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [availableJobs, setAvailableJobs] = useState([]);
    const filteringJob = (filter) => {
        switch (filter) {
          case 'remote':
            const remoteJobs = featuredJobs.filter(job => job.remote == true);
            setAvailableJobs(remoteJobs);
            break;
          case 'onsite':
            const onsiteJobs = featuredJobs.filter(job => job.remote == false);
            setAvailableJobs(onsiteJobs);
            break;
        
          default:
            setAvailableJobs(featuredJobs);
            break;
        }
      }
    useEffect(() => {
        axios.get('featuredJobs.json')
            .then((res) => {
                setFeaturedJobs(res.data);
                setAvailableJobs(res.data);
            })
            .catch((error) => console.error(error))
    }, [])
  return (
    <div className="py-8">
    <div className="mx-auto max-w-screen-xl px-4 py-8 md:py-12 lg:flex  lg:items-center">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                    Your Next Great 
                        <strong className="font-extrabold text-red-700 sm:block"> Opportunity Awaits... </strong>
                    </h1>
                    <p className="mt-4 sm:text-xl/relaxed">
                        <span className='block'>Discover exciting  <strong>careers</strong> in a supportive and innovative environment.</span>
                    </p>
                </div>
            </div>
            <div className="py-4 flex items-center justify-between">
              <h6 className="text-gray-900 text-base dark:text-gray-50">
                Available: {availableJobs.length}
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
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {
            availableJobs.map(featuredJob => <FeaturedJobCard key={featuredJob.id} featuredJob={featuredJob}></FeaturedJobCard>)
        }
    </div>
</div>
  )
}
