const react = require('react')
const xlsxFile = require('read-excel-file/node');

 
// xlsxFile('./excel/BFD.xlsx', { getSheets: true }).then((sheets) => {
//     sheets.forEach((obj)=>{
     
//          console.log(obj.name);
//      })
// })

// xlsxFile('./excel/BFD.xlsx', { sheet: A }).then((rows) => {
// for (i in rows){
//         for (j in rows[i]){
//             console.log(rows[i][j]);
//         }
//     }
// })
const concatLists = () => {
    // const [B, setB] = react.useState([]);
    // const [F, setF] = react.useState([]);
    // const [D, setD] = react.useState([]);
    let B = [];
    let F = [];
    let D = [];

    let concatArray = [];

    xlsxFile('./excel/BFD.xlsx', { sheet: 'B' }).then((rows) => {
        let array = []
        for (i in rows){
            array.push(rows[i][0])
            }

        let uniqueArray = [...new Set(array)]
        B = uniqueArray
        console.dir(B, {'maxArrayLength': null})
    })

    xlsxFile('./excel/BFD.xlsx', { sheet: 'F' }).then((rows) => {
        let array = []
        for (i in rows){
            array.push(rows[i][0])
            }

        let uniqueArray = [...new Set(array)]
        F = uniqueArray
        console.dir(F, {'maxArrayLength': null})
    })

    xlsxFile('./excel/BFD.xlsx', { sheet: 'D' }).then((rows) => {
        let array = []
        for (i in rows){
            array.push(rows[i][0])
            }

        let uniqueArray = [...new Set(array)]
        D = uniqueArray
        console.dir(D, {'maxArrayLength': null})
    })

}

concatLists()

