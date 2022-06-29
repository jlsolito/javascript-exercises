const removeFromArray = function(arr) {
    console.log(arguments);
    if(arguments.length >= 2) {
        for(let i = 1; i < arguments.length; i++){
            for(let j = 0; j < arr.length; j++){
                //console.log(`Array: ${arr[j]}\nArgs: ${arguments[i]}`)
                if(arr[j] === arguments[i]){
                    arr.splice(j, 1);
                    //console.log(arr);
                }
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
