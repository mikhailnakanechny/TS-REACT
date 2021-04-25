import { BinaryTree, TreeNode, IBinaryTree } from "./BinaryTree"

export interface IBinarySearchTree extends IBinaryTree<number> {
  has(value: number): boolean
}

export class BinarySearchTree extends BinaryTree<number> implements IBinarySearchTree {
  has(value: number): boolean {
    let isHasValue: boolean = false;
      function checkValue(node: TreeNode<number>) {
        // console.log(node.value);
        if (node.value === value) { return isHasValue = true; };
        if (node.left) { checkValue(node.left) };
        if (node.right) { checkValue(node.right) };
      }
    checkValue(this.tree);
    return isHasValue;
  }
}