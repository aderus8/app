import React from 'react';
import YouTube from 'react-youtube';

const YoutubeVideo = ({videoID}) => {
    // ID filmu YouTube, które chcesz odtworzyć


    // Opcje odtwarzacza YouTube
    const opts = {
        height: '440',
        width: '700',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    // Obsługa zdarzenia po załadowaniu filmu
    const onReady = (event) => {
        // dostęp do player instance (ref)
        event.target.pauseVideo();
    };

    return (
        <div>
            <YouTube videoId={videoID} opts={opts} onReady={onReady} />
        </div>
    );
};

export default YoutubeVideo;
