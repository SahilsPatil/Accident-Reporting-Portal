import React from 'react'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import AccidentDetailsCard from './AccidentDetailsCard';

export default function AccidentDetails({id}) {

    return (
        <div className='last'>
            <div className="mid_accidents_head">
                Accident Details
            </div>
            <AccidentDetailsCard id={id}/>
        </div>
    )
}
