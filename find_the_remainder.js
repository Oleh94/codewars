function remainder(a, b){
    let res = (a > b) ? (a % b) : (a < b) ? (b % a) : (a == 0 || b == 0) ? NaN : 0;
    return res;
}