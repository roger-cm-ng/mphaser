import Phaser from 'phaser';

import { gameReset } from '../objects/utils';

export default class WinScene extends Phaser.Scene {
    constructor () {
        super({ key: 'WinScene' });
    }

    create () {
        this.add.image(150, 100, 'you-win');

        this.add.text(150, 150, 'The frogs have been saved!!', {
            font: '17px Alternate Gothic',
            fill: '#6d9d72',
            align: 'center'
        }).setOrigin(0.5, 0.5);

        const homeButton = this.add.text(150, 200, 'Home', {
            font: '25px Alternate Gothic',
            fill: '#000000',
            align: 'center'
        }).setOrigin(0.5, 0.5);

        homeButton.setInteractive();
        homeButton.on('pointerdown', () => {
            console.log('pointerdown');
            gameReset();
            this.scene.start('HomeScene');
        });

        const replayButton = this.add.text(150, 250, 'Replay', {
            font: '25px Alternate Gothic',
            fill: '#000000',
            align: 'center'
        }).setOrigin(0.5, 0.5);

        replayButton.setInteractive();
        replayButton.on('pointerdown', () => {
            console.log('pointerdown');
            gameReset();
            this.scene.start('MainScene');
        });
    }
}
