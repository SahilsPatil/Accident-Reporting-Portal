import React from 'react'
import LiveVideoFeed from '../Components/LiveVideoFeed'
import TopNav from '../Components/TopNav'
import SideBar from '../Components/SideBar'
import './../Css/AdminDashboard.css';
import './../Css/Dashboard.css';
import './../Css/LivePage.css';

export default function LivePage() {
    return (
        <div className='dash'>
            <div className="dash_rows">
                <SideBar />
                <div>
                    <TopNav title={"Live Cameras"}/>
                    <div className='dashboard'>
                        <div className="dashboard_lives">
                            <LiveVideoFeed url="/src/assets/accident/videos/video1.mp4" title="Camera 1" />
                            <LiveVideoFeed url="/src/assets/accident/videos/video1.mp4" title="Camera 2" />
                            <LiveVideoFeed url="/src/assets/accident/videos/video1.mp4" title="Camera 3" />
                            <LiveVideoFeed url="/src/assets/accident/videos/video1.mp4" title="Camera 4" />
                            <LiveVideoFeed url="/src/assets/accident/videos/video1.mp4" title="Camera 5" />
                            <LiveVideoFeed url="/src/assets/accident/videos/video1.mp4" title="Camera 6" />
                            <LiveVideoFeed url="/src/assets/accident/videos/video1.mp4" title="Camera 7" />
                            <LiveVideoFeed url="/src/assets/accident/videos/video1.mp4" title="Camera 8" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
