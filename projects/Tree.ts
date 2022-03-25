interface TreeNode<T> {
  data: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}

interface Tree<T> {
  root: T | null;
}

/**
 * Node 클래스는 데이터를 저장하고,
 * 다음에 들어오는 데이터가 현재 데이터보다 작으면 왼쪽에,
 * 그렇지 않으면 오른쪽에 저장한다.
 */
class Node<T> implements TreeNode<T> {
  data: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  constructor(value: T) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BST<T> implements Tree<TreeNode<T>> {
  root: TreeNode<T> | null;
  constructor() {
    this.root = null;
  }

  /**
   * BST에 값을 삽입하는 public 함수
   * 값은 재귀적으로 삽입하며 실제 삽입함수는 외부에서 사용하지 않도록 주의
   */
  insert(value: T) {
    this.root = this._insert(value, this.root);
  }

  /**
   * 재귀적으로 BST에 값을 삽입하는 내부 함수
   * 노드가 존재하지 않는다면 현재 위치에 노드를 삽입 후 반환한다.
   * 노드가 존재한다면, 현재 노드의 데이터와 비교하여 작다면 노드의 왼쪽에,
   * 크다면 노드의 오른쪽에 저장한다.
   */
  _insert(value: T, node: TreeNode<T> | null) {
    if (!node) return new Node(value);
    if (value < node.data) {
      node.left = this._insert(value, node.left);
    } else {
      node.right = this._insert(value, node.right);
    }
    return node;
  }

  /**
   * 트리의 전위 순회 함수
   * 전위 순회 알고리즘은 트리의 노드부터 차레대로 탐색하여 자식의 노드로 내려간다.
   */
  preorder(node: TreeNode<T> | null): string {
    if (!node) return "";
    let ret = "";
    ret += String(node.data);
    if (node.left) {
      ret += " ";
      ret += String(this.preorder(node.left));
    }
    if (node.right) {
      ret += " ";
      ret += String(this.preorder(node.right));
    }

    return ret;
  }

  /**
   * 트리의 중위 순회 함수
   * 중위 순회 알고리즘은 트리의 왼쪽 노드부터 차례대로 탐색한다.
   * 제대로 구현이 되었다면 오름차순으로 출력되야 한다.
   */
  inorder(node: TreeNode<T> | null): string {
    if (!node) return "";
    let ret = "";
    if (node.left) {
      ret += String(this.inorder(node.left));
      ret += " ";
    }
    ret += String(node.data);
    if (node.right) {
      ret += " ";
      ret += String(this.inorder(node.right));
    }
    return ret;
  }

  /**
   * 트리의 후위 순회 함수
   */
  postorder(node: TreeNode<T> | null) {
    if (!node) return "";
    let ret = "";
    if (node.left) {
      ret += String(this.postorder(node.left));
      ret += " ";
    }
    if (node.right) {
      ret += String(this.postorder(node.right));
      ret += " ";
    }
    ret += String(node.data);
    return ret;
  }
}

export { BST };
