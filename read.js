// Requiring the module
const reader = require('xlsx')
  
// // Reading our test file
// const file = reader.readFile('./test.xlsx')
  
// let data = []
  
// const sheets = file.SheetNames
  
// for(let i = 0; i < sheets.length; i++)
// {
//    const temp = reader.utils.sheet_to_json(
//         file.Sheets[file.SheetNames[i]])
//    temp.forEach((res) => {
//       data.push(res)
//    })
// }
  
// // Printing data
// console.log(data)

const fetchData = async () => {
    const url = './excel/BFD.xlsx';
    const data = await (await fetch(url)).arrayBuffer();
    /* data is an ArrayBuffer */
    const workbook = XLSX.read(data);
  
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    const sheetValues = XLSX.utils.sheet_to_json(worksheet);
  
    const groupByCategory = sheetValues.reduce((group, product) => {
    const { category } = product;
    group[category] = group[category] ?? [];
    group[category].push(product);
    return group;
    }, {});
  
    console.log(groupByCategory)
  };

  fetchData()