import React from 'react'

export default function AccidentCard({ spot, status, time, severity, id, onCardClick }) {

    const handleClick = () => {
        onCardClick(id);
    };


    return (
        <div className="mid_accidents_views_accidents_accident" onClick={handleClick}>
            <div className="mid_accidents_views_accidents_accident_num"><img src="/src/assets/icon_fire.svg" alt="" /></div>
            <div className="mid_accidents_views_accidents_accident_column">
                <div className="mid_accidents_views_accidents_accident_status">{status}</div>
                <div className="mid_accidents_views_accidents_accident_location">
                    {/* <img src="/src/assets/icon_location.svg" alt="" />  */}
                    <span>{spot}</span>
                </div>

                <div className="mid_accidents_views_accidents_accident_typesev">
                    <div className="mid_accidents_views_accidents_accident_typesev_date">
                        {time}
                    </div>
                    <div className="mid_accidents_views_accidents_accident_typesev_type">
                        {severity}
                    </div>
                </div>
            </div>
        </div>
    )
}
