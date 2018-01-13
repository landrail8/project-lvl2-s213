
import fs from 'fs';
import _ from 'lodash';

// import path from 'path';
// import yaml from 'js-yaml';
// import ini from 'ini';

const f = (file1, file2) => {
  const text1 = fs.readFileSync(file1, 'utf8');
  const text2 = fs.readFileSync(file2, 'utf8');

  // let obj1 = {};
  // let obj2 = {};
  //
  // if (path.extname(file1) === '.json') {
  const obj1 = JSON.parse(text1);
  const obj2 = JSON.parse(text2);
  // }
  //
  // if (path.extname(file1) === '.yaml') {
  //   obj1 = yaml.safeLoad(text1);
  //   obj2 = yaml.safeLoad(text2);
  // }
  //
  // if (path.extname(file1) === '.ini') {
  //   obj1 = ini.parse(text1);
  //   obj2 = ini.parse(text2);
  // }

  const key12 = _.union(_.keys(obj1), _.keys(obj2));

  const objReturn = key12.reduce((acc, currentValue) => {
    if ((typeof obj1[currentValue] !== 'undefined')
      && (typeof obj2[currentValue] !== 'undefined')
      && (obj1[currentValue] === obj2[currentValue])) {
      const key = `  ${currentValue}`;
      const newObj = {};
      newObj[key] = obj1[currentValue];
      return Object.assign(acc, newObj);
    }

    if ((typeof obj1[currentValue] !== 'undefined')
      && (typeof obj2[currentValue] !== 'undefined')
      && (obj1[currentValue] !== obj2[currentValue])) {
      const key1 = `+ ${currentValue}`;
      const newObj1 = {};
      newObj1[key1] = obj2[currentValue];

      const key2 = `- ${currentValue}`;
      const newObj2 = {};
      newObj2[key2] = obj1[currentValue];

      return Object.assign(acc, newObj1, newObj2);
    }

    if ((typeof obj1[currentValue] !== 'undefined')
      && (typeof obj2[currentValue] === 'undefined')) {
      const key = `- ${currentValue}`;
      const newObj = {};
      newObj[key] = obj1[currentValue];
      return Object.assign(acc, newObj);
    }

    if ((typeof obj2[currentValue] !== 'undefined')
      && (typeof obj1[currentValue] === 'undefined')) {
      const key = `+ ${currentValue}`;
      const newObj = {};
      newObj[key] = obj2[currentValue];
      return Object.assign(acc, newObj);
    }

    return acc;
  }, {});

  return objReturn;
};

export default f;
