import React, { useEffect, useState } from 'react'
import AccidentCard from './AccidentCard'
import AccidentMap from './AccidentMap'
// import accidentData from './../Json/accidentDetails.json';
import { useLocation } from 'react-router-dom';


export default function Accidents({ onAccidentSelect }) {
    const location = useLocation();
    const message = location.state?.message || '';
    const cause = location.state?.cause || '';
    const [mapView, setMapView] = useState(false)
    const [selectedAccidentId, setSelectedAccidentId] = useState(null);
    const [filter, setFilter] = useState('');
    const [searchFilter, setsearchFilter] = useState('');
    const [sortOption, setSortOption] = useState('Recent');
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


    useEffect(() => {
        message != 'null' ? setsearchFilter(message) : setsearchFilter('')
        const queryParams = new URLSearchParams(location.search);
        const sort = queryParams.get('sort');
        if (sort) {
            setSortOption(sort);
        }
        cause != 'null' ? setFilter(cause) : setFilter('')
    }, [message, location.search, cause]);


    const handleCardClick = (id) => {
        setSelectedAccidentId(id);
        if (onAccidentSelect) {
            onAccidentSelect(id);
        }
    };
    const handleLocationClick = (id) => {
        console.log("Accident ID clicked:", id);
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


    const filteredSearch = accidentData.filter(spot => {
        return searchFilter ? spot.spot.toLowerCase().includes(searchFilter.toLowerCase()) : true;
    });


    const filteredVehicles = filteredSearch.filter(vehicle => {
        return filter ? vehicle.vehicle === filter : true;
    });
    const sortedVehicles = filteredVehicles.sort((a, b) => {
        if (sortOption === 'Recent') {
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
            <div className="mid_accidents_views_filters">
                <div className="mid_accidents_views_filters_filter">
                    <select name="filter" id="filter" value={filter} onChange={handleFilterChange}>
                        <option value="">Filter</option>
                        <option value="Car">Car</option>
                        <option value="Bus">Bus</option>
                        <option value="Truck">Truck</option>
                        <option value="Bike">Bike</option>
                    </select>
                </div>
                <div className="mid_accidents_views_filters_filter">
                    <select name="filter" id="filter" value={sortOption} onChange={handleSortChange}>
                        <option value="" disabled>Sort</option>
                        <option value="recent">Recent</option>
                        <option value="Resolved">Resolved</option>
                        <option value="Open">Open</option>
                    </select>
                </div>
            </div>
            <div className="mid_accidents_views_accidents">
                {mapView ? <AccidentMap onLocationClick={handleLocationClick} /> : sortedVehicles.map((e) => { return <AccidentCard spot={e.spot} status={e.status} time={e.time} severity={e.severity} id={e._id} location={e.location} onCardClick={handleCardClick} /> })}

            </div>
        </div>
    )
}
