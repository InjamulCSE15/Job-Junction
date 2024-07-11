
export const JobListCard = ({jobCategory}) => {
  const {title, image, jobAvailable} = jobCategory;
  return (
    <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
        >
          <span className="inline-block rounded">
            <img className="lg:h-[11em] h-100" src={image} alt={title} />
          </span>

          <h3 className="mt-0.5 text-sm font-medium text-gray-700 text-center">{title}</h3>

          <p className="mt-2 flex items-center justify-center line-clamp-3 text-4xl font-bold text-gray-900 text-justify">
            {jobAvailable}+ <span className="text-base font-normal md:pl-2 text-gray-500">Available</span>
          </p>

          <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
            Find out more
            <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
              &rarr;
            </span>
          </a>
        </article>
  )
}
