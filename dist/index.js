"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sortable_1 = require("./sortable");
var sort = new sortable_1.Sort([20, 4, -3, -20]);
sort.sortArray();
console.log(sort.collection);
