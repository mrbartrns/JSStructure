import { CircularLinkedList } from "./LinkedList/CircularLinkedList";
function test() {
  const linkedList = new CircularLinkedList<number>();
  // console.log(linkedList.tail);
  linkedList.enqueue(1);
  // console.log(linkedList.tail);
  linkedList.enqueue(2);
  // console.log(linkedList.tail);
  linkedList.enqueue(3);
  // console.log(linkedList.tail);
  linkedList.enqueue(4);
  // console.log(linkedList.tail);
  linkedList.enqueue(5);
  // console.log(linkedList.tail);
  // console.log("size", linkedList.size);
  console.log(linkedList.dequeue()?.data || null);
  console.log(linkedList.dequeue()?.data || null);
  console.log(linkedList.dequeue()?.data || null);
  console.log(linkedList.dequeue()?.data || null);
  console.log(linkedList.dequeue()?.data || null);
  console.log(linkedList.dequeue()?.data || null);
  console.log(linkedList.dequeue()?.data || null);
}

test();
