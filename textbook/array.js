/*  CHECKING ACCOUNT  */
function Checking(amount)
{
  this.amount = amount;
  this.deposit;
  this.withdraw;

  this.balance = function(){
    console.log(this.amount);
  }
  this.deposit = function(amount){
     this.amount += amount; 
     console.log('your balance is ' + this.amount);
  }
  this.withdraw = function(amount){
    if(amount > this.amount)
    {
        console.log('insufficient funds');
        return;
    }else{
        console.log('collect cash ' + amount);
       
    }

    this.amount -= amount; 
    console.log('balance left is ' + this.amount);
    return;

  }
}

/*  CREATING ARRAYS */

var numbers = [];
console.log(numbers.length); 
var numbers = new Array(1,2,3,4,5);
console.log(numbers.length);
var numbers = new Array(10);
console.log(numbers.length);

var number = 3;
var arr = [7,4,1776];
console.log(Array.isArray(number));
console.log(Array.isArray(arr));

/* Accessing and Writing Array Elements */

var num = [];
for(var i= 0; i<100; i++){
    num[i] = i;
}
var num = [1,2,3,4,5];
// var sum = num[0]+num[1]+num[2]+num[3]+num[4];

var sum = 0;
for(var i = 0; i<num.length; i++)
{
  sum +=num[i];
}

/* Creating Arrays from Strings */
var sentence = "the quick brown fox jumped over the lazy dog";
var word = sentence.split(" ");
for(var i = 0; i<word.length; i++)
{
   // console.log("word :" + word[i]);
}

/* AGGREGATE ARRAY OPERATIONS */

var number = [];
for(var i = 0; i<100; i++)
{
    number[i] = i+1;
}
var samenums = number;
number[0] = 400;
//console.log(number[0]);

function copy(arr1, arr2)
{
    for(var i=0; i< arr1.length; i++)
    {
        arr2[i] = arr1[i];
    }

}

var num = [];
var samenums;
for(var i = 0; i<100; i++)
{
  num[i] = i+1;
}
copy(num, samenums);

/*  SEARCHING FOR A VALUE  */
 function searchFirstOccurence(name)
 {
    var names = ["David","Mike", "Cynthia", "Raymond", "Clayton", "Jennifer"];
    //ensure it is a string
    if(typeof name != "string")
    {
        console.log('only string is required');
        return;
    }
    // ensure the first character is upper case;
    var lowerCase = name.toLowerCase();
    var split = lowerCase.split('');
   
    for(var i=0; i<split.length; i++)
    {
        split[0] =  split[0].toUpperCase();
    }
    var name = split.join('');
    var position = names.indexOf(name);

    if(position >= 0)
    {
        console.log('Found '+ name + ' at position ' + position);
    }else{
        console.log('Didn\'t find name '+ name);
    }
 }


function searchLastOccurence(name)
{
    var names = ["David", "Mike", "Cynthia", "Raymond", "Clayton", "Mike",
    "Jennifer"];
    if(typeof name !== "string")
    {
        console.log("only string data is allowed");
        return;
    }
    // convert to lowercase
    var lowerCase = name.toLowerCase();
    var split = lowerCase.split("");
    console.log(split);
    for(var i=0; i < split.length; i++)
    {
        split[0]= split[0].toUpperCase();
    }
    var name = split.join("");
    // console.log(name);
    var position = names.lastIndexOf(name);
    if(position >= 0)
    {
        console.log('Found '+ name + ' at position ' + position);
    }else{
        console.log('Didn\'t find name '+ name);
    }

}



function wordCount(string)
{
    // check input type
    if(Array.isArray(string))
    {
        return 'Only string is allowed';
    }
    
    var split = string.split(" ");
    var join = split.join('');
    var length = join.length;
    
    // check if length is above 300
    if(length < 300)
    {
        return 'Length of words must be above 300';
    }
  return length;
}

/* STRING REPRESENTATION OF ARRAY */

function strRepArr(array)
{
//    var string = array.join();
  var string = array.toString();
  return string;
}

