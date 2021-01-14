import LinkedList from '../src/LinkedList'

const list1 = new LinkedList();
list1.insert(2, 0);
list1.insert(4, 0);
list1.insert(41, 1);

const newList = LinkedList.clone(list1);
const newList1 = list1.clone();
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
// console.log(list1, newList, newList1);
console.log(list1.toString(), newList.toString(), newList1.toString());
console.log(list1.length, newList.length, newList1.length);

