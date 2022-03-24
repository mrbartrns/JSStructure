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

    // 모든 요소가 제거되었다면, queue를 초기화한다.
    if (!this.head) {
      this.tail = null;
    }
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

  isEmpty() {
    return !this.head;
  }
}

/**
 * 가장 먼 노드를 찾기 위해 각 노드들을 방문하면서 다익스트라를 한다.
 * 한번 방문한 노드는 두 번 다시 방문하지 않는다.
 */
function solution(n: number, edge: Array<Array<number>>) {
  const graph = Array.from({ length: n + 1 }, () => new Array<number>());
  const visited = Array(n + 1).fill(-1);
  const queue = new Queue<number[]>(); // distance, node
  edge.forEach((v) => {
    const [start, end] = v;
    graph[start].push(end);
    graph[end].push(start);
  });
  visited[1] = 0;

  // bfs
  queue.enqueue([0, 1]);
  while (!queue.isEmpty()) {
    const tg = queue.dequeue();
    if (!tg) return;
    const [distance, node] = tg;
    for (const next of graph[node]) {
      if (visited[next] === -1) {
        visited[next] = distance + 1;
        queue.enqueue([distance + 1, next]);
      }
    }
  }

  // sort
  visited.sort((a, b) => b - a);
  const max = visited[0];
  return visited.filter((distance) => distance === max).length;
}

const n = 6;
const vertex = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];

console.log(solution(n, vertex));

export { solution };
