import './SummaryDetailTop.css';
import { SummaryDetail } from '../SummaryDetail/SummaryDetail';
import { SummaryServices } from '../SummaryServices/SummaryServices';
import { SummaryCancel } from '../SummaryCancel/SummaryCancel';

export const SummaryDetails = () => {
    return (
    <div className="summary__detailTop">
        <SummaryDetail ReservationNumber="459787-745" dates="13.6.2023 - 17.6.2026" guests="2 dospělí, 1 dítě" boarding="žádné" totalPrice="7 200" checkIn="13.6.2023 do 18:00" checkOut="17.6.2026 do 10:00" />
        <SummaryServices parkingPrice="200" breakfastPrice="150" wellnessPrice="zdarma" wifi="Zdarma na všech pokojích"/>
        <SummaryCancel vcasneZruseni="Pokud zrušíte rezervaci do 14 dní před příjezdem, nebude Vám
                účtována žádná částka." pozdejsiZruseni="Pokud zrušíte rezervaci později nebo nedorazíte vůbec, bude Vám
                účtována částka za první noc pobytu." />           
    </div>
    )}
