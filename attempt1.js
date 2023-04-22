//modify array.prototype.last to return the last element in the list.
//if no element exist, should return -1

export function lastElement(arr) {
    return arr.last()
}

Array.prototype.last = function () {
    if (this.length < 1) {
        return [-1]
    } else {
        return this.slice(-1)
    }
}
