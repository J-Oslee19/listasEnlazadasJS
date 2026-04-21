const DoublyNode = require("./DoublyNode");

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  addFirst(value) {
    const newNode = new DoublyNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
    this._size++;
  }

  addLast(value) {
    const newNode = new DoublyNode(value);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this._size++;
  }

  removeFirst() {
    if (this.head === null) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    } else {
      this.head.previous = null;
    }
    this._size--;
    return value;
  }

  removeLast() {
    if (this.tail === null) {
      return null;
    }
    const value = this.tail.value;
    this.tail = this.tail.previous;
    if (this.tail === null) {
      this.head = null;
    } else {
      this.tail.next = null;
    }
    this._size--;
    return value;
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (this._isSameValue(current.value, value)) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  //countOccurrences(value) {
    //throw new Error(
     // "TODO RETO: Implementar countOccurrences(value) en DoublyLinkedList."
    //);
  //}
  countOccurrences(value) {
  let count = 0;
  let current = this.head;

  while (current !== null) {
    if (this._isSameValue(current.value, value)) {
      count++;
    }
    current = current.next;
  }

  return count;
}

  //clean() {
   // throw new Error("TODO RETO: Implementar clean() en DoublyLinkedList.");
  //}
  clean() {
  let current = this.head;

  while (current !== null) {
    let next = current.next;
    current.next = null;
    current.previous = null;
    current = next;
  }

  this.head = null;
  this.tail = null;
  this._size = 0;
}

  //reverseInPlace() {
   // throw new Error(
     // "TODO RETO: Implementar reverseInPlace() en DoublyLinkedList."
    //);
 // }
  reverseInPlace() {
  let current = this.head;
  let temp = null;

  this.tail = this.head;

  while (current !== null) {
    temp = current.previous;
    current.previous = current.next;
    current.next = temp;
    current = current.previous;
  }

  if (temp !== null) {
    this.head = temp.previous;
  }
}

  removeDuplicates() {
    throw new Error(
      "TODO RETO: Implementar removeDuplicates() en DoublyLinkedList."
    );
  }

  size() {
    return this._size;
  }

  isEmpty() {
    return this._size === 0;
  }

  toForwardString() {
    let out = "[";
    let current = this.head;
    while (current !== null) {
      out += String(current.value);
      if (current.next !== null) {
        out += ", ";
      }
      current = current.next;
    }
    out += "]";
    return out;
  }

  toBackwardString() {
    let out = "[";
    let current = this.tail;
    while (current !== null) {
      out += String(current.value);
      if (current.previous !== null) {
        out += ", ";
      }
      current = current.previous;
    }
    out += "]";
    return out;
  }

  _isSameValue(left, right) {
    return left === right;
  }
}

module.exports = DoublyLinkedList;
