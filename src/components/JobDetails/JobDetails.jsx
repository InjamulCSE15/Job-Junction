import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const job = jobs.find(job => job.id == id)
    const { job_title, company, logo, jobType, salary, position, remote, location, job_description, job_responsibility, contact_information } = job;
    return (
        <section className="">
            <div className="mx-auto max-w-screen-xl px-4 py-8 md:py-12 lg:flex  lg:items-center">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Join Our Team at
                        <strong className="font-extrabold text-red-700 sm:block"> Job Junction </strong>
                    </h1>
                    <p className="mt-4 sm:text-xl/relaxed">
                        <span className='block'>Explore Exciting Opportunities as a <strong>{job_title}</strong></span>
                        Discover the details about this role and see how you can make an impact with us.
                    </p>
                </div>
            </div>
            <div className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex flex-wrap">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <div className="flex justify-between">
                            <div>
                                <h1 className='title-font font-medium text-3xl text-gray-900'>{job_title}</h1>
                                <h3 className='text-xl '>{company}</h3>
                                <h4 className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                    </svg>
                                    <span className=" text-gray-700 text-sm"> {location}</span></h4>
                            </div>
                            <div>
                                <img src={logo} className='h-32 w-auto' alt={company} />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold text-gray-700'>About the job</h1>
                            <div className='my-4'>
                                <ul className="space-y-3">
                                    {
                                        job_description.map((details, i) =>
                                            <li key={i} className="flex items-start lg:col-span-1 text-sm">
                                                <div className="flex-shrink-0">
                                                    <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clipRule="evenodd"></path>
                                                    </svg>
                                                </div>
                                                <p className="ml-3 leading-5 text-gray-600">
                                                    {details}
                                                </p>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                            <h1 className='text-xl font-semibold text-gray-700'>Job Responsibility</h1>
                            <ul className="my-4 space-y-3">
                                {
                                    job_responsibility.map((responsibility, i) =>
                                        <li key={i} className="flex items-start lg:col-span-1">
                                            <div className="flex-shrink-0">
                                                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <p className="ml-3 leading-5 text-gray-600">
                                                {responsibility}
                                            </p>
                                        </li>)
                                }
                            </ul>
                            <h1 className='text-xl font-semibold text-gray-700'>Desired Skills</h1>
                            <ul>

                            </ul>
                        </div>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                        <div className="relative mb-4">
                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                            <input
                                type="text"
                                id="full-name"
                                name="full-name"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Button
                        </button>
                        <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
