import { Queue } from "./Queue";

interface TrieNode {
  data: string;
  children: Map<string, TrieNode>;
}

interface TrieInterface {
  root: TrieNode;
}

class Node implements TrieNode {
  data: string;
  children: Map<string, TrieNode>;
  constructor(value = "") {
    this.data = value;
    this.children = new Map();
  }
}

class Trie implements TrieInterface {
  root: TrieNode;
  constructor() {
    this.root = new Node();
  }

  // string을 Trie에 삽입한다.
  insert(value: string) {
    let currentNode = this.root;
    for (const char of value) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(currentNode.data + char));
      }
      let next = currentNode.children.get(char);
      if (!next) return;
      currentNode = next;
    }
  }

  // string이 존재하는지 존재하지 않는지 확인한다.
  has(value: string) {
    let currentNode = this.root;
    for (const char of value) {
      if (!currentNode.children.has(char)) return false;
      let nextNode = currentNode.children.get(char);
      if (!nextNode) return false;
      currentNode = nextNode;
    }
    return true;
  }

  find(value: string): string[] {
    let currentNode = this.root;
    for (const char of value) {
      if (!currentNode.children.has(char)) return [];
      let nextNode = currentNode.children.get(char);
      if (!nextNode) return [];
      currentNode = nextNode;
    }
    return this._find(currentNode);
  }

  // 연관된 모든 검색어를 반환한다.
  _find(node: TrieNode) {
    const ret: string[] = [];
    const queue = new Queue<TrieNode>();
    queue.enqueue(node);
    ret.push(node.data);
    while (!queue.isEmpty()) {
      let node = queue.dequeue();
      if (!node) return ret;
      for (const [_, child] of node.children.entries()) {
        ret.push(child.data);
        queue.enqueue(child);
      }
    }
    return ret;
  }
}

export { Trie };
