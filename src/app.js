import { Node, BinarySearchTree } from "./bst";

const bst = new BinarySearchTree();
console.log("Tree is empty? " + bst.isEmpty())

bst.insert(10);
bst.insert(5);
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log(bst.isBalanced())
console.log(bst.reBalance())
console.log(bst.isBalanced())
console.log("Tree is empty? " + bst.isEmpty())



let arr = [1,2,3,4,5,6,7]
const newBST = new BinarySearchTree();
newBST.sortedArrayToBST(arr)
console.log(newBST.inOrder())
newBST.insert(22)
newBST.insert(15)
newBST.insert(17)
newBST.reBalance();
console.log(newBST.isBalanced())