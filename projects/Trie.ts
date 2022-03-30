import { Queue } from "./Queue";

interface TrieNode {
  data: string;
  children: Map<string, TrieNode>;
}

interface TrieInterface {
  root: TrieNode;
  suffix: string;
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
  suffix: string;
  constructor() {
    this.root = new Node();
    this.suffix = "$" as const;
  }

  // string을 Trie에 삽입한다.
  insert(value: string) {
    let currentNode = this.root;
    for (const char of value) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(
          char,
          new Node(String(currentNode.data).concat(char))
        );
      }
      const nextNode = currentNode.children.get(char);
      if (!nextNode) return;
      currentNode = nextNode;
    }
    currentNode.children.set(
      String(value).concat(this.suffix),
      new Node(String(value))
    );
  }

  // string이 존재하는지 존재하지 않는지 확인한다.
  has(value: string) {
    let currentNode = this.root;
    for (const char of value) {
      const nextNode = currentNode.children.get(char);
      if (!nextNode) return false;
      currentNode = nextNode;
    }
    return true;
  }

  // 연관 검색어를 반환하는 함수
  find(value: string): string[] {
    let currentNode = this.root;
    for (const char of value) {
      const nextNode = currentNode.children.get(char);
      if (!nextNode) return [];
      currentNode = nextNode;
    }
    return this._find(currentNode);
  }

  // 연관된 모든 검색어를 반환하는 내부 함수
  private _find(node: TrieNode) {
    const ret: string[] = [];
    const queue = new Queue<TrieNode>();
    queue.enqueue(node);
    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      if (node?.children.has(node.data.concat(this.suffix)))
        ret.push(node.data);
      if (!node) return ret;
      for (const [_, child] of node.children.entries()) {
        queue.enqueue(child);
      }
    }
    return ret;
  }
}

export { Trie };
