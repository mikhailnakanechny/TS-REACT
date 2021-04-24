import { BinaryTree } from "./BinaryTree"

describe('BinaryTree tests', () => {
  it('only root value', () => {
    const tree = new BinaryTree({ value: 10});
    expect(tree.value).toEqual(10);
    expect(tree.left).toBeUndefined();
    expect(tree.right).toBeUndefined();
  });

  it('full ree node', () => {
    const tree = new BinaryTree({ value: 10, left: { value: 8 }, right: { value: 12 } });
    expect(tree.left).toEqual({ "value": 8 });
    expect(tree.right).toEqual({ "value": 12 });
  });

  it('setTree method', () => {
    const tree = new BinaryTree({ value: 0});
    tree.setTree({ value: 10, left: { value: 8 }, right: { value: 12 } });
    expect(tree.value).toEqual(10);
    expect(tree.left).toEqual({ "value": 8 });
    expect(tree.right).toEqual({ "value": 12 });
  });
});
