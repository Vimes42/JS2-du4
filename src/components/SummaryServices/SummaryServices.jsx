import './SummaryServices.css';

export const SummaryServices = (props) => {
           const { parkingPrice, breakfastPrice, wellnessPrice, wifi } = props;
           return ( <div className="summary__services">
            <h3>Doplňkové služby</h3>
            <div className="summary__service">Parkování: {parkingPrice} Kč / noc</div>
            <div className="summary__service">Snídaně: {breakfastPrice} Kč / noc</div>
            <div className="summary__service">Wellness: {wellnessPrice}</div> 
            <div className="summary__service">Wifi: {wifi} </div>
            </div>
           )} 