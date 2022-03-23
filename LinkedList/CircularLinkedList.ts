interface CircularLinkedListNode<T> {
  data: T;
  link: CircularLinkedListNode<T> | null;
}

interface CircularLinkedListInterface<T> {
  tail: T | null;
  size: number;
}

class Node<T> implements CircularLinkedListNode<T> {
  data: T;
  link: CircularLinkedListNode<T> | null;
  constructor(value: T) {
    this.data = value;
    this.link = null;
  }
}

class CircularLinkedList<T>
  implements CircularLinkedListInterface<CircularLinkedListNode<T>>
{
  tail: CircularLinkedListNode<T> | null;
  size: number;
  constructor() {
    this.tail = null; // head는 첫번째 노드를 가리킨다.
    this.size = 0;
  }

  isEmpty() {
    return this.tail === null;
  }
  // TODO: find 함수를 구현할 수 있는지?

  enqueue(value: T) {
    const newNode = new Node(value);
    if (!this.tail) {
      newNode.link = newNode;
      this.tail = newNode;
    } else {
      newNode.link = this.tail.link; // front를 가리키도록 함
      this.tail.link = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue(): CircularLinkedListNode<T> | null {
    if (!this.tail) return null;
    const data = this.tail.link || null;
    if (this.tail.link === this.tail) {
      this.tail = null;
    } else {
      this.tail.link = this.tail.link?.link || null;
    }
    return data;
  }

  display() {
    if (!this.tail) return "[]";
    let node = this.tail.link || null;
    let string = "[";
    while (node && node !== this.tail) {
      string += String(node.data);
      string += ", ";
      node = node.link;
      console.log(node);
    }
    string += "]";
    return string;
  }
}

export { CircularLinkedList };
