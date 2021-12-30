import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import videojs from 'video.js';
// import hls from '@videojs/http-streaming';
import "video.js/dist/video-js.css";
import './ChannelStreaming.css';

const ChannelStreaming = (props) => {

    const videoRef = useRef(null);
    const playerRef = useRef(null);
  
    // useEffect(() => {
    //   // make sure Video.js player is only initialized once
    //   if (!playerRef.current) {
    //     const videoElement = videoRef.current;
    //     if (!videoElement) return;
  
    //     const player = playerRef.current = videojs(videoElement, {
    //         autoplay: true,
    //         controls: true,
    //         responsive: true,
    //         fluid: true,
    //         muted: true,
    //         sources: [{
    //             src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_10mb.mp4',
    //         }]
    //       }, () => {
    //       console.log("player is ready");
    //     });
    //   }
    // }, [videoRef]);
    
    useEffect(() => {
        // make sure Video.js player is only initialized once
        if (!playerRef.current) {
          const videoElement = videoRef.current;
          if (!videoElement) return;
    
          const player = playerRef.current = videojs(videoElement, { 
              autoplay: true,
              controls: true,
              responsive: true,
              fluid: true,
              muted: true,
              html5: {
                vhs: {
                }
              },
              sources: [{
                  src: 'http://210.210.155.35/qwr9ew/s/s50/index2.m3u8',
                  type: 'application/x-mpegURL',
              }]
            }, () => {
              console.log("player is ready");
          });
        }
      }, [videoRef]);
  
    // Dispose the Video.js player when the functional component unmounts
    useEffect(() => {
      const player = playerRef.current;
  
      return () => {
        if (player) {
          player.dispose();
          playerRef.current = null;
        }
      };
    }, [playerRef]);

    return (
        <div className='channelStreamingWrapper'>
            {/* <ReactPlayer
                className="player-wrapper"
                url='http://forevertv.me:8080/anand615/pass123/142784'
                controls
                autoPlay
                playing
                width='100%'
                height='100%'
            /> */}
            <video ref={videoRef} className="video-js vjs-big-play-centered" />
        </div>
    )
}

export default ChannelStreaming;