/*  Creating New Arrays from Existing Arrays   */
// concat() and splice().

 function getNewArr1(arr1, arr2)
 {
   var newArr = arr1.concat(arr2);
//    var newArr = arr1 + arr2;
   return newArr;
 }

 function getNewArr2(arr1, arr2)
 {
   var newArr = arr1.splice(1,2);
   return newArr;
 }

 /* Mutator Functions   */

 /* Adding Elements to an Array */

 // push(), unshift()
 function addElements(a)
 {
   var arr = [];
   arr.push(a);
   console.log(arr);
   // using length property, not efficient
   arr.length = a;
   console.log(arr);
 }

 function addElements1(a)
 {
    // not also efficient
    var arr = [2,3,4];
    for(var i =arr.length; i >= 0; i--)
    {
      arr[i] = arr[i-1];
       
    }
    arr[0] = a;
    return arr;
 }
 function addElements2(a)
 {
    // not also efficient
    var arr = [2,3,4];
    arr.unshift(a);
    return arr;
 }

 /* REMOVING ELEMENTS FROM AN ARRAY */

 function removeEle(arr)
 {
   var a = arr.pop();
   console.log(arr);
   return a;
 }
 
 function removeEle1(arr)
 {
    // ineffficient
  for(var i=0; i<arr.length; i++)
  {
    arr[i] = arr[i+1];
  }
   return arr;
 }

 function removeEle2(arr)
 {
    arr.shift()

   return arr;
 }

 /* Adding and Removing Elements from the Middle of an Array  */

function addEl(arr)
{
  var arr1 = [1,2,3,7,8];

  arr1.splice(3,0,arr);
  return arr1;
}
function rEl()
{
    var arr1 = [1,2,3,100,200,300,4,5];

    arr1.splice(3,3);
    return arr1;
}

/* Putting Array Elements in Order   */

function orderAr()
{
    var names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond"];
    names.sort();
    return names;
} 
function orderAr1()
{
    var nums = [3,1,2,100,4,200];
    function compare(num1,num2)
    {
        return num1 - num2;
    }
    nums.sort(compare);
    return nums;
} 

/* Iterator Functions  */

/* Non–Array-Generating Iterator Functions  */

function itFunction(array)
{
    function square(num)
    {
        console.log(num, num*num);
    }
    array.forEach(square);
}


function itFunction2(array)
{
    function isEven(num)
    {
      return num % 2 == 0;
    }
   return array.every(isEven);
}

function itFunction3(array)
{
    function isEven(num)
    {
        return num % 2 == 0;
    }
return array.some(isEven);
}
function itFunction4(array)
{
    function sum(total,current)
    {
      return total + current;
    }
   return array.reduce(sum);

}

function itFunction5(array)
{
    function concat(total,current)
    {
      return total + ' '   + current+ ' ';
    }
   return array.reduce(concat);

}
function itFunction6(array)
{
    function concat(total,current)
    {
      return total +' '  + current+ ' ';
    }
   return array.reduceRight(concat);

}

/* Iterator Functions That Return a New Array  */

function itNewArray(array)
{
   function add(num)
   {
    return num+=5;
   }
   return array.map(add);
}

function itNewArray2(array)
{
   function word(string)
   {
    return string[0];
   }
   var newArr = array.map(word);
   return newArr.join('');
}

function itNewArray3(array)
{
    function isEven(num)
    {
        return num%2 == 0;
    }
    return array.filter(isEven);
}

function scoreGrades(array)
{
    function passing(num)
    {
        return num >= 60;
    }
   return array.filter(passing);
}
var grades = [];
for(var i=0; i<20; i++)
{
    grades[i] = Math.floor(Math.random() * 101);
}

function dictionaryChecker(array)
{
  function check(word)
  {
    return word.length > 5;
  }

  return array.filter(check);
}
 var dictionary = ['God', 'is', 'good', 'to', 'me','always'];
 var nums = [1,3,5,7,9];

 function afterc(array)
 {
    function check(string)
    {
      if(string.indexOf('cie') > -1)
      {
        return true;
      }
      return false;
    }
   return array.filter(check);
 }
 var words = ["recieve","deceive","percieve","deceit","concieve"];
