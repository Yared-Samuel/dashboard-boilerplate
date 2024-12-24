
"use client"
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/app/lib/data';
import { useState } from 'react';
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment)

const BigCalendar = () => {
    const [view, setView] = useState(Views.WORK_WEEK);
    const handleOnChangeView = (selectedView) => {
        setView(selectedView);
    }
  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day",]}
      view="work_week"
      style={{ height: "98%" }}
      onView={handleOnChangeView}
      min={new Date(2024,1,0,8,0,0)}
      max={new Date(2024,1,0,17,0,0)}
    />
  )
}

export default BigCalendar;