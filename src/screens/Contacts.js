import { useState } from "react";
import { Link } from "react-router-dom";
import data from '../db/data.json';
const Contacts = () => {
    const [contacts, setContacts] = useState(data.contacts);
    return (
        <div className="contacts page">
            <Link to="/add-contact">
            <div className="add-contact contact">
                <div className="icon"><i className="fas fa-user-plus"></i></div>
                <div className="name">Create new contact</div>
            </div>
            </Link>
            {
                contacts.map(data => (
                    <div key={data.id}>
                        {data.name}
                    </div>
                ))
            }
        </div>
    );
}
 
export default Contacts;