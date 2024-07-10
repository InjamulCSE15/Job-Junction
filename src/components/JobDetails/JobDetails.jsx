import React from 'react'
import toast from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router-dom'
import { storeAppliedJobId } from '../LocalStore/localStore';

export const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const job = jobs.find(job => job.id == id)
    const { job_title, company, logo, jobType, salary, position, remote, location, job_description, job_responsibility, skills, qualifications, contact_information } = job;

    const applyJobBtn = () => {
        storeAppliedJobId(id);
        toast.success('Job applied successfully!');
    }

    return (
        <section className="">
            <div className="mx-auto max-w-screen-xl px-4 py-8 md:py-12 lg:flex  lg:items-center">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Join Our Team at
                        <strong className="font-extrabold text-red-700 sm:block"> Job Junction </strong>
                    </h1>
                    <p className="mt-4 sm:text-xl/relaxed">
                        <span className='block'>Explore Exciting Opportunities as a <strong>{job_title}</strong>
                            Discover the details about this role and see how you can make an impact with us.
                        </span>
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
                                        <li key={i} className="flex items-start lg:col-span-1 text-sm">
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
                        </div>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto h-full w-full mt-10 md:mt-0">
                        <h1 className='text-xl font-semibold text-gray-700'>Workplace and Experience</h1>
                        <ul className="list-disc flex flex-wrap gap-2 justify-between px-6 py-4 text-gray-700">
                            <li>{remote ? 'Remote' : 'On-site'}</li>
                            <li>{jobType}</li>
                            <li>{position}</li>
                        </ul>
                        <h1 className='text-xl font-semibold text-gray-700'>Desired Skills</h1>
                        <div className="flex flex-wrap gap-2 my-4">
                            {skills.map((skill, i) => (<div key={i} className="badge badge-white font-medium text-xs">{skill}</div>))}
                        </div>
                        <h1 className='text-xl font-semibold text-gray-700'>Qualification</h1>
                        <ul className="my-4 space-y-3 list-disc px-6 text-gray-700">
                            <li>{qualifications}</li>
                        </ul>
                        <h1 className='text-xl font-semibold text-gray-700'>Qualification</h1>
                        <ul className="my-4 space-y-3 list-disc px-6 text-gray-700">
                            <li>{qualifications}</li>
                        </ul>
                        <h1 className='text-xl font-semibold text-gray-700'>Salary</h1>
                        <ul className="my-4 space-y-3 px-2 text-gray-700">
                            <li>{salary}</li>
                        </ul>
                        <h1 className='text-xl font-semibold text-gray-700'>Contact Information</h1>
                        <ul className="my-4 space-y-3 list-disc px-6 text-gray-700">
                            <li>Phone: {contact_information.phone}</li>
                            <li>Email: {contact_information.email}</li>
                            <li>Address: {contact_information.address}</li>
                        </ul>
                        <button onClick={applyJobBtn} className="relative rounded-lg flex h-[50px] w-full items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:bg-cyan-600 before:duration-500 before:ease-out hover:shadow-cyan-600 hover:before:h-56 hover:before:w-full">
                            <span className="relative z-10">Apply Now</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
