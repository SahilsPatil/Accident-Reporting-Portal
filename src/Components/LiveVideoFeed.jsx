// LiveVideoFeed.jsx
import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop, faExpand, faCompress, faBackward, faForward, faFastForward, faFastBackward } from '@fortawesome/free-solid-svg-icons';
import './../Css/LiveVideoFeed.css'; // Import custom CSS for styling

const LiveVideoFeed = ({ url, title }) => {
    const [playing, setPlaying] = useState(true);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [isExpanded, setIsExpanded] = useState(false);

    const togglePlayPause = () => {
        setPlaying(prev => !prev);
    };

    const handlePlaybackRateChange = (event) => {
        setPlaybackRate(parseFloat(event.target.value));
    };

    const toggleExpand = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <div style={{marginRight:"20px"}} className={`live-video-feed ${isExpanded ? 'expanded' : ''}`}>
            <h3>{title}</h3>
            <div className="video-container">
                <ReactPlayer
                    url={url}
                    playing={playing}
                    playbackRate={playbackRate}
                    controls={false}
                    // width="100%"
                    // height="100%"
                />
            </div>
            <div className="controls">
                <button onClick={togglePlayPause}>
                    <FontAwesomeIcon icon={playing ? faPause : faPlay} />
                </button>
                <button onClick={toggleExpand}>
                    <FontAwesomeIcon icon={faExpand} />
                </button>
                <button onClick={() => setPlaying(false)}>
                    <FontAwesomeIcon icon={faStop} />
                </button>
                <button onClick={() => setPlaybackRate(rate => Math.min(rate + 0.5, 2))}>
                    <FontAwesomeIcon icon={faFastForward} />
                </button>
                <button onClick={() => setPlaybackRate(rate => Math.max(rate - 0.5, 0.5))}>
                    <FontAwesomeIcon icon={faFastBackward} />
                </button>
            </div>
        </div>
    );
};

export default LiveVideoFeed;