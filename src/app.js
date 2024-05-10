import { Node, BinarySearchTree } from "./bst";

const bst = new BinarySearchTree();
console.log("Tree is empty? " + bst.isEmpty())

bst.insert(10);
bst.insert(5);
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log("Tree is empty? " + bst.isEmpty())
// console.log(bst)
// console.log(bst.search(bst.root, 10))
// console.log(bst.search(bst.root, 1))
// console.log(bst.search(bst.root, 16))
// console.log(bst.preOrder())
// console.log(bst.inOrder())
// console.log(bst.postOrder())
// bst.levelOrder()
// console.log(bst.levelOrder())
// console.log(bst.isBalanced());
// console.log(bst.max())
// console.log(bst.min())


// bst.delete(10)
// console.log(bst.levelOrder())
// console.log(bst)


let arr = [1,2,3,4,5,6,7]
let arrLength = arr.length;
const newBST = new BinarySearchTree();
newBST.sortedArrayToBST(arr, 0, arrLength -1)
console.log(newBST.preOrder())
console.log(newBST.isBalanced())
newBST.insert(22)
newBST.insert(15)
console.log(newBST.inOrder())
console.log(newBST.isBalanced())
