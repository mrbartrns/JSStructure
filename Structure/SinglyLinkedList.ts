interface SinglyLinkedListNode<T> {
  data: T;
  next: SinglyLinkedListNode<T> | null;
}

interface SinglyLinkedListInterface<T> {
  head: T | null;
  tail: T | null;
  size: number;
}

class Node<T> implements SinglyLinkedListNode<T> {
  data: T;
  next: SinglyLinkedListNode<T> | null;
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList<T>
  implements SinglyLinkedListInterface<SinglyLinkedListNode<T>>
{
  head: SinglyLinkedListNode<T> | null;
  tail: SinglyLinkedListNode<T> | null;
  size: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  find(data: T) {
    return this._find(data, this.head);
  }

  _find(
    data: T,
    node: SinglyLinkedListNode<T> | null
  ): null | SinglyLinkedListNode<T> {
    if (!node) return null;
    if (data === node.data) return node;
    return this._find(data, node.next);
  }
  append(value: T) {
    const node = new Node(value);
    // 가장 처음 값이라면 head도 바꿔줘야 한다.
    if (!this.head) this.head = node;
    // 가장 마지막 노드의 next에 node를 참조하도록 한다.
    if (this.tail) this.tail.next = node;
    // 현재 꼬리를 node로 바꾼다.
    this.tail = node;
    this.size++;
  }
  insert(node: SinglyLinkedListNode<T> | null, value: T) {
    if (!node) return;
    // node의 next를 현재 value의 노드로 바꾼다.
    const newNode = new Node(value);
    // 새 노드의 next를 기존 node의 next로 치환한다.
    newNode.next = node.next;
    // node.next를 새 노드로 참조하도록 한다.
    node.next = newNode;
    this.size++;
  }
  remove(value: T) {
    let prevNode = this.head;
    if (!prevNode) return null;
    while (prevNode.next && prevNode.next.data !== value) {
      prevNode = prevNode.next;
    }
    const node = prevNode.next;
    // tail에 대한 처리가 필요하다
    if (node && node.next) {
      prevNode.next = node.next;
      this.size--;
    } else if (node) {
      prevNode.next = null;
      this.size--;
      this.tail = prevNode;
    }
    return node;
  }

  display() {
    let node = this.head;
    const ret: T[] = [];
    while (node) {
      ret.push(node.data);
      node = node.next;
    }
    console.log(ret);
    return ret;
  }

  getSize() {
    return this.size;
  }
}
export { SinglyLinkedList };
