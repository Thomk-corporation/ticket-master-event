import EventItem from "./component/EventItem";
import data  from "../../data/events.json"

console.log("data :,...", data)





const Event = ()=>{

    const events = data._embedded.events

    const eventsItem = events.map(event =>( <EventItem
        key={`event-item-${id}`}>
           name = {event.name}
           image = {event.images[1].url}
           info = {event.info}
        </EventItem>)        )


   


    
    return(
        <div>
         Event
         {eventsItem}
        </div>
    )

}

export default Event;