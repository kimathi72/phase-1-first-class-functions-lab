// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(){
    let newDivers = drivers.slice(0,2);
    return newDivers;
}
returnFirstTwoDrivers  ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnLastTwoDrivers = function (){
    let newDivers = drivers.slice(-2);
    return newDivers
}
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']))

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(number) {
    return function (fareMultiplier) {
        return fareMultiplier * number
    }
}

const fareDoubler = function(fareMultiplier){
    return createFareMultiplier(2)(fareMultiplier)
}

const fareTripler = function(fareMultiplier){
    return createFareMultiplier(3)(fareMultiplier)
}

function selectDifferentDrivers(arrayOfDrivers, drivers) {
    return drivers(arrayOfDrivers)
}
