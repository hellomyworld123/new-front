import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default function AppointmentCalendar({ onSelect }) {
  return (
    <div className="bg-noir/50 backdrop-blur-sm p-4 rounded-lg">
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        slotMinTime="09:00:00"
        slotMaxTime="20:00:00"
        slotDuration="00:15:00"
        selectable
        select={e => onSelect(e.startStr)}
        height="auto"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'timeGridWeek,timeGridDay'
        }}
        allDaySlot={false}
        slotLabelFormat={{
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        }}
        locale="fr"
        buttonText={{
          today: "Aujourd'hui",
          week: 'Semaine',
          day: 'Jour'
        }}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        nowIndicator={true}
        selectConstraint={{
          startTime: '09:00',
          endTime: '20:00',
          dows: [1, 2, 3, 4, 5, 6]
        }}
      />
    </div>
  )
} 