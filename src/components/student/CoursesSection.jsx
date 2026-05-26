import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import { AppContext } from '../../context/AppContext';


const CoursesSection = () => {

const {allCourses} = useContext(AppContext);

  return (
    <div className='py-16 md:px-40 px-8'>
        <h1 className='text-3xl font-medium text-gray-800 md:mb-8 mb-6'>Explore our courses </h1>

    <div className='mb-6 grid grid-template px-4 md:px-0 md:my-16 my-10 gap-4'>
     {allCourses.slice(0,4).map((course,index )=> <CourseCard key={index} course={course}/>)}
    </div>

        <Link to={'/course-list'} onClick={()=>scrollTo(0,0)} className='text-gray-400 border border-gray-500/30 px-10 py-3 rounded'>All courses</Link>
    </div>
  )                                                      
}

export default CoursesSection