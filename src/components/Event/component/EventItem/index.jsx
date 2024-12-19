const EventItem = ({name,image , info}) => {
    return (
        <div>
            <img src={image} alt={name} width={150} height={150}/>
            <h2>{name}</h2>
            <p>{info}</p>
        </div>
    )
}

export default EventItem;