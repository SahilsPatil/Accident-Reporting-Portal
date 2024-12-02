// VideoPlayer.js
import React, { useState } from 'react';
import { Player, ControlBar, PlayToggle, VolumeMenuButton, CurrentTimeDisplay, TimeDivider, DurationDisplay, ProgressControl, FullscreenToggle } from 'video-react';
import "video-react/dist/video-react.css"; // Import CSS for video-react

const VideoPlayer = ({ videoSrc, title }) => {
    const [playbackRate, setPlaybackRate] = useState(1.0);

    const handlePlaybackRateChange = (rate) => {
        setPlaybackRate(rate);
    };

    return (
        <div className="video-container" style={{ backgroundColor: '#2B2C45', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ color: '#B0BCD0', textAlign: 'center' }}>{title}</h3>
            <Player
                playsInline
                poster="/assets/poster.png"
                src={videoSrc}
                playbackRate={playbackRate}
                style={{ borderRadius: '8px', overflow: 'hidden' }} // Styling for the player
            >
                <ControlBar autoHide={false}>
                    <PlayToggle />
                    <VolumeMenuButton />
                    <CurrentTimeDisplay />
                    <TimeDivider />
                    <DurationDisplay />
                    <ProgressControl />
                    <FullscreenToggle />
                </ControlBar>
                {/* Add custom controls for playback speed */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <button onClick={() => handlePlaybackRateChange(0.5)} style={buttonStyle}>0.5x</button>
                    <button onClick={() => handlePlaybackRateChange(1.0)} style={buttonStyle}>1x</button>
                    <button onClick={() => handlePlaybackRateChange(1.5)} style={buttonStyle}>1.5x</button>
                    <button onClick={() => handlePlaybackRateChange(2.0)} style={buttonStyle}>2x</button>
                </div>
            </Player>
        </div>
    );
};

// Style for buttons
const buttonStyle = {
    backgroundColor: '#1B1C31',
    color: '#B0BCD0',
    border: 'none',
    padding: '10px 15px',
    margin: '0 5px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
};

export default VideoPlayer;
