const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = array => array.slice(0,2);
console.log(drivers.slice(0,2)); 
console.log(drivers)
console.log(drivers.slice(-2)); 
const returnLastTwoDrivers = array => array.slice(-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = num => fare=>fare * num;
const fareDoubler = fare => createFareMultiplier(2)(fare);
const fareTripler = fare => createFareMultiplier(3)(fare);
const selectDifferentDrivers = (array, func) => func(array); 
console.log (createFareMultiplier(4));