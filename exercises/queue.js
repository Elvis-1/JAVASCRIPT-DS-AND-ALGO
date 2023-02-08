function Queue(){
    var collection = [];
    this.print = function(){
        console.log(collection);
    }
    this.size = function(){
        return collection.length;
    }
    this.enqueue = function($item){
        collection.push($item);
    }

    this.dequeue = function(){
       return collection.shift();
    }
    this.front = function(){
        return collection[0];
    }

    this.empty = function(){
        return collection.length === 0;
    }
}

function ProirityQueue(){
    var collection = [];

    this.print = function(){
        console.log(collection);
    }
    this.empty = function(){
        return (collection.length === 0)
    }
    this.length = function(){
        return collection.length;
    }
    this.front = function(){
        return collection[0];
    }
    this.dequeue = function(){
        return collection.shift();
     }
    this.enqueue = function(element){

      if(this.empty()){
        collection.push(element);
      }else{
        var added = false;
        // check for the priority
        for(var i = 0; i < this.length(); i++){
            if(element[1] < collection[i][1])
            {
                collection.splice(i,0,element);
                added = true;
                break
            }
        }
        if(!added)
        {
            collection.push(element);
        }
      }
    }
}

var CircularQueue = function(){

}

var que = new Queue();
// console.log(que.empty());
// que.enqueue('1');
// que.enqueue('2');
// que.enqueue('3');
// que.enqueue('3');
// que.enqueue('3');
// que.dequeue();
// que.enqueue('7');
// console.log(que.empty());
// que.print();

var pq = new ProirityQueue();
// console.log(pq.empty());
// pq.enqueue(['John Cage', 0]);
// pq.enqueue(['Joe Caries', 1]);
// pq.enqueue(['Moe Blakes', 2]);
// pq.enqueue(['Xert Bl', 2]);
// pq.enqueue(['Ert Bl', 3]);
// pq.enqueue(['Elvis l', 2.5]);
// console.log(pq.empty());
// console.log(pq.print());
// pq.dequeue();
// console.log(pq.front());


function staircase(n) {

    // here we use just one for loop where i tracks the number of rows
    // the number of rows (i) should be less than or equal to n
      for (let i = 1; i <= n; i++) {
        // print out a " " n-i times and append a # i times
        // console log adds a new line by default
        
          console.log(" ".repeat(n-i) + "#".repeat(i))
      }    
  }

  //staircase(6);

  function miniMaxSum(arr) {
    // Write your code here
    const sortedArray = arr.sort();

    let min_sum = 0

    let max_sum = 0

    for(let i =0; i < arr.length; i++){
        if( i < arr.length -1 ) {
            min_sum += arr[i]
        } 
        if (i > 0) {
            max_sum += arr[i]
        }
    }

    console.log(min_sum , max_sum) 

}

miniMaxSum([1,2,3,4,5]);