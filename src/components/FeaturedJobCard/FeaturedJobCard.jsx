import { Link } from "react-router-dom";

export const FeaturedJobCard = ({ featuredJob }) => {
    const { id, job_title, company, logo, jobType, salary, position, remote, location, job_short_details } = featuredJob;
    return (
        <div className="m-1">
            <div className="rounded-md w-full bg-gray-100 p-4 shadow-lg transition transform duration-500 hover:scale-105">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <img className="rounded-lg h-100" src={logo} alt={company} />
                    <div className="md:col-span-2">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-sm font-semibold text-gray-500">{company}</h2>
                                <h2 className="text-xl font-semibold text-gray-700">{job_title}</h2>
                            </div>
                            <h3 className="badge badge-success text-white">{remote ? 'Remote' : 'On-site'}</h3>
                        </div>
                        <p className="py-2 text-gray-500 text-sm">{job_short_details}</p>
                        <h4></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
