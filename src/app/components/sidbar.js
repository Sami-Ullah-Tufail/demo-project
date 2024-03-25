"use client"
import React, { useEffect, useState } from 'react';


const SideBar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change this value to adjust the scroll threshold
      const scrollThreshold = 700;
      if (window.pageYOffset > scrollThreshold) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className=' w-64 mr-10'>
    <div  className={`   ${isFixed ? 'fixed top-20 left-30' : ''}`}>
      <ul class="w-64  text-sm font-medium text-black bg-white border border-gray-200 rounded-lg dark:bg-white-700 dark:border-gray-600 dark:text-black m-10 sticky">
    <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Profile</li>
    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Settings</li>
    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Messages</li>
    <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Profile</li>
    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Settings</li>
    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Messages</li>
    <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Profile</li>
    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Settings</li>
    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Messages</li>
    <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Profile</li>
    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Settings</li>
    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Messages</li>
    <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Profile</li>
    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Settings</li>
    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Messages</li>
    <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Profile</li>
    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Settings</li>
    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Messages</li>
    
    <li class="w-full px-4 py-2 rounded-b-lg">Download</li>
</ul></div>
</div>
  )
}

export default SideBar