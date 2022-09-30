const react = require('react')
const xlsxFile = require('read-excel-file/node');
const fs = require('fs');


const concatLists = async () => {

    const B = xlsxFile('./excel/BFD.xlsx', { sheet: 'B' }).then((rows) => {
        let array = []
        for (i in rows){
            array.push(rows[i][0])
            }

        let uniqueArray = [...new Set(array)]
        // B = uniqueArray
        console.dir(uniqueArray, {'maxArrayLength': null})
        return uniqueArray
    })

    const F = xlsxFile('./excel/BFD.xlsx', { sheet: 'F' }).then((rows) => {
        let array = []
        for (i in rows){
            array.push(rows[i][0])
            }

        let uniqueArray = [...new Set(array)]
        // F = uniqueArray
        console.dir(uniqueArray, {'maxArrayLength': null})
        return uniqueArray
    })

    const D = xlsxFile('./excel/BFD.xlsx', { sheet: 'D' }).then((rows) => {
        let array = []
        for (i in rows){
            array.push(rows[i][0])
            }

        let uniqueArray = [...new Set(array)]
        // D = uniqueArray
        console.dir(uniqueArray, {'maxArrayLength': null})
        return uniqueArray
    })

    // const readExcelB = await {"B": B};
    // const readExcelF = await {"F": F};
    // const readExcelD = await {"D": D};


    // // // convert JSON object to string
    // const data = await JSON.stringify(readExcelB, readExcelF, readExcelD);

    // // write JSON string to a file
    // fs.writeFile('concatList.json', data, (err) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log("JSON data is saved.");
    // });

}

concatLists()

