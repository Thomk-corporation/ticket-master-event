import { useState } from 'react'
import dataEvents from '../../data/events.json'
import EventItem from './component/EventItem'

function Event({ searchTerm }) {
  const [data] = useState(dataEvents)
  const { events } = data._embedded

  function handleEventItemClick(id) {
    console.log(`EventItem con id ${id} clicado`)
  }

  function renderEvents() {
    let eventsFiltered = events

    if (searchTerm.length > 0) {
      eventsFiltered = eventsFiltered.filter((item) =>
        item.name.toLocaleLowerCase().includes(searchTerm),
      )
    }

    return eventsFiltered.map((eventItem) => (
      <EventItem
        key={`event-item-${eventItem.id}`}
        name={eventItem.name}
        image={eventItem.images[1].url}
        info={eventItem.info}
        onEventClick={handleEventItemClick}
        id={eventItem.id}
      />
    ))
  }

  return (
    <div>
      Eventos
      {renderEvents()}
    </div>
  )
}

export default Event
