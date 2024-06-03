import './summary.css'

export const SummaryHead = (props) => {
  const { photoSrc, hotelname, address, city, rating, roomname, roomtype, roomprice } = props;
  return (<div className="summary">
        <h2>Booking Summary</h2>
        <div className="summary__head">
          <img
            className="summary__photo"
            src={photoSrc}
          />
          <div className="summary__head-property">
            <h3 className="summary__name">{hotelname}</h3>
            <div className="summary__adress">{address}</div>
            <div className="summary__city">{city}</div>
            <div className="summary__rating">{rating}</div>
          </div>
          <div className="summary__head-room">
            <h3 className="summary__name">{roomname}</h3>
            <div className="summary__room-type">
              {roomtype}
            </div>
            <div className="summary__room-price">{roomprice}</div>
          </div>
        </div>
      </div>
      )}