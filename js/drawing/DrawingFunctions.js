export function sumArr(arr, index) {
    let safeIndex = index != null ? index : arr.length - 1;
    let sum = 0;
    for (let i = 0; i < safeIndex; i++) {
        sum += arr[i];
    }
    return Number(sum);
}