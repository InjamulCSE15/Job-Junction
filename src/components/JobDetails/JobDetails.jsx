import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const job = jobs.find(job=>job.id == id)
    console.log(job);
    return (
        <section className="">
            <div className="mx-auto max-w-screen-xl px-4 py-8 md:py-24 lg:flex  lg:items-center">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Join Our Team at
                        <strong className="font-extrabold text-red-700 sm:block"> Job Junction </strong>
                    </h1>
                    <p className="mt-4 sm:text-xl/relaxed">
                        <span className='block'>Explore Exciting Opportunities as a (Job Title)</span>
                        Discover the details about this role and see how you can make an impact with us.
                    </p>
                </div>
            </div>
        </section>
    )
}
