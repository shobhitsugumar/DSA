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
  //seperate chainning
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
hashing.showall();

//////////////////////////////////////////////////////////

//open addressing : here in open addressing we just put the value in the index when collision happens we just find the next free index and we just insert the value
class openaddressing {
  constructor() {
    this.table = new Array(10);
    this.size = this.table.length;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < this.table.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  insert(key, value) {
    let index = this.hash(key);

    while (this.table[index] !== undefined && this.table[index].key !== key) {
      index = (index + 1) % this.size;
    }
    this.table[index] = { key, value };
  }
  getvalue(key) {
    let index = this.hash(key);

    while (this.table[index] !== undefined) {
      if (this.table[index].key === key) {
        return this.table[index].value;
      }
      index = (index + 1) % this.size;
    }
    //if key not foung
    return undefined;
  }
  remove(key) {
    let index = this.hash(key);

    while (this.table[index] !== undefined) {
      if (this.table[index].key === key) {
        const deletedvalue = this.table[index].value; // just simply storing the deleted value
        this.table[index] = undefined;
        return deletedvalue; // return the deleted value so that in console we can so the the value is deleted
      }
      index = (index + 1) % this.size;
    }
    return undefined;
  }
}
//////////////////////////////////////////////
//Double hashing

//double hashing is simlar to open addressing hashing but here  the interval between two probes is computed using two hash function
//forumula for double hash : h2 => index=(h1(key)+i⋅h2(key))%size

class Doublehash {
  constructor(size) {
    this.table = new Array(size).fill(null);
    this.size = size;
  }
  //this function we use if the input is in string .if integer we use the normal h1 function

  StringtoHash(key) {
    let hash = 0;
    for (let i = 0; i < this.size; i++) {
      hash += key.charCodeAt(i);
    }
    return hash;
  }

  h1(key) {
    const numericvalue = this.StringtoHash(key);
    return numericvalue % this.size;
  }

  h2(key) {
    const numericvalue = this.StringtoHash(key);
    /*In a hash table, if the step size is 0, it would lead to an infinite loop when probing for the next slot, as you would always land at the same index.
     To ensure the step size is non-zero, we add 1 to the result of (numericKey % (this.size - 1)). */
    return 1 + (numericvalue % (this.size - 1)); // Ensure step size is not zero
  }

  insert(key) {
    let index = this.h1(key);
    //let step = this.h2(key);

    let i = 0;
    while (this.table[index] !== null && this.table[index] !== key) {
      i++;
      index = (this.h1(key) + i * this.h2(key)) % this.size; //formula  index=(h1(key)+i⋅h2(key))%size

      if (i > this.size) {
        //if i becomes greater than the size of the table then the table is full
        console.log("the table is full ");
        return;
      }
    }
    this.table[index] = key;
  }

  search(key) {
    let index = this.h1(key);
    let step = this.h2(key);
    let i = 0;

    while (this.table[index] !== null) {
      if (this.table[index] === key) return index; // Key found
      i++;
      index = (this.h1(key) + i * step) % this.size; // Next index
      if (i > this.size) return -1; // Key not found
    }
    return -1; // Key not found
  }
}
