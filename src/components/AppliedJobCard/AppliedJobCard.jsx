import React from 'react'
import { Link } from 'react-router-dom';

export const AppliedJobCard = ({ appliedJob }) => {
    const { id, job_title, company, logo, jobType, salary, position, remote, job_location } = appliedJob;
    return (
        <div className="p-5 border border-gray-200 rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out hover:border-indigo-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900">
            <div className="grid grid-cols-12 items-center">
                <div className="col-span-12 lg:col-span-1">
                    <img alt={company} className="rounded-lg p-2 object-fill" src={logo} />
                </div>
                <div className="col-span-12 lg:col-span-9">
                    <div className="mt-4 lg:mt-0">
                        <h5 className="mb-1 text-base font-semibold text-gray-700 dark:text-gray-50">
                            {job_title}
                        </h5>
                        <ul className="flex gap-3 mb-0">
                            <li className="">
                                <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                                    {company}
                                </p>
                            </li>
                            <li className="">
                                <p className="mb-0 inline-flex text-sm text-gray-500 dark:text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                    </svg>
                                    {job_location}
                                </p>
                            </li>
                            <li className="">
                                <p className="mb-0 inline-flex text-sm font-semibold text-gray-500 dark:text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wallet" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                        <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                                    </svg>
                                    {salary}
                                </p>
                            </li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <span className="px-2 py-0.5 mt-1 font-medium text-indigo-500 rounded bg-indigo-500/20 text-13">
                                {position}
                            </span>
                            <span className="px-2 py-0.5 mt-1 font-medium text-cyan-500 rounded bg-cyan-500/20 text-13">
                                {jobType}
                            </span>
                            <span className="px-2 py-0.5 mt-1 font-medium text-green-500 rounded bg-green-500/20 text-13">
                                {remote ? 'Remote' : 'On-site'}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="lg:text-right col-span-12 lg:col-span-2 ">
                   <Link to={`job/${id}`} className='btn btn-primary text-white '>View Details</Link>
                </div>
            </div>
        </div>
    )
}
