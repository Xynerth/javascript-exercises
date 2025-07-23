function isLetter(char) {
    return (char.toLowerCase() !== char.toUpperCase()) || parseInt(char);
}

function cleanString(str) {
    for (let i = 0; i < str.length; i++) {
        if (!isLetter(str[i])) {
            str = str.substring(0, i) + str.substring(i + 1);
            i--;
        }
    }
    return str;
}

const palindromes = function (str) {
    str = cleanString(str);
    str = str.toLowerCase();
    let front = 0;
    let back = str.length - 1;
    while (front < back) {
        if (str[front] !== str[back]) {
            return false;
        }
        front++;
        back--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
