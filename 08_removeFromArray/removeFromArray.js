const removeFromArray = function(arr) {
    const args = Array.from(arguments).slice(1);
    for (arg of args) {
        while(arr.includes(arg)) {
            let index = arr.findIndex(argument => argument === arg);
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
