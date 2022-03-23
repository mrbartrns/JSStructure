import { SinglyLinkedList } from "./LinkedList/SinglyLinkedList";

function test() {
  const linkedList = new SinglyLinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.append(4);
  linkedList.append(5);
  linkedList.append(6);
  console.log(linkedList.find(0));
  linkedList.insert(linkedList.find(2), 5);
  linkedList.remove(5);
  linkedList.display();
}

test();
