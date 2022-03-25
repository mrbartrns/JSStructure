import { BST } from "./projects/Tree";

// BST가 잘 작동하는지 검증하는 테스트코드
function test() {
  const dummies = [
    [7, 6, 9, 1, 5, 10, 3, 4],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    [],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];
  dummies.forEach((dummyData) => {
    const tree = new BST<number>();
    dummyData.forEach((value) => {
      tree.insert(value);
    });
    console.log("preorder: ");
    console.log(tree.preorder(tree.root));
    console.log("inorder: ");
    console.log(tree.inorder(tree.root));
    console.log("postorder: ");
    console.log(tree.postorder(tree.root));
  });
}

test();

export { test };
