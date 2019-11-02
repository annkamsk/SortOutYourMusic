import {BubbleSortStrategy} from "../strategies/BubbleSortStrategy";
import {SelectionSortStrategy} from "../strategies/SelectionSortStrategy";

export const Scales = new Map()
    .set('Major', [1, 2, 3, 5, 8, 11]);

export const Algos = [ { id: 0, name: 'Bubble' }, { id: 1, name: 'Selection'} ];

export const Notes = [0, 15, 10, 4, 20, 32, 5, 3, 8];

export const nameToStrategy = new Map()
    .set('Bubble', (array) => BubbleSortStrategy.execute(array))
    .set('Selection', (array) => SelectionSortStrategy.execute(array));