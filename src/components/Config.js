import {BubbleSortStrategy} from "../strategies/BubbleSortStrategy";
import {SelectionSortStrategy} from "../strategies/SelectionSortStrategy";
import {QuickSortStrategy} from "../strategies/QuickSortStrategy";

export const Scales = new Map()
    .set('Major', [0, 2, 4, 5, 7, 9, 11])
    .set('Blues', [0, 3, 5, 6, 7, 10])
    .set('Harmonic major', [0, 2, 3, 5, 7, 8, 11])
    .set('Whole tone', [0, 2, 4, 6, 8, 10])
    .set('Octatonic', [0, 1, 3, 4, 7, 8, 10, 11]);

export const Algos = [ { id: 0, name: 'Bubble' }, { id: 1, name: 'Selection'}, {id: 2, name: 'QuickSort'} ];

export const Data = [0, 15, 10, 4, 20, 32, 5, 3, 8];

export const Notes = new Map()
    .set(0, 'C').set(1, 'C#').set(2, 'D').set(3, 'D#').set(4, 'E').set(5, 'F')
    .set(6, 'F#').set(7, 'G').set(8, 'G#').set(9, 'A').set(10, 'A#').set(11, 'B');

export const Octaves = [
    {id: 0, octave: 3}, {id: 1, octave: 4}, {id: 2, octave: 5},
];

export const nameToStrategy = new Map()
    .set('Bubble', (array) => BubbleSortStrategy.execute(array))
    .set('Selection', (array) => SelectionSortStrategy.execute(array))
    .set('QuickSort', (array) => QuickSortStrategy.execute(array));