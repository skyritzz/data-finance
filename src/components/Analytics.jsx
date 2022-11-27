import React from 'react'
import laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className=' w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={laptop} alt="/"></img>
            <div className='flex flex-col justify-center '>
                <p className='text-[#00df9a]'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:tex-3xl tex-2xl font-bold py-2'>MANAGE DATA Analytics Centrally</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error odit repellat iure, ullam animi id quo itaque nostrum vitae enim laboriosam recusandae earum veniam excepturi libero placeat nulla blanditiis eveniet?
                </p>
                <button className='text-[#00df90] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black' >GET STARTED</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics