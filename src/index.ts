import { Sort } from './sortable';

const sort = new Sort([20, 4, -3, -20]);

sort.sortArray();
console.log(sort.collection);
