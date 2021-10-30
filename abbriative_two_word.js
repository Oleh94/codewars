function abbrevName(name){
    let arr = name.split(" ");
    let arr1 = arr[0].split("");
    let arr2 = arr[1].split("");
    return arr1[0].toUpperCase() + "." + arr2[0].toUpperCase();
}