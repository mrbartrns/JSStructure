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

  insert(value: T) {
    this.root = this._insert(value, this.root);
  }

  _insert(value: T, node: TreeNode<T> | null) {
    if (!node) return new Node(value);
    if (value < node.data) {
      node.left = this._insert(value, node.left);
    } else {
      node.right = this._insert(value, node.right);
    }
    return node;
  }

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

  // inorder 호출시 제대로 배치가 되었다면 오름차순으로 출력되야 한다.
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
