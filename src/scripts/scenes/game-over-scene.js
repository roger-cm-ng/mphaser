import Phaser from 'phaser';

import { globalState } from '../objects/global-state';

export default class GameOverScene extends Phaser.Scene {
    constructor () {
        super({ key: 'GameOverScene' });
    }

    create () {
        this.cameras.main.setBackgroundColor('#d62929');
        this.add.image(150, 100, 'game-over');
        const restartButton = this.add.text(150, 300, 'RESTART', {
            font: '40px Arial',
            fill: '#000000',
            align: 'center'
        }).setOrigin(0.5, 0.5);

        restartButton.setInteractive();
        restartButton.on('pointerdown', () => {
            globalState.gameOver = false;
            this.scene.start('MainScene');
        });
        this.add.text(150, 250, `Score: ${globalState.score}`, {
            font: '40px Arial',
            fill: '#000000',
            align: 'center'
        }).setOrigin(0.5, 0.5);
    }
}
