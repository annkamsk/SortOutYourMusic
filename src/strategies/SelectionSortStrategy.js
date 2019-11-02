import '../index.scss';

export class SelectionSortStrategy {

    static execute = (items) => {
        const array = [...items];
        const instructions = [];
        for (let i = 1; i < items.length; ++i) {
            const elem = array[i];
            for (let j = i - 1; j >= 0 && array[j] > elem; --j) {
                instructions.push([j, j + 1]);
                [array[j], array[j + 1]] = [array[j + 1], array[j]];

            }
        }
        return instructions;
    };

}