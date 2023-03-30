import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Recent from './screens/Recent';
import { Route, Routes} from 'react-router-dom';
import Favourites from './screens/Favourites';
import Contacts from './screens/Contacts';
import AddContact from './screens/AddContact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Header />
      <div className="screens">
        <Routes>
          <Route element={<Recent /> }path="/"/>
          <Route element={<Favourites />} path='/favourites'/>
          <Route element={<Contacts />} path='/contacts' />
          <Route element={<AddContact />} path='/add-contact' />
        </Routes>
      </div>
      </div>
    </div>
  );
}

export default App;
