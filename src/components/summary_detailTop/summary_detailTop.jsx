import './summary_detailTop.css';
import { SummaryDetail } from '../summary_detail/summary_detail';
import { SummaryServices } from '../summary_services/summary__services';
import { SummaryCancel } from '../summary__cancel/summary__cancel';

export const SummaryDetails = () => {
    return (
    <div className="summary__detailTop">
        <SummaryDetail ReservationNumber="459787-745" dates="13.6.2023 - 17.6.2026" guests="2 dospělí, 1 dítě" boarding="žádné" totalPrice="7 200" checkIn="13.6.2023 do 18:00" checkOut="17.6.2026 do 10:00" />
        <SummaryServices parkingPrice="200" breakfastPrice="150" />
        <SummaryCancel />           
    </div>
    )}
