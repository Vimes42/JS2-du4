import './SummaryCancel.css'

export const SummaryCancel = ( {vcasneZruseni, pozdejsiZruseni} ) => {
    return (<div className="summary__cancel">
            <h3>Storno podmínky</h3>
            <div className="summary__cancel-text">
                <p> {vcasneZruseni} </p>
                <p> {pozdejsiZruseni} </p>
            </div>
            </div>)}