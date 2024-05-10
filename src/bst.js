
class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    sortedArrayToBST(arr, start, end) {
              
        if( start > end ) {
            return null;
        }

        var mid = parseInt((start + end) / 2);
        const newNode = new Node(arr[mid])
        if(this.isEmpty()){
            this.root = newNode
        }
        newNode.left = this.sortedArrayToBST(arr, start, mid - 1)
        newNode.right = this.sortedArrayToBST(arr, mid + 1 , end)
        return newNode
    }

    isEmpty() {
        return this.root === null
    }

    insert(value){
        const newNode = new Node(value)

        if(this.isEmpty()){
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if(newNode.value < root.value){
            if(root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if(root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value) {
        if(!root) {
            return false
        } else {
            if(root.value === value){
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }

    preOrder(root = this.root, arr = []){
        if(root) {
            arr.push(root.value)
            // console.log(root.value)
            this.preOrder( root.left, arr)
            this.preOrder( root.right, arr)
        }
        // console.log(arr)
        return arr
    }

    inOrder(root = this.root, arr = []){
        if(root) {
            this.inOrder(root.left, arr)
            arr.push(root.value)
            this.inOrder(root.right, arr)
        }
        return arr
    }

    postOrder(root = this.root, arr = []) {
        if(root) {
            this.postOrder(root.left, arr)
            this.postOrder(root.right, arr)
            arr.push(root.value)
        }
        return arr
    }

    levelOrder(root = this.root, arr = [], queue = []) {
        queue.push(root)
        while(queue.length) {
            let current = queue.shift()
            arr.push(current.value)
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
        return arr
    }

    min(root = this.root) {
        if(!root.left) {
            return root.value
        } else {
            return this.min(root.left);
        }
    }

    max(root = this.root) {
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if(root === null ){
            return root;
        }

        if(value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right){
                return null
            }
            if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)

        }

        return root
    }
}

export {BinarySearchTree}