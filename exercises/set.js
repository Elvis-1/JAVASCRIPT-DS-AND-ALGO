 function MySet(){

var collection = [];

this.values = function(){
    return collection;
}
this.has = function(item){
 return  (collection.indexOf(item) !==-1);
}

this.add = function(item){
    if(!this.has(item))
    {
        collection.push(item);
      return true;
    }

   return false;
}

this.remove = function(item){
   if(!this.has(item))
   {
     return false;
   }
   var index = collection.indexOf(item);
   collection.splice(index,1);
   return true;
}

// return the size of the collection
this.size = function(){
    return collection.length;
} 

// return the union of two sets
this.union = function(otherSet){
  var unionSet = new MySet();
  var firstSet = this.values();
  var secondSet = otherSet;

  firstSet.forEach(function(e){
    unionSet.add(e);
  });

  secondSet.forEach(function(e){
    if(unionSet.has(e))
    {
        unionSet.add(e);
    }
  })

  return unionSet.values();
}



// return the intersection of two sets
this.intersection = function(otherSet){
   var firstSet = this.values();
   var secondSet = otherSet;
   var intersectionSet = new MySet();


   firstSet.forEach(function(e){
     if(secondSet.indexOf(e) !==-1)
     {
        intersectionSet.add(e);

     }
  
   })

return intersectionSet.values();
}

// return the difference between two sets
this.difference = function(otherSet){
var firstSet = this.values();
var secondSet = otherSet;

var differenceSet = new MySet();
firstSet.forEach(function(e){
    if(!secondSet.has(e))
    {
        differenceSet.add(e);
        return true;
    }
})

return differenceSet.values();


}

// check if the setis a sub set
this.subset = function(otherSet){
var firstSet = this.values();
return firstSet.every(function(e){
    return otherSet.has(e);
})

}


}

var firstSet = new MySet;
var secondSet = new MySet;

console.log(firstSet.values());
firstSet.add('a');
firstSet.add('b');
firstSet.add('c');
firstSet.add('d');


secondSet.add('a');
secondSet.add('b');
secondSet.add('d');
console.log(firstSet.values());
console.log(secondSet.values());
//console.log(firstSet.union(['a','b','d','e','f']));
//console.log(firstSet.intersection(['a','b','d','e','f']));
console.log(firstSet.difference(secondSet));
console.log(firstSet.subset(secondSet));

