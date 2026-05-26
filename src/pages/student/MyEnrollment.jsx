import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { Line } from 'rc-progress'
import Footer from '../../components/student/Footer'

const MyEnrollment = () => {
  const { enrolledCourses, calculateCourseDuration } = useContext(AppContext)
  const navigate = useNavigate()

  const [progressArray, setProgressArray] = useState([
    { lectureCompleted: 2, totalLectures: 4 },
    { lectureCompleted: 1, totalLectures: 5 },
    { lectureCompleted: 3, totalLectures: 6 },
    { lectureCompleted: 4, totalLectures: 4 },
    { lectureCompleted: 0, totalLectures: 3 },
    { lectureCompleted: 5, totalLectures: 7 },
    { lectureCompleted: 6, totalLectures: 8 },
    { lectureCompleted: 2, totalLectures: 6 },
    { lectureCompleted: 4, totalLectures: 10 },
    { lectureCompleted: 3, totalLectures: 5 },
    { lectureCompleted: 7, totalLectures: 7 },
    { lectureCompleted: 1, totalLectures: 4 },
    { lectureCompleted: 0, totalLectures: 2 },
    { lectureCompleted: 5, totalLectures: 5 }
  ])

  return (
    <>
      <div className='min-h-screen md:px-36 px-4 pt-10'>
        <h1 className='text-2xl font-semibold mb-6'>Your Courses</h1>

        {/* Desktop Table */}
        <div className='hidden md:block'>
          <table className='table-auto w-full border'>
            <thead className='text-gray-900 border-b border-gray-300 text-sm text-left'>
              <tr>
                <th className='px-4 py-3 font-semibold'>Course</th>
                <th className='px-4 py-3 font-semibold'>Duration</th>
                <th className='px-4 py-3 font-semibold'>Completion</th>
                <th className='px-4 py-3 font-semibold'>Status</th>
              </tr>
            </thead>
            <tbody className='text-gray-700'>
              {enrolledCourses.map((course, index) => {
                const progress = progressArray[index] || { lectureCompleted: 0, totalLectures: 1 }
                const percent = (progress.lectureCompleted * 100) / progress.totalLectures

                return (
                  <tr key={index} className='border-b border-gray-200'>
                    <td className='px-4 py-3 flex items-center space-x-3'>
                      <img src={course.courseThumbnail} alt='' className='w-24 h-16 object-cover rounded' />
                      <div className='flex-1'>
                        <p className='mb-1 font-medium'>{course.courseTitle}</p>
                        <Line strokeWidth={2} percent={percent} strokeColor='#3b82f6' trailColor='#e5e7eb' />
                      </div>
                    </td>
                    <td className='px-4 py-3'>{calculateCourseDuration(course)}</td>
                    <td className='px-4 py-3'>{`${progress.lectureCompleted} / ${progress.totalLectures} Lectures`}</td>
                    <td className='px-4 py-3'>
                      <button
                        onClick={() => navigate('/player/' + course._id)}
                        className='bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded text-sm cursor-pointer'
                      >
                        {progress.lectureCompleted === progress.totalLectures ? 'Completed' : 'On Going'}
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className='flex flex-col gap-6 md:hidden'>
          {enrolledCourses.map((course, index) => {
            const progress = progressArray[index] || { lectureCompleted: 0, totalLectures: 1 }
            const percent = (progress.lectureCompleted * 100) / progress.totalLectures

            return (
              <div key={index} className='bg-white border border-gray-300 rounded-lg p-4 shadow-sm'>
                <div className='flex items-center gap-3 mb-3'>
                  <img src={course.courseThumbnail} alt='' className='w-29 h-18 object-cover rounded' />
                  <div>
                    <p className='font-semibold text-[17px]'>{course.courseTitle}</p>
                    <p className='text-sm text-gray-500'>{calculateCourseDuration(course)}</p>
                  </div>
                </div>
                <div className='mb-2'>
                  <Line strokeWidth={1} percent={percent} strokeColor='#3b82f6' trailColor='#e5e7eb' />
                </div>
                <p className='text-sm mb-2'>
                  <span className='font-medium'>Progress:</span> {`${progress.lectureCompleted} / ${progress.totalLectures} Lectures`}
                </p>
                <button
                  onClick={() => navigate('/player/' + course._id)}
                  className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm font-medium cursor-pointer'
                >
                  {progress.lectureCompleted === progress.totalLectures ? 'Completed' : 'On Going'}
                </button>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MyEnrollment
