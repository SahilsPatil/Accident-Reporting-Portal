import React, { useState } from 'react'
import AccidentCard from './AccidentCard'
import AccidentMap from './AccidentMap'
import accidentData from './../Json/accidentDetails.json';


export default function Accidents({onAccidentSelect}) {
    const [mapView, setMapView] = useState(false)
    const [selectedAccidentId, setSelectedAccidentId] = useState(null);

    const handleCardClick = (id) => {
        setSelectedAccidentId(id);
        if (onAccidentSelect) {
            onAccidentSelect(id);
        }
    };

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
                {mapView ? <AccidentMap /> : accidentData.map((e) => { return <AccidentCard spot={e.spot} status={e.status} time={e.time} severity={e.severity} id={e.id} location={e.location} onCardClick={handleCardClick} /> })}

            </div>
        </div>
    )
}
