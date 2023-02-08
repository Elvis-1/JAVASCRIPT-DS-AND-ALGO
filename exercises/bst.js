class Node{
    constructor(data,right = null, left = null){
        this.data = data;
        this.right = right;
        this.left = left;
    }
}
class QItem {
  constructor(node,depth){
    this.node = node;
    this.depth = depth;
  }
}

class BST{
    constructor(){
        this.root = null;
    };

add(data){
      let node = this.root;
      if(node === null)
      {
        this.root = new Node(data);
        return;
      }else{

        // while(node)
        // {
        //     if(data < node.data)
        //     {
        //         if(node.left === null)
        //         {
        //             node.left = new Node(data);
        //         }
        //         else{
        //             node = node.left;
        //             return;
        //         }
        //     }else(data > node.data)
        //     {
        //         if(node.right === null)
        //         {
        //             node.right = new Node(data);
        //         }else{
        //             node = node.right;
        //         }
        //     }
        // }
          const searchTree = function(node)
          {
            if(data < node.data)
            {
                if(node.left === null)
                {
                    node.left = new Node(data);
                    return;
                }else
                {
                    return searchTree(node.left);
                }
            }else if(data > node.data)
            {
                if(node.right === null)
                {
                    node.right = new Node(data);
                    return;
                }else{
                     return searchTree(node.right);
                }
            }else {
                return null;
            }

          }
        return  searchTree(node);
      }
}
findMin()
{
    let node = this.root;
    while(node)
    {
        if(node.left === null)
        {
            return node.data;
        }else{
            node = node.left;
        }
    }
}
findMax()
{
    let node = this.root;
  let  chechRightNode = function(node){
        if(node.right === null)
        {
            return node.data;
        }
        else{
          return chechRightNode(node.right);
        }
    }
   return chechRightNode(node);
}
isPresent(data)
    {
        let current = this.root;
        while(current)
        {
            // if(data === null)
            // {
            //     return
            // }
            if(data === current.data)
            {
                return true;
            };
            if(data < current.data)
            {
                current = current.left;
            }
            else{
                current = current.right;
            }

        }
        return false;
}



findMinHt(){
    let node = this.root;
    
    if(node == null)
    {
        return 0;
    }
    let q = [];
    let qt = new QItem(node,1);

    // push into queue;
    q.push(qt);

    while(q.length != 0)
    {
        // collect the front item on queue
    let  qi = q.shift();

       // save it
       let node = qi.node;
       let depth = qi.depth;

       if(node.right == null && node.left == null)
       {
        return depth;
       }

       if(node.right != null)
       {
        qi.node = node.right;
        qi.depth = depth + 1;
        q.push(qi);
        
       }

       if(node.left != null)
       {
        qi.node = node.left;
        qi.depth = depth + 1;
        q.push(qi);
        
       }
    }
    return 0;

}

// findMaxHeight(node = this.root)
// {
// //   let node = this.root;
//   if(node == null)
//   {
//     return -1;
//   }
// //   array.push(no);
//   let left = this.findMaxHeight(node.left);
//   let right = this.findMaxHeight(node.right);
//   if(left > right)
//   {
//     return left + 1;
//   }else{
//     return right + 1;
//   }
// }

 // inOrder transversal transverses the tree in order from the smallest to the bigest
 inOrder()
 {
    let node = this.root;

  if(node == null)
  {
    return null;
  }else{
    let array  = [];
    function transverse(node){
    
          node.left &&  transverse(node.left);
            array.push(node.data);
        node.right && transverse(node.right);
            array.push(node.data);
     }
      transverse(node);
      return array;
  }
 }

//  inOrder() {
//     if (this.root == null) {
//       return null;
//     } else {
//       var result = new Array();
//       function traverseInOrder(node) {       
//         node.left && traverseInOrder(node.left);
//         result.push(node.data);
//         node.right && traverseInOrder(node.right);
//       }
//       traverseInOrder(this.root);
//       return result;
//     };
//   }



 // preOrder transverses the tree from the root node before the leaf


 // post order explores the leaf before the root


 // levelOrder explores all the node in a level on a tree before moving to the next level


}

var bst = new BST();
console.log(bst.isPresent(2));
bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);
console.log(bst.isPresent(2));
// console.log(bst.findMin());
console.log(bst.findMinHt());
// console.log(bst.findMaxHeight());
console.log(bst.inOrder());
