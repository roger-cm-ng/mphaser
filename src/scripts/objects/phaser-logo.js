import Phaser from 'phaser';

class PhaserLogo extends Phaser.Physics.Arcade.Sprite {
    constructor (scene, x, y) {
        super(scene, x, y, 'phaser-logo');
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true)
            .setBounce(0.6)
            .setInteractive()
            .on('pointerdown', () => {
                this.setVelocityY(-400);
            });
        this.cursors = this.scene.input.keyboard.createCursorKeys();
    }

    preUpdate () {
        const {
            left, right, up, down
        } = this.cursors;

        if (left.isDown) {
            this.setVelocityX(-50);
        } else if (right.isDown) {
            this.setVelocityX(50);
        } else if (up.isDown) {
            this.setVelocityY(-50);
        } else if (down.isDown) {
            this.setVelocityY(50);
        } else {
            this.setVelocityX(0);
        }
    }
}

export default PhaserLogo;
