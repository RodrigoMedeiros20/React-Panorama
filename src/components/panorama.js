import React from 'react'
import { Pannellum } from 'pannellum-react'

import Image from '../images/PanoramaInterior.png'

export default function Panorama() {
    return (
        <div>
            <Pannellum
                width='100%'
                height='100vh'
                image={Image}
                pitch={10}
                yaw={180}
                hfov={110}
                autoLoad
                onLoad={() => {
                    console.log("Panorama loaded")
                }}
            ></Pannellum>
        </div>
    )
}