import { Link } from "react-router-dom";
export const FeaturedJobCard = ({ featuredJob }) => {
    const { id, job_title, company, logo, jobType, salary, position, remote, location, job_short_details } = featuredJob;
    return (
        <div className="m-1">
            <div className="rounded-md w-full bg-gray-100 p-4 shadow-lg transition transform duration-500 hover:scale-105">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <img className="rounded-lg h-100" src={logo} alt={company} />
                    <div className="md:col-span-2">
                        <div className="flex justify-between items-end">
                            <div>
                                <h2 className="text-sm font-semibold text-gray-500">{company}</h2>
                                <h2 className="text-xl font-semibold text-gray-700">{job_title}</h2>
                            </div>
                            <div>
                                <h3 className="badge badge-success text-white text-sm">{remote ? 'Remote' : 'On-site'}</h3>
                                <h3 className="font-bold text-gray-500">{jobType}</h3>
                            </div>
                        </div>
                        <p className="py-2 text-gray-500 text-sm">{job_short_details}</p>
                        <div className="flex items-end justify-between">
                            <div>
                                <h4 className="text-sm">Position: <span className="font-medium">{position}</span></h4>
                                <h4 className="text-sm">Salary: <span className="font-medium">{salary}</span></h4>
                            </div>
                            <div className="text-end">
                                <h4 className="flex items-center justify-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                    </svg>
                                    <span className=" text-gray-600 text-sm"> {location}</span></h4>
                                <Link to={`job/${id}`} className="btn-link no-underline text-sm bg-gray-800 px-2 py-1 text-white rounded-md hover:border hover:border-gray-800 hover:bg-white hover:text-gray-800 hover:no-underline hover:font-medium">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
