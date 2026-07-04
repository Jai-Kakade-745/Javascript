function printTable(number) {
    console.log('Table START ------');
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} X ${i} = ${number * i}`);
    }
    console.log('Table END ------');
}

printTable(90);
