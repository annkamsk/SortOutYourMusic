
export const getKey = (map, value) => {
    return [...map].find(([key, val]) => val === value)[0];
};