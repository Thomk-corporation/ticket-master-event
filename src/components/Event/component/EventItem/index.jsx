const EventItem = ({name,image , info}) => {
    return (
        <div>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{info}</p>
        </div>
    )
}

export default EventItem;