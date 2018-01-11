
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const f = (file1, file2) => {
  const text1 = fs.readFileSync(file1, 'utf8');
  const text2 = fs.readFileSync(file2, 'utf8');

  let obj1 = {};
  let obj2 = {};

  if (path.extname(file1) === '.json') {
    obj1 = JSON.parse(text1);
    obj2 = JSON.parse(text2);
  }

  if (path.extname(file1) === '.yaml') {
    obj1 = yaml.safeLoad(text1);
    obj2 = yaml.safeLoad(text2);
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const key12 = keys1.concat(keys2);

  const arrAll = [...new Set(key12)];

  const objReturn = {};

  arrAll.map((currentValue) => {
    if ((typeof obj1[currentValue] !== 'undefined')
      && (typeof obj2[currentValue] !== 'undefined')
      && (obj1[currentValue] === obj2[currentValue])) {
      objReturn[`  ${currentValue}`] = obj1[currentValue];
    }

    if ((typeof obj1[currentValue] !== 'undefined')
      && (typeof obj2[currentValue] !== 'undefined')
      && (obj1[currentValue] !== obj2[currentValue])) {
      objReturn[`+ ${currentValue}`] = obj2[currentValue];
      objReturn[`- ${currentValue}`] = obj1[currentValue];
    }

    if ((typeof obj1[currentValue] !== 'undefined')
      && (typeof obj2[currentValue] === 'undefined')) {
      objReturn[`- ${currentValue}`] = obj1[currentValue];
    }

    if ((typeof obj2[currentValue] !== 'undefined')
      && (typeof obj1[currentValue] === 'undefined')) {
      objReturn[`+ ${currentValue}`] = obj2[currentValue];
    }

    return '';
  });

  return objReturn;
};

export default f;
