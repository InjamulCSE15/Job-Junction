import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getStoreAppliedJob } from '../LocalStore/localStore';

export const AppliedJobs = () => {
  const jobs = useLoaderData();

  useEffect(()=>{
    const storageJobIds = getStoreAppliedJob();
    if(jobs.length > 0){
      const jobsIapplied = jobs.filter(job => storageJobIds.includes(job.id))
      console.log(jobsIapplied);
    }
  },[])

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
            <div className="grid items-center grid-cols-12 mb-4">
              <div className="col-span-12 lg:col-span-8">
                <div className="mb-3 mb-lg-0">
                  <h6 className="text-gray-900 text-16 dark:text-gray-50">
                    {' '}Showing 1 – 8 of 11 results{' '}
                  </h6>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="grid grid-cols-1 gap-y-5">
                <div className="p-5 border border-gray-200 rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out hover:border-indigo-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900">
                  <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-1">
                      <a href="company-details.html">
                        <img
                          alt=""
                          className="img-fluid rounded-3"
                          src="assets/images/featured-job/img-01.png"
                        />
                      </a>
                    </div>
                    <div className="col-span-12 lg:col-span-9">
                      <div className="mt-4 lg:mt-0">
                        <h5 className="mb-1 text-17">
                          <a
                            className="text-gray-900 dark:text-gray-50"
                            href="job-details.html"
                          >
                            Business Associate
                          </a>
                        </h5>
                        <ul className="flex gap-3 mb-0">
                          <li className="">
                            <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                              Jobcy Technology Pvt.Ltd
                            </p>
                          </li>
                          <li className="">
                            <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                              <i className="mdi mdi-map-marker" />
                              {' '}California
                            </p>
                          </li>
                          <li className="">
                            <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                              <i className="uil uil-wallet" />
                              {' '}$250 - $800 / month
                            </p>
                          </li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="px-2 py-0.5 mt-1 font-medium text-red-500 rounded bg-red-500/20 text-13">
                            Part Time
                          </span>
                          <span className="px-2 py-0.5 mt-1 font-medium text-yellow-500 rounded bg-yellow-500/20 text-13">
                            Urgent
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="items-center col-span-12 lg:col-span-2 ">
                      <ul className="flex flex-wrap gap-3 mt-4 lg:mt-0">
                        <li
                          aria-label="Edit"
                          className="w-10 h-10 text-lg leading-10 text-center text-green-500 rounded-full bg-green-500/20"
                          data-bs-original-title="Edit"
                          data-bs-placement="top"
                          data-bs-toggle="tooltip"
                        >
                          <a
                            className="text-center avatar-sm success-bg-subtle d-inline-block rounded-circle fs-18"
                            href="manage-jobs-post.html"
                          >
                            <i className="uil uil-edit" />
                          </a>
                        </li>
                        <li
                          aria-label="Delete"
                          className="w-10 h-10 text-lg leading-10 text-center text-red-500 rounded-full bg-red-500/20"
                          data-bs-original-title="Delete"
                          data-bs-placement="top"
                          data-bs-toggle="tooltip"
                        >
                          <a
                            className="text-center avatar-sm danger-bg-subtle d-inline-block rounded-circle fs-18"
                            data-bs-target="#deleteModal"
                            data-bs-toggle="modal"
                            
                          >
                            <i className="uil uil-trash-alt" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
