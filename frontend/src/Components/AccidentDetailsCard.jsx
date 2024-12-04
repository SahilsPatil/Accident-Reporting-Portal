// import React, { useEffect, useState } from 'react'
// import 'leaflet/dist/leaflet.css';
// import { MapContainer, TileLayer, Marker } from 'react-leaflet';
// import L from 'leaflet';
// // import accidentData from './../Json/accidentDetails.json';

// export default function AccidentDetailsCard({ id }) {
//     const [accidentData, setAccidents] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     // console.log(accidentData[accidentData.length-1]._id);

//     // id == null ? id = accidentData[accidentData.length - 1]._id : id = id
//     // console.log("id:: ", id);




//     useEffect(() => {
//         // Fetch data from the API
//         const fetchAccidents = async () => {
//             try {
//                 const response = await fetch(url.URL+'/api/accidents/'); // Replace with your actual API URL
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch accident data');
//                 }
//                 const data = await response.json();
//                 setAccidents(data); // Assuming the API returns an array of accidents
//             } catch (error) {
//                 setError(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchAccidents();
//     }, []);

//     if (!id && accidentData.length > 0) {
//         id = accidentData[accidentData.length - 1]._id;
//     }


//     const redIcon = new L.Icon({
//         iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
//         iconSize: [25, 41],
//         iconAnchor: [12, 41],
//         popupAnchor: [1, -34],
//         shadowSize: [41, 41]
//     });

//     const defaultPosition = [20.5937, 78.9629];

//     const position = location && location.length === 2 ? location : defaultPosition;



//     return (
//         <div className="last_accident">
//             {accidentData.map((e) => {
//                 if (e._id == id) {
//                     return (
//                         <>
//                             <div className="last_accident_photo">
//                                 <img src="/src/assets/accident/image.png" alt="" />
//                             </div>
//                             <div className="last_accident_details">
//                                 <div className="last_accident_details_status">
//                                     <div className="last_accident_details_status_open">

//                                     </div>
//                                     <div className="last_accident_details_status_line">
//                                         <div className="last_accident_details_status_line_line">

//                                         </div>
//                                     </div>
//                                     <div className="last_accident_details_status_closed">

//                                     </div>
//                                 </div>
//                                 <div className="last_accident_details_location">
//                                     <img src="/src/assets/icon_location.svg" alt="" />
//                                     <div className="last_accident_details_location_details">
//                                         <div className="last_accident_details_location_title">
//                                             Location
//                                         </div>
//                                         <div className="last_accident_details_location_Desc">
//                                             {e.spot}
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="last_accident_details_timesev">
//                                     <div className="last_accident_details_location">
//                                         <img src="/src/assets/icon_time.svg" alt="" />
//                                         <div className="last_accident_details_location_details">
//                                             <div className="last_accident_details_location_title">
//                                                 Date
//                                             </div>
//                                             <div className="last_accident_details_location_Desc">
//                                                 {e.time}
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="last_accident_details_location">
//                                         <img src="/src/assets/icon_severity.svg" alt="" />
//                                         <div className="last_accident_details_location_details">
//                                             <div className="last_accident_details_location_title">
//                                                 Severity
//                                             </div>
//                                             <div className="last_accident_details_location_Desc">
//                                                 <select name="severity" id="severity">
//                                                     <option value="High">{e.severity}</option>
//                                                     <option value="Low">Low</option>
//                                                 </select>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="last_accident_details_other">
//                                 <div className="last_accident_details_other_emr">
//                                     <img src="/src/assets/icon_ambulance.svg" alt="" />
//                                 </div>
//                                 <div className="last_accident_details_other_emr">
//                                     <img src="/src/assets/icon_police.svg" alt="" />
//                                 </div>
//                                 <div className="last_accident_details_other_emr">
//                                     <img src="/src/assets/icon_fireb.svg" alt="" />
//                                 </div>
//                                 <div onClick={() => { navigator.clipboard.writeText(`https://www.google.com/maps?q=${e.location.lat},${e.location.lng}`) }} className="last_accident_details_other_emr">
//                                     <img src="/src/assets/icon_copy.svg" alt="" />
//                                 </div>
//                             </div>
//                             <div className="last_accident_details_map">
//                                 <MapContainer center={[e.location.lat, e.location.lng]} zoom={13} style={{ height: '300px', width: '100%' }}>
//                                     <TileLayer
//                                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                                         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                                     />
//                                     <Marker position={[e.location.lat, e.location.lng]} icon={redIcon}>
//                                         {/* Optional Popup */}
//                                     </Marker>
//                                 </MapContainer>
//                             </div>
//                         </>
//                     )
//                 }
//             })}
//         </div>
//     )
// }


