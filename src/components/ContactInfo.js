import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
const ContactInfo = ({recent}) => {
    const recen = recent;
    return (
        <div className="contactInfo">
            <div className="icon contact-icon">{recen.name.charAt(0)}</div>
            <div className="call-detail">
                <div id="name">{recen.name}</div>
                <div id="detail">
                    <div id="type">✔</div>
                    <div className="place">{recen.country}</div>
                    <div className="date">{recent.time}</div>
                </div>
            </div>
            <div className="icon"><FontAwesomeIcon icon={faPhone}/></div>
        </div>
    );
}
 
export default ContactInfo;