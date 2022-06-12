// TODO: import module bila dibutuhkan di sini
/* fs = FileReader API node js*/
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallBack) => {
  let resultArray = []

  /* reaad file json
    fs.readFIle('nama file', 'option/string encoding', (fnCallback))

    dengan set encoding
  */
  fs.readFile(
    file1, 
    {
      encoding : "utf8"
    },
    (err, data)=> {
      if (err) {
        return fnCallBack(err, null);
      }
      
      const dataResult = JSON.parse(data);
      resultArray.push(dataResult.message.split(" ")[1]); //split data aray ke 1
    }
  )

  /* langsung utf8 */
  fs.readFile(file2, 'utf8', (err, data)=> {
    if (err) {
      return fnCallBack(err, null);
    }

      const dataResult = JSON.parse(data);
      resultArray.push(dataResult[0].message.split(" ")[1]);
  });


  fs.readFile(file3, 'utf8', (err, data) => {
    if (err) {
      return fnCallBack(err, null);
    }

    const dataResult = JSON.parse(data);
    resultArray.push(dataResult[0].data.message.split(" ")[1]);
    return fnCallBack(null, resultArray);
  });
}

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
