import Phaser from 'phaser';

export default class HomeScene extends Phaser.Scene {
    constructor () {
        super({ key: 'HomeScene' });
    }

    create () {
        this.add.image(150, 200, 'homeSceneBkgd');
        this.add.rectangle(150, 45, 175, 2, '0xffa500');
        this.add.rectangle(150, 89, 100, 2, '0xffa500');
        const helloButton = this.add.text(150, 200, 'PLAY', {
            font: '40px Arial',
            fill: '#6d9d72',
            align: 'center'
        }).setOrigin(0.5, 0.5);

        helloButton.setInteractive();
        helloButton.on('pointerdown', () => {
            console.log('pointerdown');
            this.scene.start('MainScene');
        });

        const instructbutton = this.add.text(150, 250, 'Instructions', {
            font: '40px Arial',
            fill: '#6d9d72',
            align: 'center'
        }).setOrigin(0.5, 0.5);

        instructbutton.setInteractive();
        instructbutton.on('pointerdown', () => {
            console.log('pointerdown');
            this.scene.start('InstructionsScene');
        });

        this.add.text(150, 50, 'Save The\nFrogs', {
            font: '40px Arial',
            fill: '#6d9d72',
            align: 'center'
        }).setOrigin(0.5, 0.5);
    }
}
