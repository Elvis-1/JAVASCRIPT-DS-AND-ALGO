/*   LINKEDLIST    */

class Node{
    constructor(element){
       this. next = null;
        this.element = element;
    }
}

function LinkedList()
{
    var head = null;
    var length = 0;

    this.size = function(){
        return length;
    }
    this.head = function(){
        return head;
    }
    this.add= function(element){
       if(head == null)
       {
        head = new Node(element);
       }else{
        var currentNode = head;
        while(currentNode.next)
        {
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(element);
      
       }
       length++;
    };

    this.remove = function(element)
    {
       var currentNode = head;
       var previousNode;

       if(currentNode.element == element)
       {
        currentNode = currentNode.next;
       }else{
        while(currentNode.element != element)
        {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
       }
       length--;
    }
    this.isEmpty = function()
    {
        return length == 0;
    }
    this.indexOf = function(element)
    {
        var currentNode = head;
        var index = -1;

        while(currentNode)
        {
            index++;
            if(currentNode.element == element)
            {
                return index;
            }
            currentNode = currentNode.next;
        }
         return -1;
    }

    this.addAt = function(index,element){
       var node = new Node(element);

       var previousNode;
       var currentNode = head;
       var currentIndex = 0;

       if(index > length)
       {
        return false;
       }
       if(index == 0)
       {
        currentNode = currentNode.next;
        head = node;
        return true;
       }else{
        while(currentIndex < index){
            currentIndex ++;
            previousNode = currentNode;
            currentNode = currentNode.next;
            
           }
           node.next = currentNode;
           previousNode.next = node;
       }

         length++;
    

    }
    this.removeAt = function(index)
    {
        var currentNode = head;
        var currentIndex = 0;
        var previousNode;

        if(index < 0 || index >= length)
        {
            return null;
        }
        if(index == 0)
        {
           head = currentNode.next;
        }else{
            while(currentIndex < index)
            {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
        return currentNode.element;
    }


}

var ll = new LinkedList();
// console.log(ll.head());
ll.add('yes');
ll.add('no');
ll.add('right');
// ll.addAt(1,'rallet');
ll.remove('no');
console.log(ll.head());
// ll.removeAt(1);
// console.log(ll.removeAt(0));