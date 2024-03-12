import React from 'react'
import Videocardicon from '../utils/images/cardimg.jpg'
import Netflixicons from '../utils/images/netflixicons.png'

const videocard = () => {
  return (
    <div className='max-w-xs m-4'>
        
        <img className='rounded-t-lg object-cover object-center w-full h-40' src={Videocardicon} alt='videocard' />

       
        <div className=' bg-gray-900 ml-0 rounded-b-lg h-28'>
            <img className='w-52 h-25 ml-12' src={Netflixicons} alt='netflixicons'/>
            <div className='flex pl-4 pt-0'>
                <p className='text-green-500'>97% Match</p>
                <p className='pl-3 text-gray-300'>2h 35m</p>
            </div>
            <div className=''>
            <ul className='flex pl-4 text-gray-300'>
                    <li className='pl-0'>Horror</li>
                    <li className='pl-2'>Adventure</li>
                    <li className='pl-2'>Mystery</li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default videocard