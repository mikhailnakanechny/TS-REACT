import mergeSort, { CompareFunction, merge } from "./mergeSort"

describe('mergeSort tests', () => {
  const testArray0 = [0];
  const testArray1 = [77, 88, 4, 3, 2, 1, 0];
  const testArray2 = [55, 44, 6];
  const testArray3 = [53, 43, 5];
  const compareFunction1: CompareFunction<number> = (a, b) => a - b;

  it('mergeSort function', () => {
    expect(mergeSort(testArray1, compareFunction1)).toEqual([0, 1, 2, 3, 4, 77, 88]);
    expect(mergeSort(testArray0, compareFunction1)).toEqual([0]);
  });

  it('merge function', () => {
    expect(merge(testArray2, testArray3, compareFunction1)).toEqual([53, 43, 5, 55, 44, 6]);
    expect(merge(testArray0, testArray2, compareFunction1)).toEqual([0, 55, 44, 6]);
  });
});

//TODO: add tests for strings value 