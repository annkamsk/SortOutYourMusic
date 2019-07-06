import React from 'react';
import '../index.scss';
import {BubbleSortStrategy} from "./BubbleSortStrategy";

const nameToStrategy = new Map.set('Bubble', BubbleSortStrategy);

export class Algorithm {
    constructor(strategyName) {
        this.instructions = [];
        this.step = 0;
        this.isFinished = false;
        this.strategy = nameToStrategy.get(strategyName);
    }

    isSortingFinished = () => {
        return this.isFinished;
    };

    init = (array) => {
        this.isFinished = false;
        this.instructions = this.strategy.execute(array);
        this.step = 0;
    };

    nextStep = (array) => {
        const newArray = array;
        if (this.instructions.length === this.step) {
            return array;
        }
        const pair = this.instructions[this.step];
        this.swap(pair[0], pair[1], newArray);
        ++this.step;
        return newArray;
    };

    swap = (i, j, array) => {
        const tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    };
}