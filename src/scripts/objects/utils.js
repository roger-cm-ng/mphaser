import { globalState } from './global-state';

export const gameReset = () => {
    globalState.gameOver = false;
    globalState.score = 0;
    globalState.level = 0;
    globalState.manEntryCounter = 0;
};
