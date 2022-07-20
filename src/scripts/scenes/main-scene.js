// import { autorun } from 'mobx';
import { autorun } from 'mobx';
import Phaser from 'phaser';

import Bridge from '../objects/bridge';
import { globalState } from '../objects/global-state';
import Jumper from '../objects/jumper';
import Path from '../objects/path';
import Rectangle from '../objects/rectangle';

export default class MainScene extends Phaser.Scene {
    constructor () {
        super({ key: 'MainScene' });
    }

    create () {
        this.scoreLabel = this.add.text(10, 10, 'Score: 0', {
            font: '20px Arial',
            fill: '#ff0000'
        });

        globalState.static.paths.forEach((path, index) => {
            this[`leftBoundary${index}`] = new Rectangle({
                scene: this,
                index,
                key: 'leftBoundary'
            });
            this[`rightBoundary${index}`] = new Rectangle({
                scene: this,
                index,
                key: 'rightBoundary'
            });
            this[`groundLeft${index}`] = new Path({
                scene: this,
                index,
                key: 'groundLeft'
            });
            this[`groundRight${index}`] = new Path({
                scene: this,
                index,
                key: 'groundRight'
            });
            this[`groundBottom${index}`] = new Rectangle({
                scene: this,
                index,
                key: 'groundBottom'
            });
        });
        this.bridge = new Bridge({ scene: this });
        globalState.randomise(33);
        this.batchLevel();
        autorun(() => {
            this.scoreLabel.text = `Score: ${globalState.score}`;
        });
        autorun(() => {
            if (globalState.gameOver) {
                this.scene.start('GameOverScene');
            }
        });
    }

    batchLevel () {
        this.intervals = this.time.addEvent({
            delay: globalState.difficulties[globalState.level].timeInterval,
            callback: () => {
                new Jumper({
                    scene: this,
                    index: globalState.manEntryCounter
                });
                globalState.manEntryCounter++;
                if (globalState.manEntryCounter % 33 === 0) {
                    globalState.level++;
                    this.intervals.remove();
                    this.time.delayedCall(1500, () => {
                        this.batchLevel();
                    });
                }
            },
            repeat: globalState.manEntries.length
        });
    }
}
