// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}


function fuzzyMatch(drivers, string) {
    return drivers.filter(drivers => drivers.toLowerCase().indexOf(string.toLowerCase()) === 0)
}

function matchName(drivers, string) {
    return drivers.filter(drivers => drivers.name === string)
}