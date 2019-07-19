import '../index.scss';
import {BubbleSortStrategy} from "./BubbleSortStrategy";

const nameToStrategy = new Map().set('Bubble', (array) => BubbleSortStrategy.execute(array));

export class Algorithm {
    constructor(strategyName) {
        this.instructions = [];
        this.step = 0;
        this.strategy = strategyName;
    }

    isNext = () => {
        return this.step < this.instructions.length;
    };

    init = (array) => {
        this.instructions = nameToStrategy.get(this.strategy)(array);
        this.step = 0;
    };

    nextStep = (array) => {
        if (!this.isNext()) {
            return array;
        }
        const pair = this.instructions[this.step];
        [array[pair[0]], array[pair[1]]] = [array[pair[1]], array[pair[0]]];
        ++this.step;
        return array;
    };

}