import React from 'react';
import { PannellumVideo } from 'pannellum-react';
import Video from '../images/video360.mp4';

export default function PanoramaVideo() {

    return (
        <div>
            <PannellumVideo
                video={Video}
                autoLoad
                loop
                width="100%"
                height="100vh"
                pitch={10}
                yaw={180}
                hfov={140}
                minHfov={50}
                maxHfov={180}
            ></PannellumVideo>
        </div>
    );
}
