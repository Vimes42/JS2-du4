import './SummaryServices.css';

export const SummaryServices = (props) => {
           const { parkingPrice, breakfastPrice } = props;
           return ( <div className="summary__services">
            <h3>Doplňkové služby</h3>
            <div className="summary__service">Parkování: {parkingPrice} Kč / noc</div>
            <div className="summary__service">Snídaně: {breakfastPrice} Kč / noc</div>
            <div className="summary__service">Wellness: Zdarma</div> 
            <div className="summary__service">
                Wifi: Zdarma na všech pokojích
            </div>
            </div>
           )} // u wellness jsem nedávala proměnnou, kdyby se podmiňovala třeba cenou pokoje apod, tak by tu samozřejmě byla proměnná s nějakou podmínkou