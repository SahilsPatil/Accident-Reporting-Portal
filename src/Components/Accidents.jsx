import React, { useState } from 'react'
import AccidentCard from './AccidentCard'
import AccidentMap from './AccidentMap'
import accidentData from './../Json/accidentDetails.json';


export default function Accidents({ onAccidentSelect }) {
    const [mapView, setMapView] = useState(false)
    const [selectedAccidentId, setSelectedAccidentId] = useState(null);
    const [filter, setFilter] = useState('');
    const [sortOption, setSortOption] = useState('recent');

    const handleCardClick = (id) => {
        setSelectedAccidentId(id);
        if (onAccidentSelect) {
            onAccidentSelect(id);
        }
    };
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };
    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const filteredVehicles = accidentData.filter(vehicle => {
        return filter ? vehicle.vehicle === filter : true;
    });
    const sortedVehicles = filteredVehicles.sort((a, b) => {
        if (sortOption === 'recent') {
            return new Date(b.time) - new Date(a.time);
        } else if (sortOption === 'Resolved') {
            return a.status === 'Resolved' ? -1 : 1;
        } else if (sortOption === 'Open') {
            return a.status === 'Open' ? -1 : 1;
        }
        return 0;
    });

    return (
        <div className="mid_accidents">
            <div className="mid_accidents_head">
                Accidents
            </div>
            <div className="mid_accidents_views">
                <div onClick={() => setMapView(false)} className={mapView ? "mid_accidents_views_map" : "mid_accidents_views_list"}>
                    List View
                </div>
                <div onClick={() => setMapView(true)} className={mapView ? "mid_accidents_views_list" : "mid_accidents_views_map"}>
                    Map View
                </div>
            </div>
            <div className="mid_accidents_views_accidents">
                {mapView ? <AccidentMap /> : sortedVehicles.map((e) => { return <AccidentCard spot={e.spot} status={e.status} time={e.time} severity={e.severity} id={e.id} location={e.location} onCardClick={handleCardClick} /> })}

            </div>
        </div>
    )
}
