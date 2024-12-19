import { useState } from "react";
import dataEvents  from "../../data/events.json"
import EventItem from "./component/EventItem";


function Event(){
    const [data]= useState(dataEvents)
    const {events } = data._embedded
        return (
            <div>
          
                {events.map((eventItem) =>(
                    <EventItem
                        key={`event-item-${event.id}`}
                        name = {eventItem.name}
                        image = {eventItem.images[1].url}
                        info = {eventItem.info}
                    />     
                ))} 
            </div>
        )

}

export default Event;