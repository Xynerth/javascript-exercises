const fibonacci = function(num) {
    num = +num;
    if (num === 0) {
        return 0;
    }
    else if (num < 0) {
        return "OOPS";
    }

    let prev = 0;
    let curr = 1;
    let temp;

    for (let i = 1; i < num; i++) {
        temp = curr;
        curr = curr + prev;
        prev = temp;
    }

    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
