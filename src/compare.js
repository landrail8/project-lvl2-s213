
import * as fs from 'fs';

const f = (file1 = '/home/alex/before.json', file2 = '/home/alex/after.json') => {
  const text1 = fs.readFileSync(file1, 'utf8');
  const text2 = fs.readFileSync(file2, 'utf8');

  const obj1 = JSON.parse(text1);
  const obj2 = JSON.parse(text2);
  const objReturn = { gdfgdfg: 'dfgdfgdfg' };

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const key12 = keys1.concat(keys2);

  const arrAll = key12.filter((item, pos) => key12.indexOf(item) === pos);

  console.log(arrAll);

  // arrAll.map(currentValue)

  // console.log(obj2);

  // const diffObject = Object.keys(obj1).reduce((accumulator, currentValue) => {
  //   console.log(currentValue);
  // //   const newMap = map;
  // //   if (obj1[k] !== obj2[k]) {
  // //     newMap[k] = obj2[k];
  // //   }
  //    return 'newMap';
  // }, '');


  // for (const key in obj1) {
  //   if ({}.hasOwnProperty.call(obj1, key)) {
  //     // 1. key and value are equal:
  //     if (typeof obj2[key] !== 'undefined') {
  //       if (obj1[key] === obj2[key]) {
  //         objReturn.push({ key: obj1[key] });
  //       }
  //     }
  //   }
  // }


  // console.log(diffObject);

  return objReturn;
};

export default f;
