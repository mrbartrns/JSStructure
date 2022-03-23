interface DoublyLinkedListNode<T> {
  data: T;
  prev: DoublyLinkedListNode<T> | null;
  next: DoublyLinkedListNode<T> | null;
}

interface DoublyLinkedListInterface<T> {
  head: T | null;
  tail: T | null;
  size: number;
}

class Node<T> implements DoublyLinkedListNode<T> {
  data: T;
  prev: DoublyLinkedListNode<T> | null;
  next: DoublyLinkedListNode<T> | null;
  constructor(data: T) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList<T>
  implements DoublyLinkedListInterface<DoublyLinkedListNode<T>>
{
  head: DoublyLinkedListNode<T> | null;
  tail: DoublyLinkedListNode<T> | null;
  size: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  find(value: T) {
    return this._find(value, this.head);
  }

  _find(
    value: T,
    node: DoublyLinkedListNode<T> | null
  ): DoublyLinkedListNode<T> | null {
    if (!node) return null;
    if (node.data === value) return node;
    return this._find(value, node.next);
  }

  append(value: T) {
    const newNode = new Node(value);

    // 비어있는 리스트일때
    if (!this.head) {
      this.head = newNode;

      // 항상 tail 신경쓰기
      this.tail = newNode;
    } else {
      if (!this.tail) return;

      // prev 신경쓰기
      newNode.prev = this.tail;
      this.tail.next = newNode;

      // 끝났으면 tail 치환하기
      this.tail = newNode;
    }
    this.size++;
  }

  insert(node: DoublyLinkedListNode<T> | null, value: T) {
    if (!node) return null;
    const newNode = new Node(value);
    const nextNode = node.next;
    newNode.prev = node;
    newNode.next = nextNode;
    node.next = newNode;
    if (nextNode) {
      newNode.next = nextNode;
      nextNode.prev = newNode;
    }
    this.size++;
  }

  remove(value: T) {
    const removed = this.find(value);
    if (!removed) return null;
    const prevNode = removed.prev;
    const nextNode = removed.next;

    if (prevNode) {
      prevNode.next = nextNode;
    } else {
      // prevNode가 없으면 head값이다.
      this.head = nextNode;
    }
    if (nextNode) {
      // nextNode가 없으면 tail값이다.
      nextNode.prev = prevNode;
    } else {
      this.tail = prevNode;
    }
    this.size--;
    return removed;
  }

  display() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }
}
export { DoublyLinkedList };
