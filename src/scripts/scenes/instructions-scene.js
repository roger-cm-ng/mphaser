import Phaser from 'phaser';

export default class InstructionsScene extends Phaser.Scene {
    constructor () {
        super({ key: 'InstructionsScene' });
    }

    create () {
        this.add.image(150, 200, 'instructions-bkgd');

        this.add.text(150, 50, 'Phone/Tablet: \nTap on the red paths to create a bridge.\nLet the frog jump across the bridge', {
            font: '13px Arial',
            fill: '#8b0000',
            align: 'center'
        }).setOrigin(0.5, 0.5);

        this.add.text(150, 87, 'before moving the bridge elsewhere.\nGet to 99 to win!', {
            font: '13px Arial',
            fill: '#8b0000',
            align: 'center'
        }).setOrigin(0.5, 0.5);

        this.add.text(150, 200, 'Laptop/Computer: \nPress 1, 2 or 3 to summon the bridges.', {
            font: '12px Arial',
            fill: '#00008b',
            align: 'center'
        }).setOrigin(0.5, 0.5);

        this.add.text(150, 228, '1 summons a bridge inbetween the first row of paths.\n2 summons it between the second, etc.', {
            font: '12px Arial',
            fill: '#00008b',
            align: 'center'
        }).setOrigin(0.5, 0.5);

        this.add.text(150, 250, 'Get to 99 to win!', {
            font: '12px Arial',
            fill: '#00008b',
            align: 'center'
        }).setOrigin(0.5, 0.5);

        this.add.rectangle(20, 20, 40, 20, '0x000000');

        const backButton = this.add.text(20, 20, 'Back', {
            font: '15px Arial',
            fill: '#ffffff',
            align: 'center'
        }).setOrigin(0.5, 0.5);

        backButton.setInteractive();
        backButton.on('pointerdown', () => {
            console.log('pointerdown');
            this.scene.start('HomeScene');
        });
    }
}
