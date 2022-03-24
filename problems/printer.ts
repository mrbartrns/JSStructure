/**
 * 프린터
 * 일반적인 프린터는 인쇄 요청이 들어온 순서대로 인쇄한다.
 * 그러나 이 프린터는 중요도가 높은 문서를 먼저 인쇄해야 한다.
 */

interface QueueNode<T> {
  data: T;
  next: QueueNode<T> | null;
}

interface QueueInterface<T> {
  head: T | null;
  tail: T | null;
  size: number;
}

class Node<T> implements QueueNode<T> {
  data: T;
  next: QueueNode<T> | null;
  constructor(value: T) {
    this.data = value;
    this.next = null;
  }
}

class Queue<T> implements QueueInterface<QueueNode<T>> {
  head: QueueNode<T> | null;
  tail: QueueNode<T> | null;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value: T) {
    const newNode = new Node(value);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (!this.head) return null;
    const removed = this.head;
    this.head = this.head.next;
    this.size--;
    return removed.data;
  }

  peek() {
    if (!this.head) return null;
    return this.head.data;
  }
  getSize() {
    return this.size;
  }
}

/**
 * 먼저 priorities를 큐에 삽입할 때, 현재 인덱스와 같이 삽입한다.
 * 삽입 후 큐에서 하나 하나 뺀 후, 그거보다 중요도가 높은 문서가 있는지 찾는다.
 * -> sort 함수를 이용해서 찾으면 더 빠르다
 * 만약 있다면, 다시 큐의 맨 끝에 삽입한다.
 * 없다면, 인덱스를 확인하여 location과 일치하는지 확인후, 일치하면
 */
function solution(priorities: number[], location: number): number {
  let count = 0;
  const queue = new Queue<number[]>();
  priorities.forEach((priority, index) => {
    queue.enqueue([priority, index]);
  });
  priorities.sort((a, b) => b - a); // 내림차순 정렬
  while (queue.getSize() > 0) {
    const current = queue.dequeue();
    if (!current) break;
    if (current[0] < priorities[count]) {
      queue.enqueue(current);
    } else {
      count += 1;
      if (current[1] === location) {
        return count;
      }
    }
  }
  return count;
}

const priorities = [1, 1, 9, 1, 1, 1];
const location = 0;
console.log(solution(priorities, location));

export { Queue };
