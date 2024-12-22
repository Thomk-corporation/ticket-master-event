import { useState } from "react";
import dataEvents  from "../../data/events.json"
import EventItem from "./component/EventItem";


function Event({searchTerm}){

    function handleEventItemClick(id){
        console.log(`EventItem con id ${id} clicado`)	

    }

    function renderEvents(){
        return events.map((eventItem) =>(
            <EventItem
                key={`event-item-${eventItem.id}`}
                name = {eventItem.name}
                image = {eventItem.images[1].url}
                info = {eventItem.info}
                onEventClick = {handleEventItemClick}
                id = {eventItem.id}
            />     
        ))
    }

    const [data]= useState(dataEvents)
    const {events } = data._embedded
        return (
            <div >   
                Eventos       
                {renderEvents()} 
            </div>
        )

}

export default Event;