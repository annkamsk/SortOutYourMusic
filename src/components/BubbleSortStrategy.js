import React from 'react';
import '../index.scss';

export class BubbleSortStrategy {

    execute = (items) => {
        const array = items;
        const instructions = [];
        for (let i = 0; i < array.length; ++i) {
            for (let j = 0; j < array.length - 1; ++j) {
                if (array[j] > array[j + 1]) {
                    instructions.push([j, j + 1]);
                    this.swap(j, j + 1, array);
                }
            }
        }
        return instructions;
    };

    swap = (i, j, array) => {
        const tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    };
}