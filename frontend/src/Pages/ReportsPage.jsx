import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import Accidents from '../Components/Accidents';
import TopNav from '../Components/TopNav';
import SideBar from '../Components/SideBar';
import AccidentDetails from '../Components/AccidentDetails';
import './../Css/AdminDashboard.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


export default function ReportsPage() {

    const [selectedAccidentId, setSelectedAccidentId] = useState(null);

    const handleAccidentSelect = (id) => {
        setSelectedAccidentId(id);
    };


    const redIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    const defaultPosition = [20.5937, 78.9629];

    const position = location && location.length === 2 ? location : defaultPosition;


    return (
        <div className='dash'>
            <div className="dash_rows">
                <SideBar />
                <div className="dash_column">
                    <TopNav title={"Accident Reports"} />
                    <div className="mid">
                        <Accidents onAccidentSelect={handleAccidentSelect} />
                        <AccidentDetails id={selectedAccidentId} />
                    </div>
                </div>
            </div>
        </div>
    )
}