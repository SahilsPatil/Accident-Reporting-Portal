import React, { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
// import accidentData from './../Json/accidentDetails.json';

export default function AccidentMap({ onLocationClick }) {
    const [accidentData, setAccidents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the API
        const fetchAccidents = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/accidents/'); // Replace with your actual API URL
                if (!response.ok) {
                    throw new Error('Failed to fetch accident data');
                }
                const data = await response.json();
                setAccidents(data); // Assuming the API returns an array of accidents
                console.log(accidentData);
                
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAccidents();
    }, []);

    const redIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
    const handleCardClick = (id) => {
        setSelectedAccidentId(id);
        if (onAccidentSelect) {
            onAccidentSelect(id);
        }
    };

    const defaultPosition = [20.5937, 78.9629];

    const position = location && location.length === 2 ? location : defaultPosition;

    return (
        <div className="accidentmap">
            <MapContainer center={defaultPosition} zoom={5} style={{ height: '100%', width: '100%', borderRadius: "3px" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {accidentData.map((accident) => (
                    <Marker
                        key={accident.id}
                        position={[accident.location.lat, accident.location.lng]}
                        icon={redIcon}
                        eventHandlers={{
                            click: () => onLocationClick(accident._id), // Pass the accident ID on click
                        }}
                    >
                <Popup>
                    {accident.spot}<br />
                    Severity: {accident.severity}
                </Popup>
            </Marker>
                ))}
        </MapContainer>
        </div >
    )
}
