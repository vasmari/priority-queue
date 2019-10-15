class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;

	}

	appendChild(node) {
		if (this.left === null){
		  this.left  = node;
		} else if (this.right === null){
		  this.right = node;
		} else {
		  return;
		}
	
		node.parent = this;
	  }
	
	  removeChild(node) {
		if (node === this.left){
		  this.left = null;
		} else if (node === this.right){
		  this.right = null;
		} else {
		  throw new Error("passed node is not a child of this node");
		}
	
		node.parent = null;
	  }
	
	  remove() {
		if (this.parent !== null){
		  this.parent.removeChild(this);
		}
	  }
	
	  swapWithParent() {
	  }
	
	
	}
	
	module.exports = Node;