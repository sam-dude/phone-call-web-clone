import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Favourites = () => {
    const [favDetails, setFavDetails] = useState([
        {name: 'Angel Momma💖💙', type: 'Mobile', id: 1},
        {name: 'Sis Bukky 💜', type: 'Mobile', id: 2},
        {name: 'Daddy 2', type: 'Home', id: 3},
        {name: 'Samuel', type: 'Mobile', id: 4},
        {name: 'Bro Tope 😎😍', type: 'Mobile', id: 5},
        {name: 'Sister Sarah', type: 'Home', id: 6},
    ]);

    const [frequentList, setFrequentList] = useState([
        {name: 'Mhiz Precious🤍💛', type: 'Mobile', tel: '09064584479'},
        {name: 'Mi Papi', type: 'Mobile', tel: '08137295053'},
        {name: 'Festus Charles🤍', type: 'Mobile', tel: '08137295053'},
        {name: 'Tofunmi🤍', type: 'Mobile', tel: '08130221585'},
        {name: 'Tonnicle 💯', type: 'Mobile', tel: '08163650054'}
    ])
    return ( 
        <div className="favourites page">
            <div className="favourites-list">
                <div className="title">
                    <div className="name">FAVOURITES</div>
                    <div id="add">ADD</div>
                </div>
                <div className="list">
                    {favDetails.map(fav => (
                        <div className="fav" key={fav.id}>
                            <div className="icon">{ fav.name.charAt(0) }</div>
                            <div className="name">{ fav.name }</div>
                            <div className="type">{ fav.type }</div>
                        </div>
                    ))}   
                </div>
            </div>
            <div className="frequents">
                    <div className="title">FREQUENTS</div>
                    {frequentList.map((frequent, index) => (
                        <div className="frequent" key={index}>
                            <div className="icon contact-icon">{frequent.name.charAt(0)}</div>
                            <div className="details">
                                <div className="name">{frequent.name}</div>
                                <div className="number">
                                    {frequent.type} {frequent.tel}
                                </div>
                            </div>
                            <div className="call-icon"><FontAwesomeIcon icon={faPhone}/></div>
                        </div>
                    ))}
            </div>
            

        </div>
     );
}
 
export default Favourites;