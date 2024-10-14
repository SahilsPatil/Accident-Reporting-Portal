import React from 'react'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

export default function AccidentMap() {
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
        <div className="accidentmap">
            <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%', borderRadius: "3px" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position} icon={redIcon}>
                </Marker>
            </MapContainer>
        </div>
    )
}
