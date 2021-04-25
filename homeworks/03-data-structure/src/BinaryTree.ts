export interface TreeNode<T> {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
}

export enum TraverseType {
  Breadth,
  Inorder,
  Preorder,
  Postorder,
}

export interface IBinaryTree<T> {
  // constructor(tree: TreeNode<T>): void;
  setTree(tree: TreeNode<T>): this;
  traverse(traverseType: TraverseType): T[];
  getColumn(columnOrder: number): T[];
}

export class BinaryTree<T> implements IBinaryTree<T> {
  protected tree: TreeNode<T>;

  constructor(tree: TreeNode<T>) {
    this.tree = tree;
  }

  get value() {
    return this.tree.value || undefined;
  }

  get left() {
    return this.tree.left || undefined;
  }
  get right() {
    return this.tree.right || undefined;
  }

  setTree(tree: TreeNode<T>): this {
    this.tree = tree;
    return this;
  }

  getColumn(columnOrder: number): T[] {
    const columnOrderResult: T[] = [];
    function recursiveColumn(treeNode: TreeNode<T>, currentColumn: number) {
      if (currentColumn === columnOrder) {
        columnOrderResult.push(treeNode.value);
      }
      if (treeNode.left) {
        recursiveColumn(treeNode.left, currentColumn - 1);
      }
      if (treeNode.right) {
        recursiveColumn(treeNode.right, currentColumn + 1);
      }
    }
    recursiveColumn(this.tree, 0);
    return columnOrderResult;
  }

  traverse(traverseType: TraverseType): T[] {
    let traverseResult: T[] = [];
    switch (traverseType) {
      case TraverseType.Breadth:
        traverseResult = this.BFT(this.tree);
        break;
      case TraverseType.Inorder:
        traverseResult = this.DFTInorder(this.tree);
        break;
      case TraverseType.Preorder:
        traverseResult = this.DFTPreorder(this.tree);
        break;
      case TraverseType.Postorder:
        traverseResult = this.DFTPostorder(this.tree);
        break;
    }
    return traverseResult;
  }

  private BFT(treeNode: TreeNode<T>): T[] {
    const BFTResult: T[] = [];
    const queue: TreeNode<T>[] = [];
    let current: TreeNode<T> = this.tree;
    queue.push(treeNode);
    while (queue.length) {
      current = queue.shift() as TreeNode<T>;
      BFTResult.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    };
    return BFTResult;
  }

  private DFTInorder(treeNode: TreeNode<T>): T[] {
    const inorderResult: T[] = [];
    let traverse = (node: TreeNode<T>) => {
      if (node.left) traverse(node.left);
      inorderResult.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(treeNode);
    return inorderResult;
  }

  private DFTPreorder(treeNode: TreeNode<T>): T[] {
    const preorderResult: T[] = [];
    let traverse = (node: TreeNode<T>) => {
      preorderResult.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(treeNode);
    return preorderResult;
  }

  private DFTPostorder(treeNode: TreeNode<T>): T[] {
    const postorderResult: T[] = [];
    let traverse = (node: TreeNode<T>) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      postorderResult.push(node.value);
    };
    traverse(treeNode);
    return postorderResult;
  }
}