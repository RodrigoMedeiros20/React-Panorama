import area1 from '../images/area1.jpg';
import area2 from '../images/area2.jpg';
import leftArea from '../images/leftArea.jpg';

const Scene = {

    area1: {
        title: 'Area 1',
        image: area1,
        pitch: 25.5,
        yaw: 166.1,
        hotSpots: {
            nexScene: {
                type: 'custom',
                pitch: 4.17,
                yaw: 133.7,
                cssClass: 'moveScene',
                scene: 'area2'
            }
        }
    },

    area2: {
        title: 'Area 2',
        image: area2,
        pitch: 9.6,
        yaw: 73.8,
        hotSpots: {
            backScene: {
                type: 'custom',
                pitch: 2.8,
                yaw: -115.7,
                cssClass: 'moveScene',
                scene: 'area1'
            },

            leftScene: {
                type: 'custom',
                pitch: 5.0,
                yaw: -15.3,
                cssClass: 'moveScene',
                scene: 'leftArea'
            },

            rightScene: {
                type: 'custom',
                pitch: 1.3,
                yaw: 116.2,
                cssClass: 'moveScene',
            }
        }
    },

    leftArea: {
        title: 'Left Area',
        image: leftArea,
        pitch: 11.8,
        yaw: 176.4,
        hotSpots: {
            backScene: {
                type: 'custom',
                pitch: -1.0,
                yaw: 0.20,
                cssClass: 'moveScene',
                scene: 'area2'
            },
        }
    },
}

export default Scene;