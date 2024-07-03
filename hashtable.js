/*class hashingg {
  constructor(size) {
    this.table = new Array(size);
  }
  //hashfunction
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length; // this is to make the index within the given size
  }

  //setting the value
  set(key, value) {
    let index = this.hash(key);

    //to prevent collision we are doing like this we are using | seperate chainning |
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          //if it is equal to the key then we just update the value of that key
          this.table[index][i][1] = value;
        }
      }
      this.table[index].push({ key, value });
    } else {
      this.table[index] = [];
      this.table[index].push({ key, value });
    }
  }
  get(key) {
    let index = this.hash(key);

    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i]["key"] === key) {
          return this.table[index][i];
        }
      }
    }
    return undefined;
  }

  ///remove

  remove(key) {
    let index = this.hash(key);

    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i]["key"] === key) {
          console.log(this.table[index]);
          this.table[index].splice(i, 1);
          return true;
        }
      }
    } else {
      return false;
    }
  }
}

let hashing = new hashingg(127);
hashing.set("shobhit", 22);
hashing.set("saanvi", 4);
hashing.set("suguna", 55);
hashing.set("sab", 35);
hashing.set("swetha", 30);

console.log(hashing.remove("shobhit"));
console.log(hashing.table);
*/

class hash {
  constructor(size) {
    this.table = new Array(size);
  }

  hashfun(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    let index = this.hashfun(key);
    console.log(index);

    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        console.log(this.table[index][i]["key"]);
        if (this.table[index][i]["key"] === key) {
          this.table[index][i]["value"] = value;
          return;
        }
      }
      this.table[index].push({ key, value });
    } else {
      this.table[index] = [];
      this.table[index].push({ key, value });
    }
  }

  get(key) {
    let index = this.hashfun(key);

    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i]["key"] === key) {
          console.log(this.table[index][i]);
        }
      }
    }
    return undefined;
  }

  remove(key) {
    let index = this.hashfun(key);

    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i]["key"] === key) {
          this.table[index].splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }
  showall() {
    console.log(this.table);
  }
}

const hashing = new hash(10);

hashing.set("apple", 10);
hashing.set("appricot", 20);
hashing.get("apple");
hashing.get("appricot");
hashing.remove("apple");
hashing.showall();
