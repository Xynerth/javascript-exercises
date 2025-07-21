const sumAll = function(start, end) {
    console.log(typeof start);
    // Number.isInteger() is a useful function
    if (typeof start != "number" || typeof end != "number" 
        || start < 0 || end < 0 || start > Math.floor(start)
        || end > Math.floor(end)
    ) {
        return "ERROR";
    }
    else if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }
    let result = 0;
    for (let i = start; i <= end; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
