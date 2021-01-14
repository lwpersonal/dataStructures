// TAG 单向链表

export class ListNode<T> {
  public value: T;
  public next: ListNode<any> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList {
  public head: ListNode<any> | null;
  public length: number;
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
  append<T>(value: T) {
    if (this.head === null) {
      // 如果链表中一个元素都没有，直接插入
      this.head = new ListNode<T>(value);
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
  insert<T>(value: T, position: number) {
    if (
      typeof position === 'number' &&
      !Number.isNaN(position) &&
      position >= 0 &&
      position <= this.length
    ) {
      let current = this.head;
      let index = 0;
      const node = new ListNode<T>(value);
      if (position === 0) {
        node.next = current;
        this.head = node;
      } else {
        let previous = null;
        while (index < position) {
          previous = current;
          index++;
          // 找到最后一个 node
          current = current?.next || null;
        }
        previous && (previous.next = node);
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
  remove(position: number) {
    if (
      typeof position === 'number' &&
      !Number.isNaN(position) &&
      position >= 0 &&
      position < this.length
    ) {
      let current = this.head;
      if (position === 0) {
        this.head = current?.next || null;
      } else {
        let previous = null;
        let index = 0;
        while (index < position) {
          previous = current;
          current = current?.next || null;
          index++;
        }
        previous && (previous.next = current?.next || null);
      }
      this.length--;
      return current?.value || null;
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
  indexOf(value: any) {
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
  map(fn: <T>(val: ListNode<T>, index: number) => any) {
    if (typeof fn !== 'function') {
      throw TypeError(`the fn must be function, now type ${typeof fn}`);
    }
    let current = this.head;
    let index = 0;
    while (current) {
      typeof fn === 'function' &&
        fn<typeof current.value>(current.value, index);
      current = current.next;
      index++;
    }
  }

  clone() {
    return LinkedList.clone(this);
  }

  /**
   * 复制链表
   *
   * @static
   * @param {*} list
   * @param {*} [formatVal=(val) => val] 自由实现格式化函数，实现值的深度复制
   * @return {*}
   * @memberof LinkedList
   */
  static clone(list: LinkedList, formatVal: <T>(val: T) => any = (val) => val) {
    let head = list.head;
    const resList = new LinkedList();
    if (head === null) {
      return resList;
    }
    // 单独处理头部
    const formattedVal =
      typeof formatVal === 'function' ? formatVal<typeof head.value>(head.value) : head.value;
    resList.append(formattedVal);
    // 递归复制
    function fn(sourceNode: ListNode<any> | null, nowNode: ListNode<any> | null): any {
      if (!sourceNode || !nowNode) {
        return false;
      }
      const formattedVal =
        typeof formatVal === 'function'
          ? formatVal<typeof sourceNode.value>(sourceNode.value)
          : sourceNode.value;
      nowNode.next = new ListNode(formattedVal);
      resList.length++;
      return fn(sourceNode.next, nowNode.next);
    }
    fn(head.next, resList.head);
    return resList;
  }
}
