import React from 'react'

export default function TopNav({title}) {
    return (
        <div className="top">
            <div className="top_title">
                {title!=null?title:"Hello, Admin !"}
            </div>
            <div className="top_other">
                <div className="top_other_search">
                    <img src="/src/assets/icon_search.svg" alt="" />
                </div>
                <div className="top_other_notificatio">
                    <img src="/src/assets/icon_noti.svg" alt="" />
                </div>
                <div className="top_other_profile">
                    <img src="/src/assets/icon_profile.svg" alt="" />
                </div>
            </div>
        </div>
    )
}
