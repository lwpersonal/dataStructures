import LinkedList from '../src/LinkedList'

const list1 = new LinkedList();
list1.insert(2, 0);
list1.insert(4, 0);
list1.insert(41, 1);
console.log(list1.indexOf(40));
console.log(list1.indexOf(4));
// list1.remove(2);
// list1.remove(1);
// list1.remove(0);
// list1.append(1);
// list1.append(4);
// list1.append(4);
// list1.append(41);

console.log(list1);
