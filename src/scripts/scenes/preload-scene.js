import Phaser from 'phaser';

export default class PreloadScene extends Phaser.Scene {
    constructor () {
        super({ key: 'PreloadScene' });
    }

    preload () {
        this.load.spritesheet('jumper', 'assets/img/frog-sprite.png', {
            frameWidth: 21,
            frameHeight: 43
        });
        this.load.image('ground', 'assets/img/ground.png');
        this.load.audio('bridge-bounce', 'assets/audio/bridge-bounce.mp3');
        this.load.audio('game-over', 'assets/audio/game-over.mp3');
        this.load.image('homeSceneBkgd', 'assets/img/home-screen-bkgd.jpg');
        this.load.image('game-over', 'assets/img/game-over.png');
        this.load.image('instructions-bkgd', 'assets/img/instructions-bkgd.jpg');
        this.load.image('you-win', 'assets/img/you-win.jpg');
    }

    create () {
        this.scene.start('MainScene');

    /**
     * This is how you would dynamically import the mainScene class (with code splitting),
     * add the mainScene to the Scene Manager
     * and start the scene.
     * The name of the chunk would be 'mainScene.chunk.js
     * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
     */
    // let someCondition = true
    // if (someCondition)
    //   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
    //     this.scene.add('MainScene', mainScene.default, true)
    //   })
    // else console.log('The mainScene class will not even be loaded by the browser')
    }
}
