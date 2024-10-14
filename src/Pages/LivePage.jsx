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
                    <TopNav />
                    <div className='dashboard'>
                        <div className="dashboard_lives">
                            <LiveVideoFeed url="/src/assets/accident/videos/video1.mp4" title="Camera 1: Entrance" />
                            <LiveVideoFeed url="/src/assets/accident/videos/video1.mp4" title="Camera 1: Entrance" />
                            <LiveVideoFeed url="/src/assets/accident/videos/video1.mp4" title="Camera 1: Entrance" />
                            <LiveVideoFeed url="/src/assets/accident/videos/video1.mp4" title="Camera 1: Entrance" />
                            <LiveVideoFeed url="/src/assets/accident/videos/video1.mp4" title="Camera 1: Entrance" />
                            <LiveVideoFeed url="/src/assets/accident/videos/video1.mp4" title="Camera 1: Entrance" />
                            <LiveVideoFeed url="/src/assets/accident/videos/video1.mp4" title="Camera 1: Entrance" />
                            <LiveVideoFeed url="/src/assets/accident/videos/video1.mp4" title="Camera 1: Entrance" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
