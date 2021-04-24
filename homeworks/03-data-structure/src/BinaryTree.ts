export interface TreeNode<T> {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
}

export enum TraverseType {
  Inorder,
  Preorder,
  Postorder,
  Breadth
}

export interface IBinaryTree<T> {
  // constructor(tree: TreeNode<T>): void;
  setTree(tree: TreeNode<T>): this;
  // traverse(traverseType: TraverseType): T[];
  // getColumn(columnOrder: number): T[];
}

export class BinaryTree<T> implements IBinaryTree<T> {
  protected tree: TreeNode<T>;

  constructor(tree: TreeNode<T>) {
    this.tree = tree;
  }
  // constructor(tree: TreeNode<T>): void {
  //   throw new Error("Method not implemented.");
  // }

  get value() {
    return this.tree.value || undefined
  }

  get left() {
    return this.tree.left || undefined
  }
  get right() {
    return this.tree.right || undefined
  }

  // constructor(tree: TreeNode<T>): void {
  //   throw new Error("Method not implemented.");
  // }

  setTree(tree: TreeNode<T>): this {
    this.tree = tree;
    return this;
  }

  // getColumn(columnOrder: number): T[] {
  //   this.fillColumns(0);
  // }
}