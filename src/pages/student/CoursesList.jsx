import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SearchBar from '../../components/student/SearchBar'
import CourseCard from '../../components/student/CourseCard'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'
import Footer from '../../components/student/Footer'

const CoursesList = () => {

  const { allCourses } = useContext(AppContext)
  const { input } = useParams()
  const [filterdCourses, setFilterdCourses] = useState([])

  useEffect(() => {

    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice()
      input ?
        setFilterdCourses(
          tempCourses.filter(
            item => item.courseTitle.toLowerCase().includes(input.toLowerCase())
          )
        )
        : setFilterdCourses(tempCourses)
    }

  }, [allCourses, input])

  return (
    <>
      <div className='relative md:px-36 px-8 pt-20 text-left'>
        <div className=' flex md:flex-row flex-col items-start justify-between gap-6 w-full'>
          <div>
            <h1 className='text-4xl font-semibold text-gray-800'>Courses List</h1>
            <p className='text-gray-500'>

              <Link to={'/'} ><span className='text-blue-600  cursor-pointer'>Home </span></Link>

              /<span>Course List</span></p>
          </div>
          <SearchBar data={input} />
        </div>
        {
          input && <div className='inline-flex items-center gap-4 px-4 py-2 border mt-8 -mb-8 text-gray-600 rounded-full'>
            <p> {input}</p>
            <Link to={'/course-list'}><img src={assets.cross_icon} alt="cancel" /> </Link>
          </div>
        }
        <div className='grid lg:grid-cols-4  sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-3 my-16 px-2 md:p-0 '>
          {filterdCourses.map((course, index) => <CourseCard key={index} course={course} />)}

        </div>
      </div>

      <Footer/>
    </>
  )
}

export default CoursesList

