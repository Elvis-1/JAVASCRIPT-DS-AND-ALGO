console.log("good");

// stack
var word = "racecar";

var rword = "";

var letters = [];

// put letters of word into stack
for(var i = 0; i < word.length; i++)
{
    letters.push(word[i]);
}


// pop of the stack in reverse order
for(var i = 0; i< word.length; i++)
{
    rword += letters.pop();
}


// check if rword and word is thesame'

if(word === rword)
{
    console.log('Its is palindrome');
}
else{
    console.log('it is not a palindrome');

}

/* Building a Stack Object */

var Stack = function(){
    this.count = 0;
    this.storage = {};

    this.push = function (value){
      this.storage[this.count] = value;
      this.count++;
    }

    // removes and returns the value at the end of the stack
    this.pop = function(){
        if(this.count == 0){
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function(){
        return this.count;
    }

    // returns the value at the end of the stack
    this.peek = function(){
       return this.storage[this.count - 1];
    }
}


// var stack = new Stack;

// stack.push(4);
// stack.push(5);
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.size());


/*  SET      */

function mySet(){

    // the collection will hold the set
    var collection = [];

    // this method will check for the presence of an element and return true or false
    this.has = function(element){
        return (collection.indexOf(element) !==1);
    }
    // this method will return all the values in the set

    this.values = function(){
        return collection;
    }
// this method will add an element to the set
    this.add = function(element){
        if(!this.has(element))
        {
             collection.push(element);
             return true;
        }
        return false;
    }

    // this method will remove an element from the set

    this.remove = function(element){
        if(this.has(element)){
           index = collection.indexOf(element);
           collection.splice(index,1);
           return true; 
        }
        return false;
    }

    // this method will return the size of the collection

    this.size = function(){
        return collection.length;
    }
    // this method will return the union of two sets
    this.union = function(otherSet){
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        
        firstSet.forEach(function(e){
          unionSet.add(e);
        });

        secondSet.forEach(function(e){
            unionSet.add(e);
          });

          return unionSet;
    }

    // this method will return the intersection of two sets as a new set
    this.intersection = function(otherSet){
//        var newSet = new mySet();
//        var firstSet = this.values();
//        var secondSet = otherSet.values();

//        firstSet.forEach(function(e){
//         if( secondSet.indexOf(e) === 1){
//             newSet.add(e);
//         }  
//        });
// return newSet;

var intersectionSet = new mySet();
firstSet = this.values();
firstSet.forEach(function(e){
    if(otherSet.has(e)){
        intersectionSet.add(e);
    }
});
return intersectionSet;
    }

    // this method will return the diffence of two sets as a new set
    this.difference = function(otherSet){
        var differenceSet = new mySet();
        firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }

    // this method checks if the set is a subset of a different set
    this.subSet = function(otherSet){
      var firstSet = this.values();
     return firstSet.every(function(e){
       return otherSet.has(e);
      })
    }

}
