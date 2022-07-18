import Phaser from 'phaser';

import { globalState } from './global-state';

class Ground extends Phaser.Physics.Arcade.Sprite {
    constructor ({
        scene, index, key
    }) {
        super(scene, null, null, 'ground');
        const {
            x, y, width, height
        } = globalState.static.paths[index][key];

        this.x = x,
        this.y = y,
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setImmovable(true)
            .setDisplaySize(
                (width ? width : 150),
                (height ? height : 50))
            .setOrigin(0);
    }
}

export default Ground;
