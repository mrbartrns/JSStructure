import { SinglyLinkedList } from "./LinkedList/SinglyLinkedList";

function test() {
  const linkedList = new SinglyLinkedList();
  linkedList.append(1);
  console.log(linkedList.getSize());
  linkedList.append(2);
  console.log(linkedList.getSize());
  linkedList.append(3);
  console.log(linkedList.getSize());
  linkedList.append(4);
  linkedList.append(5);
  console.log(linkedList.getSize());
  linkedList.append(6);
  console.log(linkedList.find(0));
  linkedList.insert(linkedList.find(2), 5);
  console.log(linkedList.getSize());
  linkedList.remove(5);
  console.log(linkedList.getSize());
  linkedList.display();
}

test();
