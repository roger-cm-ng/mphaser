import Phaser from 'phaser';

export default class PhaserLogo extends Phaser.Physics.Arcade.Sprite {
  cursors = this.scene.input.keyboard.createCursorKeys();

  constructor(scene, x, y) {
    super(scene, x, y, 'phaser-logo')
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.setCollideWorldBounds(true)
      .setBounce(0.6)
      .setInteractive()
      .on('pointerdown', () => {
        this.setVelocityY(-400)
      })
  }

  preUpdate() {
    const { left, right } = this.cursors;

    if (left.isDown) {
      this.setVelocityX(-50);
    } else if (right.isDown) {
      this.setVelocityX(50);
    } else {
      this.setVelocityX(0);
    }
  }
}
