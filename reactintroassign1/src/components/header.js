import React from 'react'
import logo from '../utils/images/logo.png'
import Bellicon from '../utils/images/bellicon.png'
import Accounticon from '../utils/images/accouticon.png'
import Dropdown from '../utils/images/dropdown.jpeg'

const header = () =>{
    const toggleDropdown = () =>{
        const dropdown = document.getElementById('dropdowncontent');
        dropdown.classList.toggle('hidden');
    }
    return(
        <nav className='bg-black'>
            <div className='flex place-items-center'>
                {/*logo & Navigation links*/}
                <div>
                   <img className="w-32" src={logo} alt='Logo' />
                </div>
                <div className='md: block ml-4 text-sm'>
                    <a href="#" className='text-white px-2 py-2 hover:bg-gray-700 rounded'>Home</a>
                    <a href="#" className='text-white px-2 py-2 hover:bg-gray-700 rounded' >TV Shows</a>
                    <a href="#" className='text-white px-2 py-2 hover:bg-gray-700 rounded'>Movies</a>
                    <a href="#" className='text-white px-2 py-2 hover:bg-gray-700 rounded'>New & Popular</a>
                    <a href="#" className='text-white px-2 py-2 hover:bg-gray-700 rounded'>My List</a>
                    <a href="#" className='text-white px-2 py-2 hover:bg-gray-700 rounded'>Browse by Languages</a>
                </div>

                {/* search bar, bell, account*/}
 
                <div className='ml-80'>
                    <input type='text' placeholder='Titles,people,generes' className='rounded bg-gray-700 px-3 py-1 text-white outline-none'/>
                </div>

                <div className='text-white ml-10'>
                    Children
                </div>

                <div>
                    <img className="w-20" src={Bellicon} alt='bellicon'/>
                </div>

                <div>
                    <img className='w-8' src={Accounticon} alt='accountimg'/>
                </div>

                {/*Dropdown*/}

                <div className='ml-0 relative'>
                    <button onClick={toggleDropdown}>
                        <img className='w-3 ml-1' src={Dropdown} alt='dropdownicon'/>
                    </button>
                    <div id="dropdowncontent" className='hidden absolute right-0 mt-2 bg-gray-700 text-white p-2 rounded shadow-lg'>
                        <a href='#' className='block hover:bg-gray-700 py-1'>Settings</a>
                        <a href='#' className='block hover:bg-gray-700 py-1'>Profile</a>
                        <a href='#' className='block hover:bg-gray-700 py-1'>Logout</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default header