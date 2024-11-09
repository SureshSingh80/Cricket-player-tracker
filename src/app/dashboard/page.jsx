'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'

function page() {
    
   
  
  return (
    <div className='absolute h-full w-full flex justify-center items-center'>
        <div>
            <div className=' mb-2 bg-green-500 px-2 py-4 focus:p-5'><Link  href={"/addPlayer"}>Add Player</Link></div>
            <div className=' mb-2 bg-blue-500 px-2 py-4'><Link  href={"/viewPlayer"}>View Player</Link></div>            
        </div>
    </div>
  )
}

export default page