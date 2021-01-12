
class Node<T> {
  public element: T;
  public next: any;
  constructor(value: T) {
    this.element = value;
    this.next = undefined;
  }
}

class LinkedList<T> {
  insert() {}
  find() {}
  remove() {}
  map() {}
  reverseMap() {}
}

export default LinkedList;
