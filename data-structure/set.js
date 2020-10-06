class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set as an array
  values() {
    return Object.keys(this.dictionary);
  }

  // change code below this line
  
  // write your add method here
  add(val) {
    if(!this.has(val)) {
      this.dictionary[val] = val;
      return true;
    }
    else {
      return false;
    }
  }

  // write your remove method here
  remove(val) {
    if(this.has(val)) {
      delete this.dictionary[val];
      return true;
    }
    return false;
  }

  // write your size method here
  size() {
    return Object.keys(this.dictionary).length;
  }

  // change code above this line
}

const set = new Set();

set.add('hi');
console.log(set.has('hi'))
set.remove('he');
console.log(set.has('hi'))
set.remove('hi');
console.log(set.has('hi'))
