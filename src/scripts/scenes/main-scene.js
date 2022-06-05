import Phaser from 'phaser';

import PhaserLogo from '../objects/phaser-logo';

export default class MainScene extends Phaser.Scene {
    constructor () {
        super({ key: 'MainScene' });
    }

    create () {
        new PhaserLogo(this, this.cameras.main.width / 2, 0);
    }
}
