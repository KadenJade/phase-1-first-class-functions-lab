// Code your solution in this file!

const returnFirstTwoDrivers = function (driversArray){
    return driversArray.slice(0, 2);
}  

const returnLastTwoDrivers = function (driversArray){
    return driversArray.slice(2);
}  


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(int) {
    return function(value){ 
    return value * int
    }
}


const fareDoubler = createFareMultiplier(2)


const fareTripler = createFareMultiplier(3)


function selectDifferentDrivers(driversArray, cb){
    return cb(driversArray)
}
