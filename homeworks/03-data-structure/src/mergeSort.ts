export type CompareFunction<T> = (a: T, b: T) => number;
// type MergeSort<T> = (array: T[], compareFunction: CompareFunction<T>) => T[];
// based on article https://stackabuse.com/merge-sort-in-javascript/

export function merge<T>(left: T[], right: T[] , compareFunction: CompareFunction<T>) {
    let arr: T[] = [];
    while (left.length && right.length) {
        if (compareFunction(left[0], right[0]) < 0) {
            arr.push(left.shift() as T);
        } else {
            arr.push(right.shift() as T);
        }
    }
    return [...arr, ...left, ...right];
}

export default function mergeSort<T>(array: T[], compareFunction: CompareFunction<T>): T[] {
    const half = Math.floor(array.length / 2);
    if (array.length < 2) {
        return array;
    }
    const left = array.splice(0, half);
    return merge(mergeSort(left, compareFunction), mergeSort(array, compareFunction), compareFunction);
}