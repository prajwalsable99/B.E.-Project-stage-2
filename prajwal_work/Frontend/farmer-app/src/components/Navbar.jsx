import React, { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom';
const Navbar = () => {
  
    

  return (
<nav className="sticky top-0 z-50 bg-white shadow dark:bg-gray-800">
    <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300 ">
        <NavLink to="/" 

className={({ isActive }) => (isActive ? "text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6" : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6")}
       
        
        >home</NavLink>

        <NavLink to="/features" 
        
        className={({ isActive }) => (isActive ? "text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6" : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6")}
        
        >features</NavLink>


        <NavLink to="/visualpage"
       className={({ isActive }) => (isActive ? "text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6" : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6")}
        >visuals</NavLink>

        <NavLink to="/about" 
        
        className={({ isActive }) => (isActive ? "text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6" : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6")}

        >About</NavLink>
     

       
    </div>
</nav>
  )
}

export default Navbar
