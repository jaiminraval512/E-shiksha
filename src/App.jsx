import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './pages/student/Home'
import CourseDetails from './pages/student/CourseDetails'
import CoursesList from './pages/student/CoursesList'
import MyEnrollment from './pages/student/MyEnrollment'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard' 
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import StudentEnrolled from './pages/educator/StudentEnrolled'
import Navbar from './components/student/Navbar'
import Tests from './pages/student/Tests'
import "quill/dist/quill.snow.css";

const App = () => {

      const isEducator = useMatch('/educator/*');

  return (
    <div className='text-default bg-white min-h-screen'>
      {!isEducator && <Navbar/>}
       
      
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course-list' element={<CoursesList/>} />
        <Route path='/tests' element={<Tests/>} /> 
        <Route path='/course-list/:input' element={<CoursesList/>} />
        <Route path='/course/:id' element={<CourseDetails/>} />
        <Route path='/my-enrollments' element={<MyEnrollment/>} />
        <Route path='/player/:courseId' element={<Player/>} />
        <Route path='/loading/:path' element={<Loading/>} />

      <Route path='/educator' element={<Educator/>}>

        <Route path='/educator' element={<Dashboard/>} />
        <Route path='add-course' element={<AddCourse/>} />
        <Route path='my-courses' element={<MyCourses/>} />
        <Route path='student-enrolled' element={<StudentEnrolled/>} />

      </Route>
        </Routes>
    </div>
  )
}

export default App

