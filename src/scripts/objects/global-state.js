import justRange from 'just-range';
import { makeAutoObservable } from 'mobx';
import shuffleArray from 'shuffle-array';

class GlobalState {
    constructor () {
        this.static = {
            gameWidth: 300,
            gameHeight: 400,
            paths: [
                {
                    manY: 50,
                    leftBoundary: {
                        x: -20,
                        y: 50,
                        width: 5,
                        height: 35
                    },
                    rightBoundary: {
                        x: 315,
                        y: 50,
                        width: 5,
                        height: 35
                    },
                    groundLeft: {
                        x: -25,
                        y: 85
                    },
                    groundRight: {
                        x: 175,
                        y: 85
                    },
                    groundBottom: {
                        x: 120,
                        y: 100,
                        width: 60,
                        height: 5
                    }
                },
                {
                    manY: 175,
                    leftBoundary: {
                        x: -20,
                        y: 175,
                        width: 5,
                        height: 35
                    },
                    rightBoundary: {
                        x: 315,
                        y: 175,
                        width: 5,
                        height: 35
                    },
                    groundLeft: {
                        x: -25,
                        y: 210
                    },
                    groundRight: {
                        x: 175,
                        y: 210
                    },
                    groundBottom: {
                        x: 120,
                        y: 225,
                        width: 60,
                        height: 5
                    }
                },
                {
                    manY: 300,
                    leftBoundary: {
                        x: -20,
                        y: 300,
                        width: 5,
                        height: 35
                    },
                    rightBoundary: {
                        x: 315,
                        y: 300,
                        width: 5,
                        height: 35
                    },
                    groundLeft: {
                        x: -25,
                        y: 335
                    },
                    groundRight: {
                        x: 175,
                        y: 335
                    },
                    groundBottom: {
                        x: 120,
                        y: 350,
                        width: 60,
                        height: 5
                    }
                }
            ]
        };

        this.bridge = {
            currentIndex: 0,
            width: 40,
            height: 50,
            x: 130,
            yPos: [
                {
                    keyStroke: 'keydown-ONE',
                    y: 85
                },
                {
                    keyStroke: 'keydown-TWO',
                    y: 210
                },
                {
                    keyStroke: 'keydown-THREE',
                    y: 335
                }
            ]
        };

        this.level = 0;

        this.difficulties = [
            {
                velX: 65,
                velY: -118,
                timeInterval: 1500
            },
            {
                velX: 100,
                velY: -150,
                timeInterval: 900
            },
            {
                velX: 200,
                velY: -150,
                timeInterval: 700
            }
        ];

        this.gameOver = false;

        this.manEntries = [];

        this.manEntryCounter = 0;

        this.score = 0;

        makeAutoObservable(this);
    }

    randomise (cycles) {
        for (let i = 0; i <= cycles; i++) {
            const randFloors = shuffleArray(justRange(this.static.paths.length));

            this.static.paths.forEach((path, index) => {
                const manEntry = {};

                if (Math.random() < 0.5) {
                    manEntry.isLeftEntry = false;
                    manEntry.x = 300;
                } else {
                    manEntry.isLeftEntry = true;
                    manEntry.x = 0;
                }
                manEntry.floorIndex = randFloors[index];
                manEntry.y = this.static.paths[randFloors[index]].manY;
                this.manEntries.push(manEntry);
            });
        }
    }
}

export const globalState = new GlobalState();
