import { TraverseType } from "./BinaryTree"
import { BinarySearchTree } from "./BinarySearchTree"

describe('BinarySearchTree tests', () => {
  const treeObject = {
    value: 10,
    left: { value: 8, left: { value: 6, left: { value: 4 } }, right: { value: 7 } },
    right: { value: 12, left: { value: 11 }, right: { value: 14, right: { value: 16 } } }
  };

  // I'm not sure that old tests, that I used for checking BinaryTree required here

  it('only root value', () => {
    const tree = new BinarySearchTree({ value: 10 });
    expect(tree.value).toEqual(10);
    expect(tree.left).toBeUndefined();
    expect(tree.right).toBeUndefined();
  });

  it('full tree node', () => {
    const tree = new BinarySearchTree({ value: 10, left: { value: 8 }, right: { value: 12 } });
    expect(tree.left).toEqual({ "value": 8 });
    expect(tree.right).toEqual({ "value": 12 });
  });

  it('setTree method', () => {
    const tree = new BinarySearchTree({ value: 0 });
    tree.setTree({ value: 10, left: { value: 8 }, right: { value: 12 } });
    expect(tree.value).toEqual(10);
    expect(tree.left).toEqual({ "value": 8 });
    expect(tree.right).toEqual({ "value": 12 });
  });

  describe("getColumn method", () => {
    const tree = new BinarySearchTree(treeObject);

    it("column 0", () => {
      expect(tree.getColumn(0)).toEqual([10, 7, 11])
    });

    it("column -1", () => {
      expect(tree.getColumn(-1)).toEqual([8])
    });

    it("column -2", () => {
      expect(tree.getColumn(-2)).toEqual([6])
    });

    it("column -3", () => {
      expect(tree.getColumn(-3)).toEqual([4])
    });

    it("column 1", () => {
      expect(tree.getColumn(1)).toEqual([12])
    });

    it("column 2", () => {
      expect(tree.getColumn(2)).toEqual([14])
    });

    it("column 3", () => {
      expect(tree.getColumn(3)).toEqual([16])
    });
  })

  describe("traverse method", () => {
    const tree = new BinarySearchTree(treeObject);

    it("Breadth-First traverse", () => {
      expect(tree.traverse(TraverseType.Breadth)).toEqual([10, 8, 12, 6, 7, 11, 14, 4, 16]);
    });

    it("Depth-First traverse, Inorder ", () => {
      expect(tree.traverse(TraverseType.Inorder)).toEqual([4, 6, 8, 7, 10, 11, 12, 14, 16]);
    });

    it("Depth-First traverse, Preorder ", () => {
      expect(tree.traverse(TraverseType.Preorder)).toEqual([10, 8, 6, 4, 7, 12, 11, 14, 16]);
    });

    it("Depth-First traverse, Postorder ", () => {
      expect(tree.traverse(TraverseType.Postorder)).toEqual([4, 6, 7, 8, 11, 16, 14, 12, 10]);
    });
  });

  // I'm not sure that old tests, that I used for checking BinaryTree required here

  describe("BinarySearchTree has method", () => {
    const tree = new BinarySearchTree(treeObject);
    
    it('Tree has node with value 10', () => {
      expect(tree.has(10)).toEqual(true);
    });

    it('Tree has node with value 11', () => {
      expect(tree.has(11)).toEqual(true);
    });

    it('Tree has node with value 4', () => {
      expect(tree.has(4)).toEqual(true);
    });

    it('Tree has node with value 16', () => {
      expect(tree.has(16)).toEqual(true);
    });

    it('Tree has not node with value 42', () => {
      expect(tree.has(42)).toEqual(false);
    });
  });
});
