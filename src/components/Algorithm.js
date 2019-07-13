import React from 'react';
import '../index.scss';
import {BubbleSortStrategy} from "./BubbleSortStrategy";

const nameToStrategy = new Map().set('Bubble', BubbleSortStrategy);

export class Algorithm {
    constructor(strategyName) {
        this.instructions = [];
        this.step = 0;
        this.strategy = nameToStrategy.get(strategyName);
    }

    isNext = () => {
        return this.step < this.instructions.length;
    };

    init = (array) => {
        this.instructions = this.strategy.execute(array);
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