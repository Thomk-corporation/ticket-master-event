function EventItem({name,image , info}) {
    return (
        <div>
            <img src={image} alt={name} width={150} height={150}/>
            <p>{name}</p>
            <p>{info}</p>
        </div>
    )
}

export default EventItem;