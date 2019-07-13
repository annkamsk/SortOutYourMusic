import React from 'react';
import '../index.scss';

export class BubbleSortStrategy {

    static execute = (items) => {
        const array = [...items];
        const instructions = [];
        for (let i = 0; i < items.length; ++i) {
            for (let j = 0; j < items.length - 1; ++j) {
                if (array[j].sound > array[j + 1].sound) {
                    instructions.push([j, j + 1]);
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                }
            }
        }
        return instructions;
    };

}