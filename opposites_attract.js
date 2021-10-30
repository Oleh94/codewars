function lovefunc(flower1, flower2){
    let result1 = flower1 % 2;
    let result2 = flower2 % 2;
    if (result1 + result2 == 1) {
        return true;
    } else {
        return false;
    }
}