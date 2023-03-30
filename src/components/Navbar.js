import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [fastyle, setFastyle] = useState('far fa-star');
    const handleClick = (e) => {
        const parent = e.target.parentElement.parentElement;
        let lis = parent.children;
        let lisArr = [...lis];
        let aArry = [];
        lisArr.forEach(li => aArry.push(li.firstElementChild));
        let iconArr = []
        aArry.forEach(a => iconArr.push(a.firstElementChild));
        
        // aArry.forEach(a => {
        //     if (a.className === 'active'){
        //         a.firstElementChild.classList.remove('far');
        //         a.firstElementChild.classList.add('fas');
        //     }else if(!(a.className === 'active')){
        //         a.firstElementChild.classList.remove('fas');
        //         a.firstElementChild.classList.add('far');
        //     }
        // })
    };
    
    return (
        <div className="nav">
            <ul>
                <li><NavLink to='/favourites' onClick={handleClick} style={({isActive}) => ( isActive ? {color: 'blue'}  : {color: 'black'})} > <i className={fastyle}></i> Favourites</NavLink></li>
                <li><NavLink to='/' onClick={handleClick} style={({isActive}) => ( isActive ? {color: 'blue'} : {color: 'black'})}> <i className="far fa-clock"></i> Recent</NavLink></li>
                <li><NavLink to='/contacts'  style={({isActive}) => ( isActive ? {color: 'blue'} : {color: 'black'})}> <i className="fas fa-user-group"></i> Contacts</NavLink></li>
            </ul>
        </div>
    );
}
 
export default Navbar;