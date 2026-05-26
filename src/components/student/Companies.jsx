import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'


const Companies = () => {
  return (

  <div className="pt-10 px-4 ">
  <p className="font-bold text-blue-700 text-center mb-10">Explore things</p>

  <div className="grid grid-cols-2 gap-4 md:flex md:justify-center md:gap-6">
    {/* Item 1 */}
    <Link to={'/course-list'}>
    <div className="flex flex-col items-center p-4 bg-cyan-100/50 rounded-lg flex-shrink-0 w-full md:w-auto cursor-pointer" onClick={()=>scrollTo(0,0)}>
      <img
        src={assets.sm_course}
        alt="smart-courses"
        className="w-32 md:w-32"
      />
      <span className="text-black font-semibold mt-2 text-center text-sm md:text-base">
        Smart Course
      </span>
    </div>
    </Link>

    {/* Item 2 */}
    <div className="flex flex-col items-center p-4 bg-cyan-100/50 rounded-lg flex-shrink-0 w-full md:w-auto cursor-pointer">
      <img
        src={assets.free_matrial}
        alt="free-material"
        className="w-32 md:w-32"
      />
      <span className="text-black font-semibold mt-2 text-center text-sm md:text-base">
       Free Materials
      </span>
    </div>

    {/* Item 3 */}
    <Link to={'/tests'}>
    <div onClick={()=>scrollTo(0,0)} className="flex flex-col items-center p-4 bg-cyan-100/50 rounded-lg flex-shrink-0 w-full md:w-auto cursor-pointer">
      <img
        src={assets.free_test}
        alt="free-test"
        className="w-32 md:w-32"
      />
      <span className="text-black font-semibold mt-2 text-center text-sm md:text-base">
        Free Tests
      </span>
    </div>
    </Link>

    {/* Item 4 */}
    <div className="flex flex-col items-center p-4 bg-cyan-100/50 rounded-lg flex-shrink-0 w-full md:w-auto cursor-pointer">
      <img
        src={assets.free_video}
        alt="free-video"
        className="w-32 md:w-32"
      />
      <span className="text-black font-semibold mt-2 text-center text-sm md:text-base">
        Free Videos
      </span>
    </div>
  </div>
</div>





  )
}

export default Companies