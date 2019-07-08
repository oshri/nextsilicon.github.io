export function immutableSplice(arr, index, deleteCount) {
    var items = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        items[_i - 3] = arguments[_i];
    }
    return arr.slice(0, index).concat(items, arr.slice(index + deleteCount));
}
export function immutablePush(arr, newEntry) {
    return arr.concat([newEntry]);
}
export function immutablePop(arr) {
    return arr.slice(0, -1);
}
export function immutableShift(arr) {
    return arr.slice(1);
}
export function immutableUnshift(arr, newEntry) {
    return [newEntry].concat(arr);
}
export function immutableSort(arr, compareFunction) {
    return arr.slice().sort(compareFunction);
}
export function immutableReverse(arr) {
    return arr.slice().reverse();
}
export function immutableDelete(arr, index) {
    return arr.slice(0, index).concat(arr.slice(index + 1));
}
//# sourceMappingURL=index.js.map