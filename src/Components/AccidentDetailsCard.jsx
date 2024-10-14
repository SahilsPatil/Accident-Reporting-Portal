import React from 'react'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import accidentData from './../Json/accidentDetails.json';

export default function AccidentDetailsCard({ id }) {
    id==null?id=7:id=id
    
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
        <div className="last_accident">
            {accidentData.map((e) => {
                if (e.id == id) {
                    return (
                        <>
                            <div className="last_accident_photo">
                                <img src="/src/assets/accident/image.png" alt="" />
                            </div>
                            <div className="last_accident_details">
                                <div className="last_accident_details_status">
                                    <div className="last_accident_details_status_open">

                                    </div>
                                    <div className="last_accident_details_status_line">
                                        <div className="last_accident_details_status_line_line">

                                        </div>
                                    </div>
                                    <div className="last_accident_details_status_closed">

                                    </div>
                                </div>
                                <div className="last_accident_details_location">
                                    <img src="/src/assets/icon_location.svg" alt="" />
                                    <div className="last_accident_details_location_details">
                                        <div className="last_accident_details_location_title">
                                            Location
                                        </div>
                                        <div className="last_accident_details_location_Desc">
                                            {e.spot}
                                        </div>
                                    </div>
                                </div>
                                <div className="last_accident_details_timesev">
                                    <div className="last_accident_details_location">
                                        <img src="/src/assets/icon_time.svg" alt="" />
                                        <div className="last_accident_details_location_details">
                                            <div className="last_accident_details_location_title">
                                                Date
                                            </div>
                                            <div className="last_accident_details_location_Desc">
                                                {e.time}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="last_accident_details_location">
                                        <img src="/src/assets/icon_severity.svg" alt="" />
                                        <div className="last_accident_details_location_details">
                                            <div className="last_accident_details_location_title">
                                                Severity
                                            </div>
                                            <div className="last_accident_details_location_Desc">
                                                <select name="severity" id="severity">
                                                    <option value="High">{e.severity}</option>
                                                    <option value="Low">Low</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="last_accident_details_other">
                                <div className="last_accident_details_other_emr">
                                    <img src="/src/assets/icon_ambulance.svg" alt="" />
                                </div>
                                <div className="last_accident_details_other_emr">
                                    <img src="/src/assets/icon_police.svg" alt="" />
                                </div>
                                <div className="last_accident_details_other_emr">
                                    <img src="/src/assets/icon_fireb.svg" alt="" />
                                </div>
                                <div className="last_accident_details_other_emr">
                                    <img src="/src/assets/icon_copy.svg" alt="" />
                                </div>
                            </div>
                            <div className="last_accident_details_map">
                                <MapContainer center={[e.location.lat, e.location.lng]} zoom={13} style={{ height: '300px', width: '100%' }}>
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    />
                                    <Marker position={[e.location.lat, e.location.lng]} icon={redIcon}>
                                        {/* Optional Popup */}
                                    </Marker>
                                </MapContainer>
                            </div>
                        </>
                    )
                }
            })}
        </div>
    )
}
