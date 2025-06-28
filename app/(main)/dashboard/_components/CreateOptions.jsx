import { Phone, VideoIcon } from 'lucide-react'
import React from 'react'

function CreateOptions() {
  return (
    <div className='grid grid-cols-2 gap-5'>
        <div className='bg-white border border-gray-200  rounded-lg p-5'>
            <VideoIcon className='p=3 text-primary bg-blue-50 rounded-lg h-12 w-12'/>
            <h2 className=' font-bold'>Create New Interview</h2>
            <p className='text-gray-500'>Create AI Interviews and schedule them with Candidates</p>
        </div>
        <div className='bg-white border border-gray-200  rounded-lg p-5'>
            <Phone className='p=3 text-primary bg-blue-50 rounded-lg h-12 w-12'/>
            <h2 className=' font-bold'>Create Phone Screening Call</h2>
            <p className='text-gray-500'>Schedule phone screening call with Candidates</p>
        </div>
    </div>
  )
}

export default CreateOptions