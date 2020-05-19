
const add = (num1, num2) => {
    return num1 + num2;
}

let someNames = ["Ann", "Ben", "Charlie"];

const multiply = (num1, num2) =>{
    return num1 * num2;
}

const arr = ()=>{
    return ["hello", "kay"]
}



module.exports ={
    add,
    someNames,
    multiply,
    arr
}

//want to export the function called add 
// can also do module.exports = add; (because it is only one thing that you want to export) if it's more than one thing, put it in an object. 
// add is your function to be exported for testing



