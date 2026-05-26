import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'

const MyCourses = () => {
  const { currency, allCourses, formatDate } = useContext(AppContext)
  const [courses, setCourses] = useState(null)

  const fetchEducatorCourses = async () => {
    setCourses(allCourses)
  }

  useEffect(() => {
    fetchEducatorCourses()
  }, [])

  return courses ? (
    <div className='min-h-screen flex flex-col items-start justify-between md:p-8 p-4 pt-8'>
      <div className='w-full'>
        <h2 className='pb-4 text-lg font-semibold'>My Courses</h2>

        {/* Desktop Table */}
        <div className='hidden md:flex flex-col items-center max-w-5xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20'>
          <table className='w-full'>
            <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left'>
              <tr>
                <th className='px-4 py-3 font-semibold'>All Courses</th>
                <th className='px-4 py-3 font-semibold'>Earnings</th>
                <th className='px-4 py-3 font-semibold'>Students</th>
                <th className='px-4 py-3 font-semibold'>Published On</th>
              </tr>
            </thead>
            <tbody className='text-sm text-gray-700'>
              {courses.map((course) => (
                <tr key={course._id} className='border-b border-gray-500/20'>
                  <td className='px-4 py-3 flex items-center space-x-3'>
                    <img src={course.courseThumbnail} alt='course' className='w-19 h-10 object-cover rounded' />
                    <span>{course.courseTitle}</span>
                  </td>
                  <td className='px-4 py-3'>
                    {currency}
                    {Math.floor(
                      course.enrolledStudents.length *
                        (course.coursePrice - (course.discount * course.coursePrice) / 100)
                    )}
                  </td>
                  <td className='px-4 py-3'>{course.enrolledStudents.length}</td>
                  <td className='px-4 py-3'>{formatDate(course.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View Cards */}
        <div className='flex md:hidden flex-col gap-4'>
          {courses.map((course) => (
            <div key={course._id} className='p-4 border border-gray-300 rounded bg-white shadow-sm'>
              <div className='flex items-center gap-3 mb-3'>
                <img src={course.courseThumbnail} alt='course' className='w-30 h-19 object-cover rounded' />
                <div>
                  <h3 className='font-medium text-[17px]'>{course.courseTitle}</h3>
                  <p className='text-sm text-gray-500'>{formatDate(course.createdAt)}</p>
                </div>
              </div>
              <div className='text-sm text-gray-700'>
                <p>
                  <span className='font-medium'>Earnings:</span> {currency}
                  {Math.floor(
                    course.enrolledStudents.length *
                      (course.coursePrice - (course.discount * course.coursePrice) / 100)
                  )}
                </p>
                <p>
                  <span className='font-medium'>Students:</span> {course.enrolledStudents.length}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  )
}

export default MyCourses
