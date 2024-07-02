import './SummaryDetail.css'

export const SummaryDetail = (props) => {
    const { ReservationNumber, dates, guests, boarding, totalPrice, checkIn, checkOut } = props
    return (
            <div className="summary__detail">
                <h3>Detail rezervace</h3>
                <div className="summary__number">Ćíslo: {ReservationNumber}</div>
                <div className="summary__dates">Pobyt: {dates}</div>
                <div className="summary__guests">Hosté: {guests}</div>
                <div className="summary__strava">Stravování: {boarding}</div>
                <div className="summary__room-total">{totalPrice} Kč</div>
                <div className="summary__check-in">Check-in: {checkIn}</div>
                <div className="summary__check-out">Check-out: {checkOut}</div>
            </div>
            )}