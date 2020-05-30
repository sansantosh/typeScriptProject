export class Sort {
  constructor(public collection: number[]) {}

  sortArray() {
    let { length } = this.collection;
    console.log(this.collection);

    for (let j = 0; j < length - 1; j++) {
      for (let i = 0; i < length - j - 1; i++) {
        let left = this.collection[i];
        if (this.collection[i] > this.collection[i + 1]) {
          this.collection[i] = this.collection[i + 1];
          this.collection[i + 1] = left;
        }
      }
    }
  }
}
