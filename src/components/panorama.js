import React, { useState } from 'react';
import { Pannellum } from 'pannellum-react';
import Image from '../images/PanoramaInterior.png';
import image2 from '../images/image360.jpg';

export default function Panorama() {
    const [currentImage, setCurrentImage] = useState(Image);

    const handleHotspotClick = () => {
        if (currentImage === Image) {
            setCurrentImage(image2);
        }
        if (currentImage === image2) {
            setCurrentImage(Image);
        }
    };

    return (
        <div>
            <Pannellum
                width="100%"
                height="100vh"
                image={currentImage}
                pitch={10}
                yaw={180}
                hfov={110}
                autoLoad
                onLoad={() => {
                    console.log('Panorama loaded');
                }}
            >
                <Pannellum.Hotspot
                    type="custom"
                    pitch={5}
                    yaw={100}
                    handleClick={handleHotspotClick}
                    handleClickArg={{}}
                    cssClass="custom-hotspot"
                />

                <Pannellum.Hotspot
                    type="info"
                    pitch={31}
                    yaw={-107}
                    text="Info Hotspot Text 4"
                />
            </Pannellum>
        </div>
    );
}