//  console.log(afterc(words));

 /* Two-Dimensional and Multidimensional Arrays */

var twoDi = [];
var array = [];
for(var i = 0; i<5; i ++)
{
  twoDi[i] = [];
}

Array.matrix = function(numrows, numcols, ini)
{
  var arr = [];
  for(var i = 0; i < numrows; ++i)
  {
    var columns = [];
    for(var j = 0; j<numcols; ++j)
    {
      columns[j] = ini;
    }
    arr[i] = columns;
  }
  
  return arr;;
}

var nums = Array.matrix(5,4,0);
// console.log(nums);

var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];

/*  Processing Two-Dimensional Array Elements   */

// For columnar processing,
function columnarProcessingOfArr(array)
{
   var studentAverage = 0.0;
   var total = 0;
   for(var rows = 0; rows < array.length; rows++)
   {
    for(var cols = 0; cols < array[rows].length; cols++)
    {
      total += array[rows][cols];
 
    }
    studentAverage = total/array[rows].length;
    
    console.log("Student " + parseInt(rows+1) + " with total " +  total + ", and an average of " + studentAverage.toFixed(2));
    total = 0;
average = 0.0;
   } 
}

/*  row-wise computation  */

function rowWiseArrProcessing(array)
{
  var studentAverage = 0.0;
  var total = 0;
  for(var cols = 0; cols < array.length; cols++)
  {
    for(var rows = 0; rows < array[cols].length; rows++)
    {
      total += array[rows][cols]; 
    }
    studentAverage = total/array[cols].length;
    console.log("Student " + parseInt(cols+1) + " with total " +  total + ", and an average of " + studentAverage.toFixed(2));
    total = 0;
average = 0.0;
  }
}

/* Jagged Arrays   */

function jaddedArray(array)
{
  var total = 0;
  var studentAverage = 0.0;
  for(var rows =0; rows < array.length; rows++)
  {
    for(var cols = 0; cols < array[rows].length; cols++)
    {
      total += array[rows][cols];
    }
    studentAverage = total/array[rows].length;
    console.log("Student " + parseInt(rows+1) + ' average grade is ' + studentAverage.toFixed(2) + ', with total of ' + total);
     total = 0;
     studentAverage = 0.0;
  }
}
var grades = [[89, 77],[76, 82, 81],[91, 94, 89, 99]];

 /* Arrays of Objects  */

function Points(x,y)
{
 this.x = x;
 this.y = y;
}

function displayPoints(array)
{
   for(var i = 0; i < array.length; i++)
   {
    console.log(array[i].x + "," + array[i].y);
   }
}
var p1 = new Points(1,2);
var p2 = new Points(3,4);
var p3 = new Points(5,6);
var p4 = new Points(7,8);
var p5 = new Points(9,10);
var pointArray = [p1,p2,p3,p4,p5];
displayPoints(pointArray);

/* Arrays in Objects  */

function weekTemps()
{
  this.dataStore = [];
  this.add;
  this.average;

  this.add = function(temp)
  {
    this.dataStore.push(temp);
  }

  this.average = function()
  {
    var total = 0;
    for(var i=0; i<this.dataStore.length; i++)
    {
      total += this.dataStore[i];
    }
    var average = total/this.dataStore.length;
    console.log("Average temperature is " + average.toFixed(2));
  }

}

/* EXERCISES */

class Student{
  name;
  grade;
  constructor(name,grade)
  {
    this.name = name;
    this.grade = grade;
  }
}

function Grades()
{
  this.grades = [];

this.addStudentWithGrade = function(name,grade)
{
  var st = new Student(name,grade);
  this.grades.push(st);
}

this.displayGrades = function()
{
 for(var i = 0; i < this.grades.length; i++)
  {
  console.log(this.grades[i].name+ " has " +this.grades[i].grade + " grades");
  }
}
}

var grades = new Grades();
grades.addStudentWithGrade('Mat',40);
grades.addStudentWithGrade('Sarah',60);

function setOfWords(array)
{
  this.array = array;
  this.forward = function()
  {
    console.log(this.array);
  }
  this.reverse =function()
  {
    console.log(this.array.reverse());
  }
}


