import { createContext, useEffect } from "react";
import { dummyCourses } from "../assets/assets";
import { useState } from "react";
import humanizeDuration from 'humanize-duration'
import { useAuth, useUser } from "@clerk/clerk-react";


export const AppContext = createContext()


export const AppContextProvider = (props) => {

  const currency = import.meta.env.VITE_CURRENCY;


  const { getToken } = useAuth();
  const { user } = useUser();

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);
  const [enrolledCourses, setEnrolledCourse] = useState([]);


  // fetch all courses
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses)

  }
  //Function to calculate chapter time
  const caculateChapterTime = (chapter) => {
    let time = 0;
    chapter.chapterContent.map((lecture) => time += lecture.lectureDuration)
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] })
  }

  // Function to calculate course duration

  const calculateCourseDuration = (course) => {
    let time = 0;

    course.courseContent.map((chapter) => chapter.chapterContent.map(
      (lecture) => time += lecture.lectureDuration
    ))
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] })
  }

  // calculate number of courses

  const calculateNoOfLectures = (course) => {
    let totalLectures = 0;
    course.courseContent.forEach(chapter => {
      if (Array.isArray(chapter.chapterContent)) {
        totalLectures = + chapter.chapterContent.length
      }
    })
    return totalLectures;
  }

  // Fetch user Enrolled Courses
  const fetchUserEnrolledCourses = async () => {

    setEnrolledCourse(dummyCourses)
  }

  // convert date and time in DD-MM-YY fromate 
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    const time = date.toLocaleTimeString(); // e.g., 4:30:22 PM
    return `${day}-${month}-${year} , ${time}`;
  };
  // formate only date : 
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}-${month}-${year}`;
  };


  useEffect(() => {
    fetchAllCourses()
    fetchUserEnrolledCourses()
  }, [])


  const logToken = async () => { console.log(await getToken()); }


  useEffect(() => {
    if (user) {
      logToken();
    }


  }, [user])

  const value = {
    currency, allCourses, isEducator, setIsEducator, calculateNoOfLectures, calculateCourseDuration, caculateChapterTime, enrolledCourses, fetchUserEnrolledCourses, formatDateTime, formatDate
  }
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}