import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import url from '../../backend.json';

export default function AccidentDetailsCard({ id }) {
    const [accidentData, setAccidents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAccidents = async () => {
            try {
                const response = await fetch(url.URL + '/api/accidents/');
                if (!response.ok) {
                    throw new Error('Failed to fetch accident data');
                }
                const data = await response.json();
                setAccidents(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchAccidents();
    }, []);

    if (!id && accidentData.length > 0) {
        id = accidentData[accidentData.length - 1]._id;
    }

    const redIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    const assignJob = async (serviceType) => {
        try {
            const response = await fetch(`${url.URL}/api/jobs/assign/${id}/${serviceType}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message || 'Failed to assign job');
            }
            alert(`Job assigned to ${serviceType} successfully`);
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <div className="last_accident">
            {accidentData.map((e) => {
                if (e._id == id) {
                    return (
                        <div key={e._id}>
                            <div className="last_accident_photo">
                                {e.images[0]?<img src={url.URL+"/images/"+e.images[0]} alt="" />:<img src="/src/assets/accident/image.png" alt="" />}
                            </div>
                            <div className="last_accident_details">
                                <div className="last_accident_details_location">
                                    <img src="./src/assets/icon_location.svg" alt="" />
                                    <div className="last_accident_details_location_details">
                                        <div className="last_accident_details_location_title">Location</div>
                                        <div className="last_accident_details_location_Desc">{e.spot}</div>
                                    </div>
                                </div>
                                <div className="last_accident_details_timesev">
                                    <div className="last_accident_details_location">
                                        <img src="./src/assets/icon_time.svg" alt="" />
                                        <div className="last_accident_details_location_details">
                                            <div className="last_accident_details_location_title">Date</div>
                                            <div className="last_accident_details_location_Desc">{e.time}</div>
                                        </div>
                                    </div>
                                    <div className="last_accident_details_location">
                                        <img src="./src/assets/icon_severity.svg" alt="" />
                                        <div className="last_accident_details_location_details">
                                            <div className="last_accident_details_location_title">Severity</div>
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
                                <div onClick={() => assignJob('ambulance')} className="last_accident_details_other_emr">
                                    <img src="./src/assets/icon_ambulance.svg" alt="Assign Ambulance" />
                                </div>
                                <div onClick={() => assignJob('police')} className="last_accident_details_other_emr">
                                    <img src="./src/assets/icon_police.svg" alt="Assign Police" />
                                </div>
                                <div onClick={() => assignJob('fire')} className="last_accident_details_other_emr">
                                    <img src="./src/assets/icon_fireb.svg" alt="Assign Fire Brigade" />
                                </div>
                                <div onClick={() => navigator.clipboard.writeText(`https://www.google.com/maps?q=${e.location.lat},${e.location.lng}`)} className="last_accident_details_other_emr">
                                    <img src="./src/assets/icon_copy.svg" alt="Copy Location" />
                                </div>
                            </div>
                            <div className="last_accident_details_map">
                                <MapContainer center={[e.location.lat, e.location.lng]} zoom={13} style={{ height: '300px', width: '100%' }}>
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    />
                                    <Marker position={[e.location.lat, e.location.lng]} icon={redIcon} />
                                </MapContainer>
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
}

