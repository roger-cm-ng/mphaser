import { globalState } from './global-state';
import Rectangle from './rectangle';

class Path extends Rectangle {
    constructor ({
        scene, index, key
    }) {
        super({
            scene,
            index,
            key
        });

        this.setInteractive()
            .on('pointerdown', () => {
                console.log(`bridge current index: ${index}`);
                globalState.bridge.currentIndex = index;
            });
    }
}

export default Path;
