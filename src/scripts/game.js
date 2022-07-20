/* global window */
import Phaser from 'phaser';

import { globalState } from './objects/global-state';
import GameOverScene from './scenes/game-over-scene';
import HomeScene from './scenes/home-scene';
import InstructionsScene from './scenes/instructions-scene';
import MainScene from './scenes/main-scene';
import PreloadScene from './scenes/preload-scene';
import WinScene from './scenes/win-scene';

const DEFAULT_WIDTH = globalState.static.gameWidth;
const DEFAULT_HEIGHT = globalState.static.gameHeight;
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
    scene: [PreloadScene, HomeScene, MainScene, GameOverScene, InstructionsScene, WinScene],
    physics: {
        default: 'arcade',
        arcade: { debug: false }
    },
    pixelArt: true
};

window.addEventListener('load', () => {
    new Phaser.Game(config);
});
