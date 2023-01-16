

var word = "racecar";

var rword = "";
var stack = [];

 // add items to stack
 for(var i=0; i<word.length; i++){
    stack.push(word[i]);
 }

 // remove items from stack
 for(var i=0; i<word.length; i++)
 {
   rword += stack.pop();
 }

 if(rword === word)
 {
    console.log('Its a palodron')
 }else{
    console.log('its not');
 }





/* Stack Class */

function Stack(){

var count = 0;
var stack = {};


     // add items to stack
  this.add = function(book){
    stack[count] = book;
    count++;
  }

// remove items from stack

this.pop = function(){
 count--;
 delete stack[count];

}
// display all the items of the stack
this.show = function(){
    return stack;
}
  }

  var myStack = new Stack;
  console.log(myStack.show());
  myStack.add('book');
  myStack.add('pencil');
  console.log(myStack.show());
  myStack.pop();
  console.log(myStack.show());
