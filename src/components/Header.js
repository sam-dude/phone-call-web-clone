import '../App.css'
const Header = () => {
    return (
        <div className="header">
            <span className='icon'><i className='fa fa-search'></i></span>
            <input type="search" name="search contact" id="search" placeholder='Search contacts and places' />
            <span className="icon"><i className="fas fa-microphone"></i></span>
            <span className="icon"><i className="fas fa-ellipsis-vertical"></i></span>
        </div>
    );
}
 
export default Header;