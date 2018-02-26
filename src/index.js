class Sorter {
  constructor() {
    this.storeElements = [];
  }
  add(element) {
    this.storeElements.push(element)
  }
  at(index) {
    return this.toArray()[index]
  }
  get length() {
    return this.toArray().length
  }
  toArray() {
      return this.storeElements
  }
  sort(indices) {
    let a = this.toArray();
    let newAr = [];
    a.map(function(element, index){
      if(indices.indexOf(index) != -1){
        newAr.push(element);
      }
    });
    a = a.map(function(element, index){
      if(indices.indexOf(index) != -1){
        let min = newAr.reduce((fe, se) => Math.min(fe, se));
        delete newAr[newAr.indexOf(min)];
        return min;
      } else { return element };
  });
  this.storeElements = a;
  return a;
}
setComparator(compareFunction) {
  const a = this.toArray();
  return a.sort(compareFunction);
}
}

module.exports = Sorter;