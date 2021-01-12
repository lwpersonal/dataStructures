// TAG 单向链表

class ListNode {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  /**
   * 链表插入
   *
   * @param {*} value 插入的元素
   * @param {*} position 插入的位置索引
   * @memberof LinkedList
   */
  insert(value, position) {
    if (
      typeof position === "number" &&
      !Number.isNaN(position) &&
      position >= 0 &&
      position <= this.length
    ) {
      let current = this.head;
      let index = 0;
      const node = new ListNode(value);
      if (position === 0) {
        node.next = current;
        this.head = node;
      } else {
        let previous = null;
        while (index < position) {
          previous = current;
          index++;
          // 找到最后一个 node
          current = current.next;
        }
        previous.next = node;
        node.next = current;
      }
      this.length++;
      return true;
    } else {
      throw TypeError(`position type is Error. ${typeof position}.`);
    }
  }
  
  /**
   * 尾部插入元素
   *
   * @param {*} value
   * @memberof LinkedList
   */
  append(value) {
    if (this.head === null) {
      // 如果链表中一个元素都没有，直接插入
      this.head = new ListNode(value);
      this.length = 1;
    } else {
      let current = this.head;
      while (current.next) {
        // 找到最后一个 node
        current = current.next;
      }
      current.next = new ListNode(value);
      this.length++;
    }
  }
  
  find() {}
  remove() {}
  map() {}
  reverseMap() {}
}

const list1 = new LinkedList();
list1.insert(2, 0);
list1.insert(4, 0);
list1.insert(41, 1);
// list1.append(1);
// list1.append(4);
// list1.append(4);
// list1.append(41);

console.log(list1);

// export default LinkedList;
