import '../index.scss';

export class QuickSortStrategy {

    static execute = (items) => {
        const array = [...items];
        const instructions = [];

        const partition = (items, instructions, lo, hi) => {
            let pivot = items[hi];
            let i = lo;
            for (let j = lo; j < hi; ++j) {
                if (items[j] < pivot) {
                    instructions.push([i, j]);
                    [items[i], items[j]] = [items[j], items[i]];
                    ++i;
                }
            }
            [items[i], items[hi]] = [items[hi], items[i]];
            instructions.push([i, hi]);
            return i;
        };

        const quicksort = (items, instructions, lo, hi) => {
            if (lo < hi) {
                const i = partition(items, instructions, lo, hi);
                quicksort(items, instructions, lo, i - 1);
                quicksort(items, instructions, i + 1, hi);
            }

        };

        quicksort(array, instructions, 0, array.length - 1);
        console.log(array);
        return instructions;
    };

}