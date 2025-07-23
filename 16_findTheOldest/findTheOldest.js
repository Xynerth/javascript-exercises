const findTheOldest = function(arr) {
    const thisYear = new Date().getFullYear();
    let oldestPerson = arr.reduce((acc, curr) => {
        if (!("yearOfDeath" in acc) && !("yearOfDeath" in curr)) {
            return acc.yearOfBirth > curr.yearOfBirth ? curr : acc;
        }
        else if (!("yearOfDeath" in acc)) {
            let accAge = thisYear - acc.yearOfBirth;
            let currAge = curr.yearOfDeath - curr.yearOfBirth;
            return currAge > accAge ? curr : acc;
        }
        else if (!("yearOfDeath" in curr)) {
            let accAge = acc.yearOfDeath - acc.yearOfBirth;
            let currAge = thisYear - curr.yearOfBirth;
            return currAge > accAge ? curr : acc;
        }
        else {
            console.log(acc.name);
            console.log(curr.name);
            console.log("")
            let accAge = acc.yearOfDeath - acc.yearOfBirth;
            let currAge = curr.yearOfDeath - curr.yearOfBirth;
            return currAge > accAge ? curr : acc;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
