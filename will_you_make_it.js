const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let res = (distanceToPump / mpg <= fuelLeft) ? true : false;
    return res;
};