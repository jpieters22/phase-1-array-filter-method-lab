function findMatching(drivers , string) {
    console.log(string);
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase().indexOf(string.toLowerCase()) === 0
    })
}

function matchName(drivers, driverName) {
    return drivers.filter(driver => driver.name === driverName);
}
