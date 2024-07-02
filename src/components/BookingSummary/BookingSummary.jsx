import './BookingSummary.css';
import { SummaryHead } from '../SummaryHead/Summary';
import { SummaryDetails } from '../SummaryDetailTop/SummaryDetailTop';

export const BookingSummary = () => {
    return (
      <>
        <SummaryHead photoSrc="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=960" hotelname="Hotel Lesní Zátiší" address="Malohradské skály 347/21" city="Malohradská ves" rating="4.65" roomname="Pokoj 2" roomtype="Dvoulůžkový s dětskou přistýlkou" roomprice="1 800 Kč / noc" />
        <SummaryDetails /> 
      </>
    );
  };
  