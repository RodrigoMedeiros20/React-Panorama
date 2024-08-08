import area1 from '../images/area1.jpg';
import center from '../images/area2.jpg';
import leftArea1 from '../images/leftArea1.jpg';
import leftArea2 from '../images/leftArea2.jpg';
import leftArea3 from '../images/leftArea3.jpg';
import frontArea1 from '../images/frontArea1.jpg';
import hallArea1 from '../images/hallArea1.jpg';

const Scene = {

    area1: {
        title: 'Area 1',
        image: area1,
        pitch: 25.5,
        yaw: 166.1,
        hotSpots: {
            nextScene: {
                type: 'custom',
                pitch: 4.17,
                yaw: 133.7,
                cssClass: 'moveScene',
                scene: 'center'
            }
        }
    },

    center: {
        title: 'Center',
        image: center,
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

            leftScene1: {
                type: 'custom',
                pitch: 5.0,
                yaw: -15.3,
                cssClass: 'moveScene',
                scene: 'leftArea1'
            },

            leftScene2: {
                type: 'custom',
                pitch: 1.5,
                yaw: 30.5,
                cssClass: 'moveScene',
                scene: 'leftArea2'
            }
        }
    },

    leftArea1: {
        title: 'Left Area 1',
        image: leftArea1,
        pitch: 11.8,
        yaw: 176.4,
        hotSpots: {
            backScene: {
                type: 'custom',
                pitch: -1.0,
                yaw: 0.20,
                cssClass: 'moveScene',
                scene: 'center'
            },

            leftScene: {
                type: 'custom',
                pitch: -1.0,
                yaw: 88.7,
                cssClass: 'moveScene',
                scene: 'leftArea3',
            },

            rightScene: {
                type: 'custom',
                pitch: 0.3,
                yaw: -96.2,
                cssClass: 'moveScene',
                scene: 'leftArea2',
            },
        }
    },

    leftArea2: {
        title: 'Left Area 2',
        image: leftArea2,
        pitch: 5.7,
        yaw: 50.7,
        hotSpots: {
            leftScene: {
                type: 'custom',
                pitch: 3.4,
                yaw: -28.4,
                cssClass: 'moveScene',
                scene: 'leftArea1',
            },

            backScene: {
                type: 'custom',
                pitch: 2.8,
                yaw: -115.7,
                cssClass: 'moveScene',
                scene: 'center'
            }
        },
    },

    leftArea3: {
        title: 'Left Area 3',
        image: leftArea3,
        pitch: 3.2,
        yaw: -101.9,
        hotSpots: {
            backScene: {
                type: 'custom',
                pitch: 0.3,
                yaw: 19.6,
                cssClass: 'moveScene',
                scene: 'leftArea1',
            },

            frontScene: {
                type: 'custom',
                pitch: 0.5,
                yaw: -62.2,
                cssClass: 'moveScene',
                scene: 'frontArea1',
            }
        },

    },

    frontArea1: {
        title: 'Front Area 1',
        image: frontArea1,
        pitch: -1.7,
        yaw: 74.6,
        hotSpots: {
            backScene: {
                type: 'custom',
                pitch: -1.4,
                yaw: 99.2,
                cssClass: 'moveScene',
                scene: 'leftArea3',
            }
        }
    }
}

export default Scene;