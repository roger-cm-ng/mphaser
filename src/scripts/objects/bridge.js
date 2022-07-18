import { autorun } from 'mobx';
import Phaser from 'phaser';

import { globalState } from './global-state';

class Bridge extends Phaser.Physics.Arcade.Sprite {
    constructor ({ scene }) {
        super(scene, null, null, 'ground');
        const {
            x, yPos, width, height
        } = globalState.bridge;

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.x = x;
        this.y = yPos[0].y;
        this.yPos = yPos;
        this.setImmovable(true)
            .setDisplaySize(width, height)
            .setOrigin(0)
            .setTint('#ff0000')
            .setInteractive();

        autorun(() => {
            console.log(`from path, bridge index: ${globalState.bridge.currentIndex}`);
            this.y = globalState.bridge.yPos[globalState.bridge.currentIndex].y;
        });
    }

    preUpdate () {
        this.scene.input.keyboard.on(this.yPos[0].keyStroke, () => {
            this.y = this.yPos[0].y;
        });

        this.scene.input.keyboard.on(this.yPos[1].keyStroke, () => {
            this.y = this.yPos[1].y;
        });

        this.scene.input.keyboard.on(this.yPos[2].keyStroke, () => {
            this.y = this.yPos[2].y;
        });
    }
}

export default Bridge;
