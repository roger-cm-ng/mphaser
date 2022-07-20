import Phaser from 'phaser';

import { globalState } from '../objects/global-state';
import { gameReset } from '../objects/utils';

export default class GameOverScene extends Phaser.Scene {
    constructor () {
        super({ key: 'GameOverScene' });
    }

    create () {
        this.cameras.main.setBackgroundColor('#d62929');
        this.add.image(150, 100, 'game-over');
        const restartButton = this.add.text(150, 300, 'RESTART', {
            font: '25px Montserrat',
            fill: '#000000',
            align: 'center'
        }).setOrigin(0.5, 0.5);

        restartButton.setInteractive();
        restartButton.on('pointerdown', () => {
            gameReset();
            this.scene.start('MainScene');
        });

        const homesceneButton = this.add.text(150, 350, 'HOME', {
            font: '25px Montserrat',
            fill: '#000000',
            align: 'center'
        }).setOrigin(0.5, 0.5);

        homesceneButton.setInteractive();
        homesceneButton.on('pointerdown', () => {
            console.log('pointerdown');
            gameReset();
            this.scene.start('HomeScene');
        });

        this.add.text(150, 250, `Score: ${globalState.score}`, {
            font: '25px Montserrat',
            fill: '#000000',
            align: 'center'
        }).setOrigin(0.5, 0.5);
    }
}
