import { NavLink } from "react-router-dom";

const AddContact = () => {
    return (
        <div className="add-contacts">
            <div className="head">
                <div className="lhs hs">
                    <NavLink to='/contacts' className='icon'><i className="fa fa-times"></i></NavLink>
                    <div className="title">Create contact</div>
                </div>
                <div className="rhs hs">
                    <div className="save">Save</div>
                    <i className="fas fa-ellipsis-vertical icon"></i>
                </div>
            </div>
            <div className="body">
            <div className="save-to">
                <div className="icon">Save to</div>
                <div className="to">Device </div>
            </div>
            <form >
                <div className="image">
                    <input style={{display:"none"}} type="file" id="file"/>
                    <label htmlFor="file">
                        {/* <img src={Add} alt="" /> */}
                        <i className="fa-solid fa-camera"></i>
                    </label>
                </div>
                <div className="form-details">
                    <div className="name">
                        <div className="icon"><i className="far fa-user"></i></div>
                        <div className="inputs">
                            <input type="text" name="Name-prefix" id="namePrefix" placeholder="Name prefix"/>
                            <input type="text" name="First name" id="firstName" placeholder="First Name" required/>
                            <input type="text" name="Middle name" id="middleName" placeholder="Middle name"/>
                            <input type="text" name="Surname" id="surname" placeholder="Surname"/>
                            <input type="text" name="Name suffix" id="nameSuffix" placeholder="Name suffix"/>

                        </div>
                    </div>
                    <div className="name">
                        <div className="icon"><i className="far fa-building"></i></div>
                        <div className="inputs">
                            <input type="text" name="company" id="company" placeholder="Company"/>
                        </div>
                    </div>
                    <div className="name">
                        <div className="icon"><i className="fa-solid fa-phone"></i></div>
                        <div className="inputs">
                            <input type="tel" name="phone" id="phone" placeholder="Phone" required/>
                        </div>
                    </div>
                    <div className="name">
                        <div className="icon"><i className="fa-solid fa-message"></i></div>
                        <div className="inputs">
                            <input type="email" name="email" id="phone" placeholder="Email"/>
                        </div>
                    </div>
                    
                </div>
            </form>
            </div>
        </div>
    );
}
 
export default AddContact;