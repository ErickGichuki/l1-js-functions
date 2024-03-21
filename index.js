// utility
function printValue(value){
    console.info(value)
}

// 1.0 FUNCTION DECLARATION
//TODO: create a basic function that adds two random values
function addFixedValues(){
    const a =15;
    const b =20;
    const sum = a + b;
    printValue(sum);
}
//TODO: create a function that takes in two values and adds them
function addTwoValues(c,d){
    const sum = c + d;
    printValue(sum);
}
//TODO: create a function that takes in two values, adds them and returns the value of the addition
function addTwoValuesAndReturn(x,y){
    const sum = x + y;
    return sum;
}

// 1.0 FUNCTION EXPRESSION
//TODO: create a basic function that adds two random values
const addFixedValuesExpression = function(){
    const a =15;
    const b =20;
    const sum = a + b;
    printValue(sum);
}
//TODO: create a function that takes in two values and adds them
const addTwoValuesExpression = function(c,d){
    const sum = c + d;
    printValue(sum);
}

//TODO: create a function that takes in two values, adds them and returns the value of the addition
const addTwoValuesAndReturnExpression = function(x,y){
    const sum = x + y;
    return sum;
    
}

// 1.0 ARROW FUNCTION
//TODO: create a basic function that adds two random values
const addFixedValuesArrow = (a,b) =>{
    const a =15;
    const b =20;
    const sum = a + b;
    printValue(sum);
}
//TODO: create a function that takes in two values and adds them
const addTwoValuesArrow = (c,d) =>{
    const sum = c + d;
    printValue(sum);
}

//TODO: create a function that takes in two values, adds them and returns the value of the addition
const addTwoValuesAndReturnArrow = (x,y) =>{
    const sum = x + y;
    return sum;
}

