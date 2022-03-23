// import { SinglyLinkedList } from "./LinkedList/SinglyLinkedList";
import { DoublyLinkedList } from "./LinkedList/DoublyLinkedList";

function test() {
  const linkedList = new DoublyLinkedList();
  // console.log("head:", linkedList.getHead());
  console.log("tail:", linkedList.getTail()?.data);
  linkedList.append(1);
  // console.log("head:", linkedList.getHead());
  // console.log("tail:", linkedList.getTail());
  console.log("tail:", linkedList.getTail()?.data);
  // console.log("size:", linkedList.getSize());
  linkedList.append(2);
  // console.log("head:", linkedList.getHead());
  // console.log("tail:", linkedList.getTail());
  console.log("tail:", linkedList.getTail()?.data);
  // console.log("size:", linkedList.getSize());
  linkedList.append(3);
  // console.log("head:", linkedList.getHead());
  // console.log("tail:", linkedList.getTail());
  console.log("tail:", linkedList.getTail()?.data);
  // console.log("size:", linkedList.getSize());
  linkedList.append(4);
  // console.log("head:", linkedList.getHead());
  // console.log("tail:", linkedList.getTail());
  console.log("tail:", linkedList.getTail()?.data);
  // console.log("size:", linkedList.getSize());
  linkedList.append(5);
  // console.log("head:", linkedList.getHead());
  // console.log("tail:", linkedList.getTail());
  console.log("tail:", linkedList.getTail()?.data);
  // console.log("size:", linkedList.getSize());
  linkedList.append(6);
  // console.log("head:", linkedList.getHead());
  // console.log("tail:", linkedList.getTail());
  console.log("tail:", linkedList.getTail()?.data);
  // console.log("here:", linkedList.find(6)?.prev?.data);
  // console.log("size:", linkedList.getSize());
  linkedList.insert(linkedList.find(2), 5);
  console.log("tail:", linkedList.getTail()?.data);
  // console.log("head:", linkedList.getHead());
  // console.log("tail:", linkedList.getTail());
  // console.log("size:", linkedList.getSize());
  linkedList.remove(5);
  // console.log("head:", linkedList.getHead());
  // console.log("tail:", linkedList.getTail());
  console.log("tail:", linkedList.getTail()?.data);
  // console.log("size:", linkedList.getSize());
  linkedList.remove(6);
  // console.log("head:", linkedList.getHead());
  // console.log("tail:", linkedList.getTail());
  console.log("tail:", linkedList.getTail()?.data);
  // console.log("size:", linkedList.getSize());
  linkedList.display();
}

test();