function Temps(){
  this.monthTemps = [];
  this.weekTemps = [];  // rows
  this.length;
  
  this.addTemps = function(temp)
  {
    if(this.weekTemps.length >= 7)
    {
      console.log('Weekly temps is filled');
      this.weekTemps = [];
      this.weekTemps.push(temp);
      if(this.monthTemps.length >= 4)
      {
     this.monthTemps[this.weekTemps.length] = this.weekTemps;
     return true;
      }
      this.monthTemps.push(this.weekTemps);
      return true;
    }
    else{
      this.weekTemps.push(temp);
      if(this.monthTemps.length >= 4)
      {
        console.log('got here!');
     this.monthTemps[this.monthTemps.length] = this.weekTemps;
     return true;
      }else{
        console.log('entered here!');

        this.monthTemps.push(this.weekTemps);
      
        return true;
      }

    }
  }

  this.addWeeklyTemps = function(week)
  {
     
    if(!Array.isArray(week))
    {
      console.log('week data must be an array');
      return;
    }
    this.weekTemps = week;
    this.monthTemps.push(this.weekTemps);
    
  }

  this.addDailyTemps = function(daily)
  {
    if(this.weekTemps.length >= 6)
    {
      this.weekTemps[7]= daily;
      return;
    }else{
     this.weekTemps.push(daily);
     return;
    }
  }

  this.displayMonthlyTemps = function()
  {
    console.log(this.monthTemps);
  }


}

var temps = new Temps();

// temps.addTemps(5);
// temps.addTemps(6);
// temps.addTemps(7);
// temps.addTemps(8);
// temps.addTemps(9);
// temps.addTemps(10);
// temps.addTemps(11);
// temps.addTemps(12);
// temps.addWeeklyTemps([1,2,3,4,5,6,6,7]);
// temps.addWeeklyTemps([1,2,3,4,5,6,6,7]);
// temps.addWeeklyTemps([1,2,3,4,5,6,6,7]);
// temps.addWeeklyTemps([1,2,3,4,5,6,6,7]);


temps.displayMonthlyTemps();


function Letters()
{
  this.letterStorage = [];
  this.dictionary = [];
  this.storeSingleLetters = function(letter)
  {
    // ensure its a letter and a single letter

      if(typeof letter !== 'string')
      {
         console.log('not a string');
         return;
      }

      // check the length of letter
      if(letter.length > 1)
      {
        
        // method 1 using split to get the first element of a string
        var split = letter.split('');
        var firstElement = split.splice(0,1);
        var firstElement = firstElement.join('');
        this.letterStorage.push(firstElement);

       // method 2 using substring to get the first element
      // var first = letter.substring(0,1)
      //  console.log(first);
      //   return;
      }
      this.letterStorage.push(letter);
   
      return;

      
  }

  this.displaySingleWord = function()
  {
    var singleWord = this.letterStorage.join('');
    console.log('This is the word '+ singleWord);
  }

  this.saveWordInDictionary = function(word)
  {
    if(typeof word != 'string')
    {
      console.log('Only string is allowed');
      return;
    }else if(word.length < 3)
    {
      console.log('String must be longer three');
      return;
    }
    this.dictionary.push(word);
    console.log('saved!');
  }

  this.checkDictionary = function(word)
  {
    if(typeof word != 'string')
    {
      console.log('Only string is allowed')
      return;
    }
    function check(wd)
    {
      return wd == word;
    }

    var resultString = this.dictionary.filter(check).join('');
    if(resultString == '')
    {
      console.log('Not Found');
      return;
    }
    console.log(resultString);

  }
  this.displayDictionary = function()
  {
    console.log(this.dictionary);
  };
}


var lt = new Letters();
lt.storeSingleLetters('Good');
lt.storeSingleLetters('okay');
lt.storeSingleLetters('dash');

lt.saveWordInDictionary('all');
lt.saveWordInDictionary('Bye');
lt.saveWordInDictionary('Get');
lt.checkDictionary('Hope');

lt.displayDictionary();



