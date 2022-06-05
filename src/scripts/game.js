/* global window */
import Phaser from 'phaser';

import MainScene from './scenes/main-scene';
import PreloadScene from './scenes/preload-scene';

const DEFAULT_WIDTH = 300;
const DEFAULT_HEIGHT = 400;
const config = {
    type: Phaser.AUTO,
    backgroundColor: '#ffffff',
    scale: {
        parent: 'phaser-game',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
    },
    scene: [PreloadScene, MainScene],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 400 }
        }
    }
};

window.addEventListener('load', () => {
    new Phaser.Game(config);
});
