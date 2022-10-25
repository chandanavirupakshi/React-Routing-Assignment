import './css/Rater.css';
function RaterComponent() {
    return (
        <ul className="rating">
            <li className="filled">{'\u2605'}</li>
            <li className="filled">{'\u2605'}</li>
            <li className="filled">{'\u2605'}</li>
            <li>{'\u2605'}</li>
            <li>{'\u2605'}</li>
        </ul>
    )
}
export default RaterComponent;
