import React, { useState } from 'react';
import { Pannellum } from 'pannellum-react';
import dataScene from '../helpers/dataScene';

export default function PanoramaImage() {

    const [scene, setScene] = useState(dataScene['area1']);

    const hotSpots = (element, i) => {
        if (element.cssClass === 'moveScene')
            return (
                <Pannellum.Hotspot
                    key={i}
                    type="custom"
                    pitch={element.pitch}
                    yaw={element.yaw}
                    handleClick = {() => setScene(dataScene[element.scene])}
                    cssClass={element.cssClass}
                />
            )
    }

    return (
        <div>
            <Pannellum
                width="100%"
                height="100vh"
                title={scene.title}
                image={scene.image}
                pitch={scene.pitch}
                yaw={scene.yaw}
                hfov={110}
                autoLoad
                showZoomCtrl={false}
                showFullscreenCtrl={false}
                hotspotDebug={true}
            >
                {Object.values(scene.hotSpots).map((element, i) => hotSpots(element, i))}
            </Pannellum>
        </div>
    );
}
