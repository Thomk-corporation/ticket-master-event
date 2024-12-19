function EventItem({name,image , info,id, onEventClick}) {

    function handleSeeMoreClick(event){
        event.stopPropagation()
        onEventClick(id)
    }


    return (
        <div onClick={()=> (console.log('Evento div clickeado padre'))}>
            <img src={image} alt={name} width={150} height={150}/>
            <p>{name}</p>
            <p>{info}</p>
            <button onClick={handleSeeMoreClick}>See more</button>
        </div>
    )
}

export default EventItem;