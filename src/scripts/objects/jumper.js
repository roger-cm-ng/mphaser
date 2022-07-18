import { autorun } from 'mobx';
import Phaser from 'phaser';

import { globalState } from './global-state';

class Jumper extends Phaser.Physics.Arcade.Sprite {
    constructor ({
        scene, index
    }) {
        super(scene, null, null, 'jumper');
        this.scene = scene;
        this.index = index;

        this.setOrigin(0.5, 0);
        this.setTint('#ff000');

        scene.physics.add.existing(this);
        scene.add.existing(this);

        scene.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers('jumper', { frames: [0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 1, 0] }),
            frameRate: 12,
            repeat: -1
        });

        this.move();

        autorun(() => {
            if (globalState.gameOver) {
                this.setTint('#ff000');
            }
        });
    }

    move () {
        const { level } = globalState;
        const {
            velX, velY
        } = globalState.difficulties[level];
        const {
            x, y, isLeftEntry, floorIndex
        } = globalState.manEntries[this.index];

        this.x = x;
        this.y = y;
        this.isLeftEntry = isLeftEntry;
        this.floorIndex = floorIndex;
        this.flipX = !isLeftEntry;
        this.setVisible(true);
        this.setGravityY(400);
        this.velX = velX;
        this.velY = velY;
        this.collision();
    }

    collision () {
        this.scene.physics.add.collider(this, this.scene.bridge, () => {
            this.scene.sound.play('bridge-bounce');
            globalState.score++;
            this.stop('jump');
            this.play('jump');
            this.setVelocityX(this.isLeftEntry ? this.velX : -this.velX);
            this.setVelocityY(this.velY);
        });
        this.scene.physics.add.collider(this, this.scene[`groundLeft${this.floorIndex}`], () => {
            this.stop('jump');
            this.play('jump');
            this.setVelocityX(this.isLeftEntry ? this.velX : -this.velX);
            this.setVelocityY(this.velY);
        });
        this.scene.physics.add.collider(this, this.scene[`groundRight${this.floorIndex}`], () => {
            this.stop('jump');
            this.play('jump');
            this.setVelocityX(this.isLeftEntry ? this.velX : -this.velX);
            this.setVelocityY(this.velY);
        });
        this.scene.physics.add.collider(this, this.scene[`groundBottom${this.floorIndex}`], () => {
            this.scene.physics.pause();
            globalState.gameOver = true;
            this.scene.intervals.remove();
        });
        this.scene.physics.add.collider(this, this.scene[`leftBoundary${this.floorIndex}`], () => {
            this.destroy();
        });
        this.scene.physics.add.collider(this, this.scene[`rightBoundary${this.floorIndex}`], () => {
            this.destroy();
        });
    }
}

export default Jumper;
