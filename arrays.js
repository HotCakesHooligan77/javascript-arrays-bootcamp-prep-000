var ingredient1 = "bread";
var ingredient2 = "mild cheese";
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"


var chocolateBars =  ["snickers", "hundred grand", "kitkat", "skittles"];
    
    function addElementToBeginningOfArray(array, element){
    var array1 = [element,...array];
  return array1;
    }
    
    function destructivelyAddElementToBeginningOfArray(array, element){
      [array.unshift(element)];
      return array;
    }
     function addElementToEndOfArray(array, element){
      var array2 = [...array, element];
    }
    function destructivelyAddElementsToEndOfArray(array, element){
      
    }
    
   