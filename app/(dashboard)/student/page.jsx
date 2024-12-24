import Announcements from '@/app/components/Announcements'
import BigCalendar from '@/app/components/BigClander'
import EventCalendar from '@/app/components/EventCalendar'
import React from 'react'

const StudentPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col xl:flex-row'>
      {/* LEFT  */}
      <div className="w-full xl:w-2/3">
      <div className="h-full bg-wite p-4 rouded-md">
        <h1 className='text-xl font-semibold'>Schedul (4A)</h1>
        <BigCalendar />
      </div>
      </div>
      {/* RIGHT  */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
      </div>
  )
}

export default StudentPage