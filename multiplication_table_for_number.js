function multiTable(number) {
    let string = "";
    for (let i = 1; i < 10; i++) {
        let result = i * number;
        string += `${i} * ${number} = ${result}\n`;
    }
    let result2 = 10 * number;
    string += `10 * ${number} = ${result2}`
    return string;
}

const multiTable = (number) => {
    let table = '';

    for(let i = 1; i <= 10; i++) {
        table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`;
    }

    return table;
}

function multiTable(n) {
    return [...Array(10)].map((_,i)=>`${i+1} * ${n} = ${n*i+n}`).join('\n')
}

function multiTable(number) {
    let table = '';
    for(let i = 1; i <= 10; i++){
        table += `${i} * ${number} = ${i*number}\n`
    }
    return table.slice(0, -1)
}

const multiTable = (n) => {
    const table = []
    for(let i = 1; i <= 10; i++) {
        table.push(`${i} * ${n} = ${i*n}`)
    }
    return table.join('\n')
}


const multiTable = n => ([1,2,3,4,5,6,7,8,9,10].map(i=>`${i} * ${n} = ${i*n}`)).join('\n')