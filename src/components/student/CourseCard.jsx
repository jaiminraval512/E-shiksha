import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';


const CourseCard = ({course}) => {

const {currency} = useContext(AppContext);

  return (
    <Link to={'/course/' + course._id} onClick={()=>scrollTo(0,0)} 
    className='border border-gray-500/30 pb-6 overflow-hidden rounded-lg'>
        <img src={course.courseThumbnail} alt="" className='w-full' />
        <div className='p-3 text-left'>
          <h3 className='text-base font-semibold'>{course.courseTitle}</h3>
          {/* No need for educator name and etc. <p>{course.educator.name}</p>
          <div>
            <p>4.5 </p>
              <div>
                {[...Array(5)].map((_, i) => (<img key={i} src={assets.star} alt='' />
               ))}
              </div>
           <p>22</p>
          </div> */}
          <p className='text-base font-semibold text-gray-800'>{currency}{(course.coursePrice - course.discount * course.coursePrice /100).toFixed(2)}</p>
        </div>
    </Link>
  )
}

export default CourseCard