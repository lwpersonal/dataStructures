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

  /**
   * 链表插入
   *
   * @param {*} value 插入的元素
   * @param {*} position 插入的位置索引
   * @memberof LinkedList
   */
  insert(value, position) {
    if (
      typeof position === 'number' &&
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
   * 移除元素
   *
   * @param {*} position
   * @return {*}
   * @memberof LinkedList
   */
  remove(position) {
    if (
      typeof position === 'number' &&
      !Number.isNaN(position) &&
      position >= 0 &&
      position < this.length
    ) {
      let current = this.head;
      if (position === 0) {
        this.head = current.next;
      } else {
        let previous = null;
        let index = 0;
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = current.next;
      }
      this.length--;
      return current.value;
    } else {
      return null;
    }
  }

  /**
   * 找到第一个 value 的 index
   *
   * @param {*} value
   * @memberof LinkedList
   */
  indexOf(value) {
    if (this.length === 0) {
      return -1;
    }
    let current = this.head;
    let index = -1;
    while (current) {
      index++;
      if (current.value === value) {
        return index;
      }
      current = current.next;
    }
    return -1;
  }

  /**
   * 转换为字符串 ,隔开
   *
   * @memberof LinkedList
   */
  toString() {
    let str = '';
    let current = this.head;
    while (current) {
      str += `${str ? ',' : ''}${current.value}`;
      current = current.next;
    }
    return str;
  }

  isEmpty() {
    return this.length === 0;
  }
  size() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  /**
   * 链表遍历
   *
   * @param {*} fn
   * @memberof LinkedList
   */
  map(fn) {
    if (typeof fn !== 'function') {
      throw TypeError(`the fn must be function, now type ${typeof fn}`);
    }
    let current = this.head;
    let index = 0;
    while (current) {
      typeof fn === 'function' && fn(current.value, index);
      current = current.next;
      index++;
    }
  }
}

const list1 = new LinkedList();
list1.insert(2, 0);
list1.insert(4, 0);
list1.insert(41, 1);
// console.log(list1.indexOf(40));
// console.log(list1.indexOf(4));
// console.log(list1.indexOf(2));
// list1.remove(2);
// list1.remove(1);
// list1.remove(0);
// list1.append(1);
// list1.append(4);
// list1.append(4);
// list1.append(41);
// list1.map((item, index) => {
//   console.log(item, index);
// });
console.log(list1.toString());

// export default LinkedList;
