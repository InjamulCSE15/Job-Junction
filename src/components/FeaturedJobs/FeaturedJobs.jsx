import { useEffect, useState } from "react";
import axios from 'axios';
import { FeaturedJobCard } from "../FeaturedJobCard/FeaturedJobCard";

export const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [showAllJobs, setShowAllJobs] = useState(4);
    useEffect(() => {
        axios.get('featuredJobs.json')
            .then((res) => setFeaturedJobs(res.data))
            .catch((error) => console.error(error))
    }, [])
    return (
        <div className="py-8">
            <h1 className="text-center md:text-4xl text-xl font-medium">Featured Jobs</h1>
            <p className="text-center text-gray-500 py-4">Discover Our Featured Jobs: Explore Top Opportunities in Tech, Development, and Engineering Today!</p>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {
                    featuredJobs.slice(0, showAllJobs).map(featuredJob => <FeaturedJobCard key={featuredJob.id} featuredJob={featuredJob}></FeaturedJobCard>)
                }
            </div>
            <div className={showAllJobs === featuredJobs.length ? 'hidden' : 'text-center mt-4'} >
                <button onClick={()=> setShowAllJobs(featuredJobs.length)}
                className="btn btn-active text-dark capitalize mt-4">Show all jobs</button>
            </div>
        </div>
    )
}
