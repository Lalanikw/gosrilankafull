import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function Calendar() {
  // Sample events for certain days
  const [events, setEvents] = useState([]);

  // Function to add a new event
  const addEvent = (newEvent) => {
  // Ensure the date property of the event is formatted the same way as in renderDay
  const formattedDate = newEvent.date.format('YYYY-MM-DD');
  
  // Check if an event already exists for the given date
  const existingEventIndex = events.findIndex((event) => event.date === formattedDate);

  if (existingEventIndex !== -1) {
    // If an event already exists, update it
    const updatedEvents = [...events];
    updatedEvents[existingEventIndex] = newEvent;
    setEvents(updatedEvents);
  } else {
    // If no event exists for the date, add a new event
    setEvents([...events, { ...newEvent, date: formattedDate }]);
  }
};

  // Custom render function to include events
  const renderDay = (date, _value, dayState) => {
    const formattedDate = date.format('YYYY-MM-DD');
    const event = events[formattedDate];

            return (
            <div>
                <Typography variant="body1">{date.date()}</Typography>
                {dayEvents.map((event, index) => (
                  <Typography key={index} variant="caption">
                    {event.title}
                  </Typography>
                ))}
              </div>
            );
          };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker orientation="landscape" renderDay={renderDay} />
      </LocalizationProvider>

      {/* Event Form or Modal */}
      <EventForm onSubmit={addEvent} />
    </div>
  );
}

// Example EventForm component
function EventForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

          const handleSubmit = () => {
            // Validate and format data as needed
            const newEvent = { title, date };
            onSubmit(newEvent);
            // Clear form fields after submission
            setTitle('');
            setDate('');
          };

  return (
    <div>
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Event</button>
    </div>
  );
}