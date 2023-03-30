import ContactInfo from "../components/ContactInfo";
import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";
import data from '../db/data.json';

const Recent = () => {
    const [recents, setRecents] = useState(null);
    const [isPending, setIspending] = useState(false);
    const [error, setError] = useState(false);
    const [recentData, setRecentData] = useState(data.recent);
    useEffect(() => {
        setIspending(true);
        fetch('http://localhost:5000/recent')
          .then(res => {
            console.log(data);
            console.log(recentData);
            return res.json();
          })
          .then(data => {
            console.log(data)
            setRecents(data);
            setIspending(false);
          })
      }, []);
    return (
        <div className="recent page">
            {
                isPending ? <LoadingScreen />: recents && recents
                .sort((a, b) => (a.time > b.time ? 1 : -1))
                .map(recen => (
                    <div key={recen.id}>
                        <ContactInfo recent={recen}/>
                    </div>
                ))
            }
        </div>
    );
}
 
export default Recent;