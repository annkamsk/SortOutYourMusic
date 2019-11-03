import {BubbleSortStrategy} from "../strategies/BubbleSortStrategy";
import {SelectionSortStrategy} from "../strategies/SelectionSortStrategy";

export const Scales = new Map()
    .set('Major', [0, 2, 4, 5, 7, 9, 11]);

export const Algos = [ { id: 0, name: 'Bubble' }, { id: 1, name: 'Selection'} ];

export const Data = [0, 15, 10, 4, 20, 32, 5, 3, 8];

export const Notes = [
    {id: 0, note: 'C'}, {id: 1, note: 'C#'}, {id: 2, note: 'D'}, {id: 3, note: 'D#'}, {id: 4, note: 'E'},
    {id: 5, note: 'F'}, {id: 6, note: 'F#'}, {id: 7, note: 'G'}, {id: 8, note: 'G#'}, {id: 9, note: 'A'},
    {id: 10, note: 'A#'}, {id: 11, note: 'B'},
];

export const Octaves = [
    {id: 0, octave: 3}, {id: 1, octave: 4}, {id: 2, octave: 5},
];

export const nameToStrategy = new Map()
    .set('Bubble', (array) => BubbleSortStrategy.execute(array))
    .set('Selection', (array) => SelectionSortStrategy.execute(array));