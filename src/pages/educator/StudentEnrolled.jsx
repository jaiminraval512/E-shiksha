import React, { useEffect, useState } from 'react'
import { dummyStudentEnrolled } from '../../assets/assets'
import Loading from '../../components/student/Loading'

const StudentEnrolled = () => {
  const [enrolledStudents, setEnrolledStudents] = useState(null)

  const fetchEnrolledStudents = async () => {
    setEnrolledStudents(dummyStudentEnrolled)
  }

  useEffect(() => {
    fetchEnrolledStudents()
  }, [])

  // 👇 Format Date as DD-MM-YY, hh:mm:ss
  const formatDateTime = (dateString) => {
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = String(date.getFullYear()).slice(-2)
    const time = date.toLocaleTimeString()
    return `${day}-${month}-${year}, ${time}`
  }

  return enrolledStudents ? (
    <div className='min-h-screen flex flex-col md:pt-8 p-4'>
      <div className='max-w-5xl w-full mx-auto bg-white border border-gray-300 rounded-md'>
        
        {/* ✅ Desktop Table */}
        <div className='hidden md:block'>
          <table className='w-full'>
            <thead className='bg-gray-100 border-b border-gray-300 text-sm'>
              <tr>
                <th className='px-4 py-3 text-left'>#</th>
                <th className='px-4 py-3 text-left'>Student Name</th>
                <th className='px-4 py-3 text-left'>Course Title</th>
                <th className='px-4 py-3 text-left'>Date</th>
              </tr>
            </thead>
            <tbody>
              {enrolledStudents.map((item, index) => (
                <tr key={index} className='border-b border-gray-200'>
                  <td className='px-4 py-3'>{index + 1}</td>
                  <td className='px-4 py-3 flex items-center gap-3'>
                    <img src={item.student.imageUrl} className='w-9 h-9 rounded-full' alt='' />
                    <span>{item.student.name}</span>
                  </td>
                  <td className='px-4 py-3'>{item.courseTitle}</td>
                  <td className='px-4 py-3'>{formatDateTime(item.purchaseDate)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ✅ Mobile Cards */}
        <div className='md:hidden divide-y'>
          {enrolledStudents.map((item, index) => (
            <div key={index} className='p-4'>
              <div className='flex items-center gap-3 mb-2'>
                <img src={item.student.imageUrl} className='w-10 h-10 rounded-full' alt='' />
                <div>
                  <p className='font-semibold'>{item.student.name}</p>
                  <p className='text-xs text-gray-500'>#{index + 1}</p>
                </div>
              </div>
              <div className='text-sm text-gray-700'>
                <p><span className='font-semibold'>Course:</span> {item.courseTitle}</p>
                <p><span className='font-semibold'>Date:</span> {formatDateTime(item.purchaseDate)}</p>
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

export default StudentEnrolled
