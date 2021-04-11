export function bubbleSort(arr: number[]) {
    const len: number = arr.length;
    let isSwapped: boolean = false;
    for (let i = 0; i < len; i++) {
        isSwapped = false;
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;                
            }
        }
        // IF no two elements were swapped by inner loop, then break 
        if (!isSwapped) {
            break;
        }
    }
    // Print the array
    console.log(arr)
    return arr;
}
