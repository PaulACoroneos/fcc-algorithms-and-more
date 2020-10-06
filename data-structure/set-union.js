class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // this method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // this method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // this method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = element;
      this.length++;
      return true;
    }
    return false;
  }
  // this method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // this method will return the size of the set
  size() {
    return this.length;
  }
  // change code below this line
  union(setb) {
    const union = new Set();
    setb.values().forEach(val => union.add(val));
    this.values().forEach(val => union.add(val));
    return union;
  }

  // change code above this line
}

const set = new Set();
const set2 = new Set();

set.add('a');
set.add('b');
set.add('c');
set2.add('a');
set2.add('b');
set2.add('c');
set2.add('d');

console.log(set.union(set2));