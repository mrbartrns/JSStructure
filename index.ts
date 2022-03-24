import { Queue } from "./LinkedList/Queue";

function test() {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  queue.enqueue(5);
  console.log(queue.peek());
  console.log(queue.getSize());
}

test();
