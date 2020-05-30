"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sort = /** @class */ (function () {
    function Sort(collection) {
        this.collection = collection;
    }
    Sort.prototype.sortArray = function () {
        var length = this.collection.length;
        console.log(this.collection);
        for (var j = 0; j < length - 1; j++) {
            for (var i = 0; i < length - j - 1; i++) {
                var left = this.collection[i];
                if (this.collection[i] > this.collection[i + 1]) {
                    this.collection[i] = this.collection[i + 1];
                    this.collection[i + 1] = left;
                }
            }
        }
    };
    return Sort;
}());
exports.Sort = Sort;
