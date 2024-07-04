import React from 'react'
import { Banner } from '../Banner/Banner'
import { JobCategoryList } from '../JobCategoryList/JobCategoryList'

export const Home = () => {
  return (
    <div>
      <Banner/>
      <JobCategoryList/>
    </div>
  )
}
