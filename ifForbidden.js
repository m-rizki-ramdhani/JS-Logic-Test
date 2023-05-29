function ifForbidden(a, b){
    const result = [
        `${a} is equal to ${b}`,
        `${a} is greater than ${b}`,
        `${a} is smaller than ${b}`,
    ];
    
    const indexResult = +(a > b) - +(a < b);

    return result[indexResult];
}

console.log(ifForbidden(-4, -7))